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
  - orthogonal
  - number-preserving
properties:
  - hermitian
arity: 1
quirk:
  cols: [["Z"]]
matrix:
  - [1, 0]
  - [0, -1]
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
  qsharp:
    name: Std.Intrinsic.Z
    url: https://learn.microsoft.com/en-us/qsharp/api/qsharp-lang/std.intrinsic/z
  pyquil:
    name: pyquil.gates.Z
    url: https://pyquil-docs.rigetti.com/en/stable/apidocs/pyquil.gates.html#pyquil.gates.Z
  braket:
    name: braket.circuits.gates.Z
    url: https://amazon-braket-sdk-python.readthedocs.io/en/latest/_apidoc/braket.circuits.gates.html#braket.circuits.gates.Z
  bqskit:
    name: bqskit.ir.gates.ZGate
    url: https://bqskit.readthedocs.io/en/latest/source/autogen/bqskit.ir.gates.ZGate.html
  qibo:
    name: qibo.gates.Z
    url: https://qibo.science/qibo/stable/api-reference/qibo.html#qibo.gates.Z
  pytket:
    name: pytket.circuit.OpType.Z
    url: https://docs.quantinuum.com/tket/api-docs/optype.html#pytket.circuit.OpType.Z
  stim:
    name: Z
    url: https://github.com/quantumlib/Stim/blob/main/doc/gates.md#Z
  qasm:
    name: "stdgates.inc: z"
    url: https://openqasm.com/language/standard_library.html#z
---

The Pauli-$Z$ gate applies a relative phase of $-1$ to the $|1\rangle$ component.

$$
Z = \begin{bmatrix}
  1 & 0 \\
  0 & -1
\end{bmatrix}
$$

### Properties

- Hermitian and self-inverse: $Z^\dagger = Z$ and $Z^2 = I$.
- Equivalent to a $\pi$ rotation about $z$ up to global phase.