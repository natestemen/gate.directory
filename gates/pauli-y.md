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
  qsharp:
    name: Std.Intrinsic.Y
    url: https://learn.microsoft.com/en-us/qsharp/api/qsharp-lang/std.intrinsic/y
  pyquil:
    name: pyquil.gates.Y
    url: https://pyquil-docs.rigetti.com/en/stable/apidocs/pyquil.gates.html#pyquil.gates.Y
  braket:
    name: braket.circuits.gates.Y
    url: https://amazon-braket-sdk-python.readthedocs.io/en/latest/_apidoc/braket.circuits.gates.html#braket.circuits.gates.Y
  bqskit:
    name: bqskit.ir.gates.YGate
    url: https://bqskit.readthedocs.io/en/latest/source/autogen/bqskit.ir.gates.YGate.html
  qibo:
    name: qibo.gates.Y
    url: https://qibo.science/qibo/stable/api-reference/qibo.html#qibo.gates.Y
  pytket:
    name: pytket.circuit.OpType.Y
    url: https://docs.quantinuum.com/tket/api-docs/optype.html#pytket.circuit.OpType.Y
  stim:
    name: Y
    url: https://github.com/quantumlib/Stim/blob/main/doc/gates.md#Y
  qasm:
    name: "stdgates.inc: y"
    url: https://openqasm.com/language/standard_library.html#y
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
