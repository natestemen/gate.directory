---
layout: gate
title: Shift
symbol: X_d
alias:
  - shift
notations:
  - X_d
  - \Sigma_x
  - \tau
groups:
  - orthogonal
  - permutation
arity: 1
dimension: d
description: Qudit generalization of Pauli-$X$ that cyclically increments the basis state, $|j\rangle \mapsto |j+1 \bmod d\rangle$.
sdks:
  pennylane:
    name: pennylane.TShift
    url: https://docs.pennylane.ai/en/stable/code/api/pennylane.TShift.html
    note: Qutrit (d=3) case only; no general qudit shift in PennyLane.
  cirq:
    note: Not available natively. Cirq supports qudits; define a custom gate with _qid_shape_.
  bqskit:
    name: bqskit.ir.gates.ShiftGate
    url: https://bqskit.readthedocs.io/en/latest/source/autogen/bqskit.ir.gates.ShiftGate.html
    note: Qudit shift gate; ShiftGate(radix)
---

The shift gate generalizes [Pauli-$X$](/gates/pauli-x) from qubits to $d$-level qudits. Instead of flipping between two states, it cycles through all $d$ of them:

$$
X_d |j\rangle = |j + 1 \bmod d\rangle,
\qquad
X_3 = \begin{bmatrix}
  0 & 0 & 1 \\\\
  1 & 0 & 0 \\\\
  0 & 1 & 0
\end{bmatrix}
$$

### Properties

- Order $d$: $X_d^d = I$, and for $d > 2$ the gate is *not* Hermitian — its inverse is the down-shift $X_d^{d-1}$. At $d = 2$ it reduces exactly to Pauli-$X$.
- A permutation matrix, hence real and orthogonal.
- Weyl commutation relation with the [clock gate](/gates/clock): $Z_d X_d = \omega \\, X_d Z_d$ where $\omega = \mathrm{e}^{2\pi i/d}$. Together, products $\omega^a X_d^b Z_d^c$ form the generalized Pauli (Weyl–Heisenberg) group.
- Diagonalized by the [Fourier transform](/gates/qft): $F X_d F^\dagger = Z_d$, so its eigenvalues are the $d$-th roots of unity and its eigenvectors are the Fourier basis states.

### Usage

- Together with the clock gate, this is the starting point for qudit stabilizer codes, qudit teleportation, and discrete phase-space (Wigner function) constructions.
