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
  - number-preserving
controlled: pauli-z
properties:
  - hermitian
arity: 2
weyl: [1/4, 0, 0]
quirk:
  cols: [["•", "Z"]]
matrix:
  - [1, 0, 0, 0]
  - [0, 1, 0, 0]
  - [0, 0, 1, 0]
  - [0, 0, 0, -1]
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
  qsharp:
    name: Std.Canon.CZ
    url: https://learn.microsoft.com/en-us/qsharp/api/qsharp-lang/std.canon/cz
  pyquil:
    name: pyquil.gates.CZ
    url: https://pyquil-docs.rigetti.com/en/stable/apidocs/pyquil.gates.html#pyquil.gates.CZ
  braket:
    name: braket.circuits.gates.CZ
    url: https://amazon-braket-sdk-python.readthedocs.io/en/latest/_apidoc/braket.circuits.gates.html#braket.circuits.gates.CZ
  bqskit:
    name: bqskit.ir.gates.CZGate
    url: https://bqskit.readthedocs.io/en/latest/source/autogen/bqskit.ir.gates.CZGate.html
  qibo:
    name: qibo.gates.CZ
    url: https://qibo.science/qibo/stable/api-reference/qibo.html#qibo.gates.CZ
  pytket:
    name: pytket.circuit.OpType.CZ
    url: https://docs.quantinuum.com/tket/api-docs/optype.html#pytket.circuit.OpType.CZ
  stim:
    name: CZ
    url: https://github.com/quantumlib/Stim/blob/main/doc/gates.md#CZ
  qasm:
    name: "stdgates.inc: cz"
    url: https://openqasm.com/language/standard_library.html#cz
---

The controlled-$Z$ gate is a two-qubit diagonal entangling gate.

$$
\mathrm{C}Z =
\begin{bmatrix}
  1 & 0 & 0 & 0 \\
  0 & 1 & 0 & 0 \\
  0 & 0 & 1 & 0 \\
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
