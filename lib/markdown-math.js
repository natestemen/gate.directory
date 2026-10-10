// markdown-it rule that hands $...$ and $$...$$ to KaTeX untouched.
//
// Without it, Markdown runs first and mangles LaTeX: `\\` and `\,` lose a
// backslash, a `_` after `}` opens italics, and `{c=0}` can be read as an
// attribute block. With it, pages contain plain LaTeX. The math is still
// rendered in the browser by KaTeX's auto-render; this only keeps Markdown
// from interpreting what lies between the dollar signs.
module.exports = function mathPassthrough(md) {
  const DOLLAR = 0x24;
  const BACKSLASH = 0x5c;

  // index of the next unescaped `open` at or after `from`, or -1
  function closing(src, open, from, max) {
    let i = src.indexOf(open, from);
    while (i !== -1 && i < max && src.charCodeAt(i - 1) === BACKSLASH) i = src.indexOf(open, i + 1);
    return i === -1 || i >= max ? -1 : i;
  }

  function math(state, silent) {
    const src = state.src;
    const start = state.pos;
    const max = state.posMax;
    if (src.charCodeAt(start) !== DOLLAR) return false;

    const display = start + 1 < max && src.charCodeAt(start + 1) === DOLLAR;
    const open = display ? "$$" : "$";
    const from = start + open.length;
    const end = closing(src, open, from, max);
    if (end === -1) return false;

    const content = src.slice(from, end);
    // inline math may not be empty or start/end with whitespace ("costs $5 and $6" is prose)
    if (!display && (content.length === 0 || /^\s|\s$/.test(content))) return false;

    if (!silent) {
      const token = state.push("math", "", 0);
      // keep the delimiters in `content`: markdown-it-attrs reads a trailing
      // `{...}` off the last token of a block, which would eat `\end{bmatrix}`
      token.content = open + content + open;
      token.markup = open;
    }
    state.pos = end + open.length;
    return true;
  }

  md.inline.ruler.before("escape", "math", math);
  md.renderer.rules.math = (tokens, idx) => md.utils.escapeHtml(tokens[idx].content);
};
