# `gate.directory`

Gate Directory is a website dedicated to cataloging quantum gates used across the field of quantum information and computation.

## Local Development

The website is built with static site generator [11ty](https://www.11ty.dev/), and to build it locally, you'll need [Node.js](https://nodejs.org/en/download).

1. Clone the repository:
    ```sh
    git clone git@github.com:natestemen/gate.directory.git
    cd gate.directory
    ```
2. Install dependencies:
    ```sh
    npm install
    ```
3. Start the development server:
    ```sh
    npm run serve
    ```
4. The `npm run serve` command will indicate which port the pages are being served from on your machine.

When deploying to GitHub Pages the build uses a path prefix of `/gate.directory/` so asset URLs resolve correctly. Locally you can override this with the `PATH_PREFIX` environment variable:

```sh
PATH_PREFIX=/ npm run build
```

## Writing math

Anything between `$…$` or `$$…$$` is handed to KaTeX untouched (see `lib/markdown-math.js`), so write plain LaTeX: `\\` for matrix rows, `\,` for thin spaces, `\{`, and `_` wherever you like. No Markdown escaping is needed inside math.

## Gate definitions

Each gate's front matter carries a machine-readable definition that drives the "unitary, drawn" panel, the JSON API and the consistency checks:

```yaml
params:
  theta: { label: \theta, default: 1/2, range: [0, 2] }   # angles; defaults and ranges in units of π
matrix:
  - ["cos(theta/2)", "-i sin(theta/2)"]                    # expressions: inside them a parameter
  - ["-i sin(theta/2)", "cos(theta/2)"]                    #   stands for the angle in radians
matrix_note: d = 3                                         # optional: the instance shown for n- or d-dependent gates
```

The expression language (`js/gate-math.js`) has `+ - * / ^`, parentheses, juxtaposition as multiplication (`2 pi t`, `i sin(x)`), the constants `pi`, `e`, `i`, and `sqrt exp cos sin tan acos asin atan ln`. The first qubit is the most significant bit. Gates whose size depends on `n` or `d` (QFT, MCX, the qudit gates) give a small instance and say so in `matrix_note`.

`npm run check` verifies every matrix is unitary, that each Quirk circuit reproduces its matrix, and that the Weyl coordinates agree with the matrix via Makhlin's invariants. It runs in CI on every push.

## JSON API

The built site publishes the same data as JSON:

- `/api/gates.json` — every gate, in the order of the table on the home page
- `/api/gates/<slug>.json` — one gate, for example `/api/gates/cnot.json`
- `/api/groups.json` — the groups and their members

Records are deliberately lean: slug, title, symbol (LaTeX), aliases, notations (LaTeX), description, qubit count and dimension, the parameters (label, default and range in units of π), the matrix as expressions (and `matrix_note` for the instance shown), groups, properties and the page URL. Evaluate the matrix with `js/gate-math.js` or any CAS; a parameter name inside an entry is the angle in radians.

## Quirk links

Gate pages link to the gate in [Quirk](https://algassert.com/quirk) when the front matter has a `quirk` entry. Either list Quirk's gates per circuit column (the top wire is the page's first qubit), or give the unitary as a Quirk matrix string (Quirk's wires are little-endian, so the first qubit of the page's matrix is the last index). Parameterised circuits reference the gate's `params` from Quirk's formula gates (`Rxft`, `Ryft`, `Rzft`, `Z^ft`) with `param` and an optional `mul`; rotation gates read the value in radians, `Z^ft` as an exponent. `spin` gives each parameter's rate in Quirk's clock `t` (0 to 1, repeating): the link substitutes `spin × t`, so the gate spins through its family and loops seamlessly, and the unitary panel's play button follows the same path. Constant angles use `arg` with a Quirk formula. `note` (LaTeX) overrides the generated description; `phase` records a global phase the page's matrix carries and the circuit cannot.

```yaml
quirk:
  cols: [["•", "X"]]                            # CNOT from Quirk's own gates

quirk:
  spin: {theta: 4}                              # theta = 4πt in the link
  cols:
    - ["•", {id: Rxft, param: theta}]           # or {id: Rzft, param: theta, mul: -0.5}

quirk:
  matrix: "{{1,0,0,0},{0,0,i,0},{0,i,0,0},{0,0,0,1}}"
  name: iSWAP                                   # label drawn on the gate in Quirk
  controls: 1                                   # optional control wires in front of the gate
```

## Weyl chamber coordinates

Two-qubit gate pages show where the gate sits in the Weyl chamber. The data lives in each gate's front matter, in units of π, using the convention of the [canonical gate](gates/can.md): `U ≃ exp(i(a XX + b YY + c ZZ))` up to single-qubit gates, reduced to `π/4 ≥ a ≥ b ≥ |c|` (the canonical form Qiskit and Cirq use as well).

Fixed gates give the point directly:

```yaml
weyl: [1/4, 0, 0]   # CNOT
```

Parameterised gates give the raw exponent coefficients as expressions in the gate's `params` (see "Gate definitions"); the Weyl panel's sliders are the same parameters as the matrix panel's, and the two stay in step:

```yaml
params:
  theta: { label: \theta, default: 1/2, range: [0, 2] }
weyl:
  coords: [-theta/2, 0, 0]   # R_xx(θ) = exp(-iθ/2 X⊗X); here theta is in units of π
```

The page reduces the raw coefficients to the chamber itself, so write whatever falls out of the gate's definition. Only signed fractions of a single parameter are understood (`-phi/4`, `3/16`, `a`). The drawing is done by `js/weyl.js`.
