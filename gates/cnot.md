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
  - orthogonal
  - permutation
properties:
  - hermitian
arity: 2
weyl:
  coords: [1/4, 0, 0]
  label: CNOT
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
  braket:
    name: braket.circuits.gates.CNot
    url: https://amazon-braket-sdk-python.readthedocs.io/en/latest/_apidoc/braket.circuits.gates.html#braket.circuits.gates.CNot
  bqskit:
    name: bqskit.ir.gates.CNOTGate
    url: https://bqskit.readthedocs.io/en/latest/source/autogen/bqskit.ir.gates.CNOTGate.html
    note: Also exported as CXGate
  qibo:
    name: qibo.gates.CNOT
    url: https://qibo.science/qibo/stable/api-reference/qibo.html#qibo.gates.CNOT
  pytket:
    name: pytket.circuit.OpType.CX
    url: https://docs.quantinuum.com/tket/api-docs/optype.html#pytket.circuit.OpType.CX
  stim:
    name: CX
    url: https://github.com/quantumlib/Stim/blob/main/doc/gates.md#CX
    note: Stim also accepts the alternate name CNOT.
  qasm:
    name: "stdgates.inc: cx"
    url: https://openqasm.com/language/standard_library.html#cx
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
- Equivalent to a controlled-$Z$ up to Hadamards on the target: $\mathrm{CNOT} = (I \otimes H)\\,\mathrm{CZ}\\,(I \otimes H)$.
