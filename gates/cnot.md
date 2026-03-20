---
layout: gate
title: Controlled Not
symbol: \mathrm{C}X
alias:
  - cx
notations:
  - \mathrm{C}X
  - \mathrm{CNOT}
  - \mathrm{CNOT}_{ij}
  - \text{controlled-}X
  - \Lambda(X)
  - \mathrm{XOR}[i, j]
groups:
  - clifford
arity: 2
controlled: pauli-x
description: Flips the target qubit when the control qubit is in the $|1\rangle$ state.
sdks:
  qiskit:
    name: qiskit.circuit.library.CXGate
    url: https://docs.quantum.ibm.com/api/qiskit/qiskit.circuit.library.CXGate
  pennylane:
    name: pennylane.CNOT
    url: https://docs.pennylane.ai/en/stable/code/api/pennylane.CNOT.html
  cirq:
    name: cirq.CNOT
    url: https://quantumai.google/reference/python/cirq/CNOT
  qsharp:
    name: Std.Intrinsic.CNOT
    url: https://learn.microsoft.com/en-us/qsharp/api/qsharp-lang/std.intrinsic/cnot
  pyquil:
    name: pyquil.gates.CNOT
    url: https://pyquil-docs.rigetti.com/en/stable/apidocs/pyquil.gates.html#pyquil.gates.CNOT
---

The controlled-NOT (CNOT) gate is a two-qubit entangling gate that conditionally applies $X$ to the target.

$$
\mathrm{C}X =
\begin{bmatrix}
  1 & 0 & 0 & 0 \\\\
  0 & 1 & 0 & 0 \\\\
  0 & 0 & 0 & 1 \\\\
  0 & 0 & 1 & 0
\end{bmatrix}
$$

### Properties

- Self-inverse and Hermitian: $\mathrm{CNOT}^\dagger = \mathrm{CNOT}$.
- Equivalent to a controlled-$Z$ up to Hadamards on the target: $\mathrm{CNOT} = (I \otimes H)\,\mathrm{CZ}\,(I \otimes H)$.
