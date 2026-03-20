---
layout: gate
title: Pauli-Z
symbol: Z
alias:
  - z
notations:
  - Z
  - \sigma_z
  - \sigma^z
  - \sigma_3
groups:
  - pauli
  - clifford
  - diagonal
arity: 1
description: Phase-flip gate that leaves $|0\rangle$ unchanged and flips the phase of $|1\rangle$.
sdks:
  qiskit:
    name: qiskit.circuit.library.ZGate
    url: https://docs.quantum.ibm.com/api/qiskit/qiskit.circuit.library.ZGate
  pennylane:
    name: pennylane.PauliZ
    url: https://docs.pennylane.ai/en/stable/code/api/pennylane.PauliZ.html
  cirq:
    name: cirq.Z
    url: https://quantumai.google/reference/python/cirq/Z
---

The Pauli-$Z$ gate applies a relative phase of $-1$ to the $|1\rangle$ component.

$$
Z = \begin{bmatrix}
  1 & 0 \\\\
  0 & -1
\end{bmatrix}
$$

### Properties

- Hermitian and self-inverse: $Z^\dagger = Z$ and $Z^2 = I$.
- Equivalent to a $\pi$ rotation about $z$ up to global phase.