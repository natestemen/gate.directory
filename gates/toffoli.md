---
layout: gate
title: Toffoli
symbol: \mathrm{CC}X
alias:
  - toffoli
  - ccx
notations:
  - \mathrm{CCX}
  - \mathrm{CCNOT}
  - \mathrm{TOFF}
  - C^2X
  - \Lambda^2(X)
  - \text{Toffoli}
groups:
  - orthogonal
  - permutation
properties:
  - hermitian
controlled: cnot
arity: 3
quirk:
  cols: [["•", "•", "X"]]
matrix:
  - [1, 0, 0, 0, 0, 0, 0, 0]
  - [0, 1, 0, 0, 0, 0, 0, 0]
  - [0, 0, 1, 0, 0, 0, 0, 0]
  - [0, 0, 0, 1, 0, 0, 0, 0]
  - [0, 0, 0, 0, 1, 0, 0, 0]
  - [0, 0, 0, 0, 0, 1, 0, 0]
  - [0, 0, 0, 0, 0, 0, 0, 1]
  - [0, 0, 0, 0, 0, 0, 1, 0]
description: Controlled-controlled-NOT gate that flips a target qubit when both controls are $|1\rangle$.
sdks:
  qiskit:
    name: qiskit.circuit.library.CCXGate
    url: https://docs.quantum.ibm.com/api/qiskit/qiskit.circuit.library.CCXGate
  pennylane:
    name: pennylane.Toffoli
    url: https://docs.pennylane.ai/en/stable/code/api/pennylane.Toffoli.html
  cirq:
    name: cirq.CCNOT
    url: https://quantumai.google/reference/python/cirq/CCNOT
    note: "Aliases: cirq.TOFFOLI, cirq.CCX."
  qsharp:
    name: Std.Intrinsic.CCNOT
    url: https://learn.microsoft.com/en-us/qsharp/api/qsharp-lang/std.intrinsic/ccnot
  pyquil:
    name: pyquil.gates.CCNOT
    url: https://pyquil-docs.rigetti.com/en/stable/apidocs/pyquil.gates.html#pyquil.gates.CCNOT
  braket:
    name: braket.circuits.gates.CCNot
    url: https://amazon-braket-sdk-python.readthedocs.io/en/latest/_apidoc/braket.circuits.gates.html#braket.circuits.gates.CCNot
  bqskit:
    name: bqskit.ir.gates.ToffoliGate
    url: https://bqskit.readthedocs.io/en/latest/source/autogen/bqskit.ir.gates.ToffoliGate.html
    note: Alias of CCXGate
  qibo:
    name: qibo.gates.TOFFOLI
    url: https://qibo.science/qibo/stable/api-reference/qibo.html#qibo.gates.TOFFOLI
  pytket:
    name: pytket.circuit.OpType.CCX
    url: https://docs.quantinuum.com/tket/api-docs/optype.html#pytket.circuit.OpType.CCX
  qasm:
    name: "stdgates.inc: ccx"
    url: https://openqasm.com/language/standard_library.html#ccx
---

The Toffoli gate (Controlled-Controlled-NOT) flips a target qubit if and only if two control qubits are in the $|1\rangle$ state. It is universal for classical reversible computation and is widely used in quantum algorithms.

$$
\mathrm{CC}X =
\begin{bmatrix}
1 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 & 0 & 0 & 0 & 0 \\
0 & 0 & 1 & 0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 1 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 1 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 1 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 & 0 & 1 \\
0 & 0 & 0 & 0 & 0 & 0 & 1 & 0
\end{bmatrix}
$$

### Properties

- Classical universality: implements any reversible Boolean computation with NOT gates.
- Reversible: the Toffoli gate is its own inverse.
- Decomposable into single- and two-qubit gates (e.g., $H$, $T$, and CNOT).

### Usage

- Classical reversible computation and arithmetic circuits.
- Multi-controlled operations in quantum algorithms.