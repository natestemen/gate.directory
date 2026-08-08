#!/usr/bin/env python3
"""Verify that every external URL in the site's content still resolves.

Scans gates/*.md and groups/*.md for URLs (frontmatter `url:` fields and
markdown links), checks each unique page once, and writes a markdown report
of failures. Exits non-zero if any link is broken so CI can act on it.
"""
import argparse
import concurrent.futures
import pathlib
import re
import subprocess
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent

# Publishers that block automated clients with 403 but serve browsers fine.
ALLOW_403_PREFIXES = (
    "https://doi.org/",
    "https://journals.aps.org/",
    "https://royalsocietypublishing.org/",
)

USER_AGENT = "Mozilla/5.0 (compatible; gate.directory link checker)"


def collect_urls():
    """Map each unique URL to the files that reference it."""
    urls = {}
    for f in sorted((ROOT / "gates").glob("*.md")) + sorted((ROOT / "groups").glob("*.md")):
        text = f.read_text()
        found = re.findall(r"url: (https?://\S+)", text)
        found += re.findall(r"\]\((https?://[^)\s]+)\)", text)
        for url in found:
            urls.setdefault(url, []).append(f.relative_to(ROOT).as_posix())
    return urls


def check(url):
    """Return the final HTTP status for a URL (fragment stripped), retrying once."""
    base = url.split("#")[0]
    for _ in range(2):
        result = subprocess.run(
            ["curl", "-s", "-o", "/dev/null", "-w", "%{http_code}", "-L",
             "--max-time", "30", "-A", USER_AGENT, base],
            capture_output=True, text=True,
        )
        code = result.stdout.strip()
        if code.isdigit() and 200 <= int(code) < 400:
            return int(code)
    return int(code) if code.isdigit() else 0


def is_ok(url, code):
    if 200 <= code < 400:
        return True
    if code == 403 and url.startswith(ALLOW_403_PREFIXES):
        return True
    return False


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--report", type=pathlib.Path, help="write a markdown failure report here")
    parser.add_argument("--workers", type=int, default=8)
    args = parser.parse_args()

    urls = collect_urls()
    # Check each base page once even when many anchored URLs share it.
    bases = {}
    for url, files in urls.items():
        bases.setdefault(url.split("#")[0], []).extend(files)

    print(f"checking {len(bases)} unique pages ({len(urls)} urls)...")
    failures = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=args.workers) as pool:
        for base, code in zip(bases, pool.map(check, bases)):
            if not is_ok(base, code):
                failures.append((code, base, sorted(set(bases[base]))))
                print(f"FAIL {code} {base}")

    if failures:
        lines = [
            "The scheduled link check found broken external links:",
            "",
            "| Status | URL | Referenced by |",
            "| --- | --- | --- |",
        ]
        for code, base, files in sorted(failures):
            lines.append(f"| {code} | {base} | {', '.join(f'`{f}`' for f in files)} |")
        report = "\n".join(lines) + "\n"
        if args.report:
            args.report.write_text(report)
        print(f"\n{len(failures)} broken links")
        sys.exit(1)

    print("all links OK")


if __name__ == "__main__":
    main()
