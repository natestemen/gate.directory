---
layout: gate
title: Controlled-Y
symbol: \mathrm{C}Y
alias:
  - cy
notations:
  - \Lambda(Y)
  - \text{controlled-}Y
groups:
  - clifford
controlled: pauli-y
properties:
  - hermitian
arity: 2
weyl: [1/4, 0, 0]
quirk:
  cols: [["•", "Y"]]
description: Applies $Y$ to the target qubit when the control qubit is in the $|1\rangle$ state.
sdks:
  qiskit:
    name: qiskit.circuit.library.CYGate
    url: https://docs.quantum.ibm.com/api/qiskit/qiskit.circuit.library.CYGate
  pennylane:
    name: pennylane.CY
    url: https://docs.pennylane.ai/en/stable/code/api/pennylane.CY.html
  cirq:
    name: cirq.CY
    url: https://quantumai.google/reference/python/cirq/CY
  qsharp:
    name: Std.Canon.CY
    url: https://learn.microsoft.com/en-us/qsharp/api/qsharp-lang/std.canon/cy
  pyquil:
    note: "Not available natively. Use the CONTROLLED modifier: Y(target).controlled(control)."
  braket:
    name: braket.circuits.gates.CY
    url: https://amazon-braket-sdk-python.readthedocs.io/en/latest/_apidoc/braket.circuits.gates.html#braket.circuits.gates.CY
  bqskit:
    name: bqskit.ir.gates.CYGate
    url: https://bqskit.readthedocs.io/en/latest/source/autogen/bqskit.ir.gates.CYGate.html
  qibo:
    name: qibo.gates.CY
    url: https://qibo.science/qibo/stable/api-reference/qibo.html#qibo.gates.CY
  pytket:
    name: pytket.circuit.OpType.CY
    url: https://docs.quantinuum.com/tket/api-docs/optype.html#pytket.circuit.OpType.CY
  stim:
    name: CY
    url: https://github.com/quantumlib/Stim/blob/main/doc/gates.md#CY
  qasm:
    name: "stdgates.inc: cy"
    url: https://openqasm.com/language/standard_library.html#cy
---

The controlled-$Y$ gate is a two-qubit entangling gate that conditionally applies $Y$ to the target.

$$
\mathrm{C}Y =
\begin{bmatrix}
  1 & 0 & 0 & 0 \\
  0 & 1 & 0 & 0 \\
  0 & 0 & 0 & -i \\
  0 & 0 & i & 0
\end{bmatrix}
$$

### Properties

- Clifford, Hermitian, and self-inverse.
- Related to CNOT by $S$ gates on the target: $\mathrm{C}Y = (I \otimes S)\,\mathrm{CNOT}\,(I \otimes S^\dagger)$.
