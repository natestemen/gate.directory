---
layout: gate
title: Hadamard
symbol: H
alias:
  - h
groups:
  - clifford
  - orthogonal
arity: 1
description: Maps computational basis states to equal superpositions and swaps the $X$ and $Z$ bases.
sdks:
  qiskit:
    name: qiskit.circuit.library.HGate
    url: https://docs.quantum.ibm.com/api/qiskit/qiskit.circuit.library.HGate
  pennylane:
    name: pennylane.Hadamard
    url: https://docs.pennylane.ai/en/stable/code/api/pennylane.Hadamard.html
  cirq:
    name: cirq.H
    url: https://quantumai.google/reference/python/cirq/H
---

The Hadamard gate creates and removes superposition by mapping $|0\rangle \mapsto |+\rangle$ and $|1\rangle \mapsto |-\rangle$.

$$
H = \frac{1}{\sqrt{2}}\begin{bmatrix}
  1 & 1 \\\\
  1 & -1
\end{bmatrix}
$$

### Properties

- Self-inverse and Hermitian: $H^\dagger = H$.
- Conjugates Pauli operators: $H X H = Z$ and $H Z H = X$.
- Real and symmetric.
