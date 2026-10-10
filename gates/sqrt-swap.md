---
layout: gate
title: Square Root SWAP
symbol: \sqrt{\mathrm{SWAP}}
alias:
  - sqrtswap
groups:
  - number-preserving
arity: 2
weyl: [1/8, 1/8, -1/8]
quirk:
  matrix: "{{1,0,0,0},{0,0.5+0.5i,0.5-0.5i,0},{0,0.5-0.5i,0.5+0.5i,0},{0,0,0,1}}"
matrix:
  - [1, 0, 0, 0]
  - [0, "(1+i)/2", "(1-i)/2", 0]
  - [0, "(1-i)/2", "(1+i)/2", 0]
  - [0, 0, 0, 1]
description: Applies half of a SWAP interaction, creating maximal entanglement from a product state.
sdks:
  qiskit:
    note: Not available as a named gate. Use SwapGate().power(0.5).
  pennylane:
    note: Not available natively. Note that qml.SISWAP is √iSWAP, a different gate.
  cirq:
    name: cirq.SwapPowGate
    url: https://quantumai.google/reference/python/cirq/SwapPowGate
    note: "No named constant. √SWAP = cirq.SWAP**0.5 (SwapPowGate with exponent 0.5)."
  pytket:
    note: "ESWAP(0.5) equals sqrt(SWAP) up to global phase e^{i*pi/4}"
  qasm:
    note: "Not in stdgates.inc; write pow(0.5) @ swap q0, q1."
---

The $\sqrt{\mathrm{SWAP}}$ gate is the canonical maximally entangling two-qubit gate: a single application takes a product state to a maximally entangled state, and two applications recover the full [SWAP](/gates/swap).

$$
\sqrt{\mathrm{SWAP}} =
\begin{bmatrix}
  1 & 0 & 0 & 0 \\
  0 & \frac{1+i}{2} & \frac{1-i}{2} & 0 \\
  0 & \frac{1-i}{2} & \frac{1+i}{2} & 0 \\
  0 & 0 & 0 & 1
\end{bmatrix}
$$

### Properties

- Maximally entangling: maps $|01\rangle \mapsto \tfrac{1+i}{2}|01\rangle + \tfrac{1-i}{2}|10\rangle$, a state with concurrence 1.
- Symmetric under exchange of qubits.
- Together with single-qubit rotations, forms a universal gate set.
- Weyl coordinates $(\pi/8, \pi/8, -\pi/8)$ in the convention of the [canonical gate](/gates/can); its inverse, the other square root of SWAP, sits at the mirror point $(\pi/8, \pi/8, \pi/8)$.
- Native gate on some spin-based and exchange-coupled hardware platforms.
