---
layout: gate
title: Clock
symbol: Z_d
alias:
  - clock
notations:
  - Z_d
  - \Sigma_z
  - \sigma
groups:
  - diagonal
  - number-preserving
arity: 1
dimension: d
matrix:
  - ["1", 0, 0]
  - [0, "exp(2 pi i/3)", 0]
  - [0, 0, "exp(4 pi i/3)"]
matrix_note: d = 3
description: Qudit generalization of Pauli-$Z$ that tags each basis state with a root-of-unity phase, $|j\rangle \mapsto \omega^j |j\rangle$.
sdks:
  pennylane:
    name: pennylane.TClock
    url: https://docs.pennylane.ai/en/stable/code/api/pennylane.TClock.html
    note: Qutrit (d=3) case only; no general qudit clock in PennyLane.
  cirq:
    note: Not available natively. Cirq supports qudits; define a custom gate with _qid_shape_.
  bqskit:
    name: bqskit.ir.gates.ClockGate
    url: https://bqskit.readthedocs.io/en/latest/source/autogen/bqskit.ir.gates.ClockGate.html
    note: Qudit clock gate; radix defaults to 3 (qutrit)
---

The clock gate generalizes [Pauli-$Z$](/gates/pauli-z) from qubits to $d$-level qudits, advancing the phase of each basis state like the hand of a clock:

$$
Z_d |j\rangle = \omega^j |j\rangle, \qquad \omega = \mathrm{e}^{2\pi i / d}
$$

For a qutrit ($d = 3$):

$$
Z_3 = \begin{bmatrix}
  1 & 0 & 0 \\
  0 & \omega & 0 \\
  0 & 0 & \omega^2
\end{bmatrix}
$$

### Properties

- Order $d$: $Z_d^d = I$, and for $d > 2$ the gate is *not* Hermitian — its inverse is $Z_d^{d-1}$. At $d = 2$ it reduces exactly to Pauli-$Z$.
- Diagonal, with the $d$-th roots of unity as eigenvalues.
- Weyl commutation relation with the [shift gate](/gates/shift): $Z_d X_d = \omega \, X_d Z_d$ — the finite-dimensional analog of the position–momentum relation.
- The [Fourier transform](/gates/qft) exchanges clock and shift: $F Z_d F^\dagger = X_d^{-1}$, mirroring how it exchanges the two mutually unbiased bases.

### Usage

- With the shift gate it generates the generalized Pauli group, the foundation of qudit stabilizer codes and qudit magic-state theory.
