---
layout: gate
title: Pauli-Y
symbol: Y
alias:
  - y
notations:
  - Y
  - \sigma_y
  - \sigma^y
  - \sigma_2
groups:
  - pauli
  - clifford
arity: 1
description: Bit-and-phase flip combining $X$ and $Z$ with a phase.
sdks:
  qiskit:
    name: qiskit.circuit.library.YGate
    url: https://docs.quantum.ibm.com/api/qiskit/qiskit.circuit.library.YGate
  pennylane:
    name: pennylane.PauliY
    url: https://docs.pennylane.ai/en/stable/code/api/pennylane.PauliY.html
  cirq:
    name: cirq.Y
    url: https://quantumai.google/reference/python/cirq/Y
---

The Pauli-$Y$ gate is a $\pi$ rotation around the $y$ axis of the Bloch sphere.

$$
Y = \begin{bmatrix}
  0 & -i \\\\
  i & 0
\end{bmatrix}
$$

### Properties

- Hermitian and self-inverse: $Y^\dagger = Y$ and $Y^2 = I$.
- Equivalent to a $\pi$ rotation about $y$ up to global phase.
