---
layout: gate
title: Identity
symbol: I
alias:
  - i
notations:
  - I
  - I_n
  - 1_n
  - \mathbb{1}
  - \mathrm{Id}
groups:
  - pauli
  - clifford
  - diagonal
  - orthogonal
arity: n
description: Leaves the quantum state unchanged.
sdks:
  qiskit:
    name: qiskit.circuit.library.IGate
    url: https://docs.quantum.ibm.com/api/qiskit/qiskit.circuit.library.IGate
  pennylane:
    name: pennylane.Identity
    url: https://docs.pennylane.ai/en/stable/code/api/pennylane.Identity.html
  cirq:
    name: cirq.I
    url: https://quantumai.google/reference/python/cirq/I
---

The identity gate $I_n$ acts on $n$ qubits and leaves all basis states unchanged.

$$
I_2 = \begin{bmatrix}
  1 & 0 \\\\
  0 & 1
\end{bmatrix}
$$

### Properties

- Identity element of the unitary group; it commutes with all gates.