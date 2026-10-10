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
  - permutation
  - number-preserving
properties:
  - hermitian
arity: n
quirk:
  matrix: "{{1,0},{0,1}}"
  name: I
matrix:
  - [1, 0]
  - [0, 1]
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
    note: cirq.I is single-qubit; use cirq.IdentityGate(n) for n qubits.
  qsharp:
    name: Std.Intrinsic.I
    url: https://learn.microsoft.com/en-us/qsharp/api/qsharp-lang/std.intrinsic/i
  pyquil:
    name: pyquil.gates.I
    url: https://pyquil-docs.rigetti.com/en/stable/apidocs/pyquil.gates.html#pyquil.gates.I
  braket:
    name: braket.circuits.gates.I
    url: https://amazon-braket-sdk-python.readthedocs.io/en/latest/_apidoc/braket.circuits.gates.html#braket.circuits.gates.I
  bqskit:
    name: bqskit.ir.gates.IdentityGate
    url: https://bqskit.readthedocs.io/en/latest/source/autogen/bqskit.ir.gates.IdentityGate.html
  qibo:
    name: qibo.gates.I
    url: https://qibo.science/qibo/stable/api-reference/qibo.html#qibo.gates.I
    note: "Accepts any number of qubits, I(*q)"
  pytket:
    name: pytket.circuit.OpType.noop
    url: https://docs.quantinuum.com/tket/api-docs/optype.html#pytket.circuit.OpType.noop
    note: Stripped automatically by the compiler
  stim:
    name: I
    url: https://github.com/quantumlib/Stim/blob/main/doc/gates.md#I
  qasm:
    name: "stdgates.inc: id"
    url: https://openqasm.com/language/standard_library.html#id
    note: Single-qubit only; apply per qubit.
---

The identity gate $I_n$ acts on $n$ qubits and leaves all basis states unchanged.

$$
I_2 = \begin{bmatrix}
  1 & 0 \\
  0 & 1
\end{bmatrix}
$$

### Properties

- Identity element of the unitary group; it commutes with all gates.