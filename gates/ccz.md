---
layout: gate
title: Controlled-CZ
symbol: \mathrm{CC}Z
alias:
  - ccz
notations:
  - C^2Z
  - \Lambda^2(Z)
groups:
  - diagonal
properties:
  - hermitian
controlled: cz
arity: 3
description: Applies a $-1$ phase to $|111\rangle$ and leaves all other basis states unchanged.
sdks:
  qiskit:
    name: qiskit.circuit.library.CCZGate
    url: https://docs.quantum.ibm.com/api/qiskit/qiskit.circuit.library.CCZGate
  pennylane:
    name: pennylane.CCZ
    url: https://docs.pennylane.ai/en/stable/code/api/pennylane.CCZ.html
  cirq:
    name: cirq.CCZ
    url: https://quantumai.google/reference/python/cirq/CCZ
---

The controlled-controlled-$Z$ gate applies a phase of $-1$ to the $|111\rangle$ state and acts as the identity on all others.

$$
\mathrm{CC}Z =
\begin{bmatrix}
  1 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\\\
  0 & 1 & 0 & 0 & 0 & 0 & 0 & 0 \\\\
  0 & 0 & 1 & 0 & 0 & 0 & 0 & 0 \\\\
  0 & 0 & 0 & 1 & 0 & 0 & 0 & 0 \\\\
  0 & 0 & 0 & 0 & 1 & 0 & 0 & 0 \\\\
  0 & 0 & 0 & 0 & 0 & 1 & 0 & 0 \\\\
  0 & 0 & 0 & 0 & 0 & 0 & 1 & 0 \\\\
  0 & 0 & 0 & 0 & 0 & 0 & 0 & -1
\end{bmatrix}
$$

### Properties

- Hermitian and self-inverse: $\mathrm{CCZ}^2 = I$.
- Related to Toffoli by Hadamards on the target: $\mathrm{CC}X = (I \otimes I \otimes H)\mathrm{CC}Z(I \otimes I \otimes H)$.
- Symmetric under permutation of all three qubits, unlike Toffoli.
