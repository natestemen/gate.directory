---
layout: gate
title: T
symbol: T
notations:
  - \pi/8
groups:
  - diagonal
  - number-preserving
arity: 1
description: A $\pi/8$ phase gate which is a non-Clifford rotation about $Z$.
sdks:
  qiskit:
    name: qiskit.circuit.library.TGate
    url: https://docs.quantum.ibm.com/api/qiskit/qiskit.circuit.library.TGate
  pennylane:
    name: pennylane.T
    url: https://docs.pennylane.ai/en/stable/code/api/pennylane.T.html
  cirq:
    name: cirq.T
    url: https://quantumai.google/reference/python/cirq/T
  qsharp:
    name: Std.Intrinsic.T
    url: https://learn.microsoft.com/en-us/qsharp/api/qsharp-lang/std.intrinsic/t
  pyquil:
    name: pyquil.gates.T
    url: https://pyquil-docs.rigetti.com/en/stable/apidocs/pyquil.gates.html#pyquil.gates.T
  braket:
    name: braket.circuits.gates.T
    url: https://amazon-braket-sdk-python.readthedocs.io/en/latest/_apidoc/braket.circuits.gates.html#braket.circuits.gates.T
  bqskit:
    name: bqskit.ir.gates.TGate
    url: https://bqskit.readthedocs.io/en/latest/source/autogen/bqskit.ir.gates.TGate.html
  qibo:
    name: qibo.gates.T
    url: https://qibo.science/qibo/stable/api-reference/qibo.html#qibo.gates.T
  pytket:
    name: pytket.circuit.OpType.T
    url: https://docs.quantinuum.com/tket/api-docs/optype.html#pytket.circuit.OpType.T
  qasm:
    name: "stdgates.inc: t"
    url: https://openqasm.com/language/standard_library.html#t
---

The $T$ gate applies a phase of $\mathrm{e}^{i\pi/4}$ to $|1\rangle$.

$$
T =
\begin{bmatrix}
  1 & 0 \\\\
  0 & \mathrm{e}^{i\frac{\pi}{4}}
\end{bmatrix}
$$

### Properties

- Non-Clifford; together with Clifford gates yields universal quantum computation.
- $T^2 = S$, $T^4 = Z$, and $T^8 = I$.
- $P(\pi/4) = T$.
- Often referred to as the $\pi/8$ gate because when viewed as a rotation around the $Z$-axis of the Bloch sphere, it can be written as $T = \mathrm{e}^{i\pi/8}R_z(\pi/4)$.

### Usage

- Resource gate in fault-tolerant protocols (magic state distillation).
- Phase rotations and compiling arbitrary single-qubit unitaries.