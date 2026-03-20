---
layout: gate
title: Controlled-Z
symbol: \mathrm{C}Z
alias:
  - cz
notations:
  - \Lambda(Z)
  - \text{controlled-}Z
groups:
  - clifford
  - diagonal
  - orthogonal
controlled: pauli-z
arity: 2
description: Applies a $-1$ phase to $|11\rangle$.
sdks:
  qiskit:
    name: qiskit.circuit.library.CZGate
    url: https://docs.quantum.ibm.com/api/qiskit/qiskit.circuit.library.CZGate
  pennylane:
    name: pennylane.CZ
    url: https://docs.pennylane.ai/en/stable/code/api/pennylane.CZ.html
  cirq:
    name: cirq.CZ
    url: https://quantumai.google/reference/python/cirq/CZ
---

The controlled-$Z$ gate is a two-qubit diagonal entangling gate.

$$
\mathrm{C}Z =
\begin{bmatrix}
  1 & 0 & 0 & 0 \\\\
  0 & 1 & 0 & 0 \\\\
  0 & 0 & 1 & 0 \\\\
  0 & 0 & 0 & -1
\end{bmatrix}
$$

### Properties

- Clifford, Hermitian, and self-inverse.
- Related to CNOT by Hadamards on the target: $\mathrm{CNOT} = (I \otimes H)\,\mathrm{CZ}\,(I \otimes H)$.
- Symmetric under exchange of the two qubits.

### Usage

- Native entangling gate on several hardware platforms.
- Controlled phase flips and stabilizer circuits.
