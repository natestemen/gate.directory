---
layout: gate
title: Pauli-X
symbol: X
alias:
  - x
notations:
  - X
  - \sigma_x
  - \sigma^x
  - \sigma_1
  - \mathrm{NOT}
groups:
  - pauli
  - clifford
arity: 1
description: Bit-flip gate that swaps $|0\rangle$ and $|1\rangle$.
sdks:
  qiskit:
    name: qiskit.circuit.library.XGate
    url: https://docs.quantum.ibm.com/api/qiskit/qiskit.circuit.library.XGate
  pennylane:
    name: pennylane.PauliX
    url: https://docs.pennylane.ai/en/stable/code/api/pennylane.PauliX.html
  cirq:
    name: cirq.X
    url: https://quantumai.google/reference/python/cirq/X
---

The Pauli-$X$ gate is the quantum analog of a classical NOT.

$$
X = \begin{bmatrix}
  0 & 1 \\\\
  1 & 0
\end{bmatrix}
$$

### Properties

- Hermitian and self-inverse: $X^\dagger = X$ and $X^2 = I$.
- Equivalent to a $R_x(\pi)$ up to global phase.
