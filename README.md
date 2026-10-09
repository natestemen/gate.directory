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

## Weyl chamber coordinates

Two-qubit gate pages show where the gate sits in the Weyl chamber. The data lives in each gate's front matter, in units of π, using the convention of the [canonical gate](gates/can.md): `U ≃ exp(i(a XX + b YY + c ZZ))` up to single-qubit gates, reduced to `π/4 ≥ a ≥ b ≥ |c|` (the canonical form Qiskit and Cirq use as well).

Fixed gates give the point directly:

```yaml
weyl: [1/4, 0, 0]   # CNOT
```

Parameterised gates give the raw exponent coefficients as expressions in their parameters, plus a slider range and default (also in units of π) for each parameter:

```yaml
weyl:
  coords: [-theta/2, 0, 0]   # R_xx(θ) = exp(-iθ/2 X⊗X)
  params:
    theta: { label: \theta, range: [0, 1], default: 1/2 }
```

The page reduces the raw coefficients to the chamber itself, so write whatever falls out of the gate's definition. Only signed fractions of a single parameter are understood (`-phi/4`, `3/16`, `a`). The drawing is done by `js/weyl.js`.
