---
layout: gate
title: $z$ Rotation
symbol: R_z
notations:
  - R_z(\theta)
  - \mathrm{Rz}(\theta)
  - Z(\theta)
  - Z_\theta
groups:
  - diagonal
  - number-preserving
arity: 1
parameters: 1
quirk:
  spin: {theta: 2}
  cols:
    - [{id: Rzft, param: theta}]
params:
  theta: { label: \theta, default: 1/2, range: [0, 2] }
matrix:
  - ["exp(-i theta/2)", 0]
  - [0, "exp(i theta/2)"]
description: Rotation about the $z$ axis of the Bloch sphere.
sdks:
  qiskit:
    name: qiskit.circuit.library.RZGate
    url: https://docs.quantum.ibm.com/api/qiskit/qiskit.circuit.library.RZGate
  pennylane:
    name: pennylane.RZ
    url: https://docs.pennylane.ai/en/stable/code/api/pennylane.RZ.html
  cirq:
    name: cirq.Rz
    url: https://quantumai.google/reference/python/cirq/Rz
  qsharp:
    name: Std.Intrinsic.Rz
    url: https://learn.microsoft.com/en-us/qsharp/api/qsharp-lang/std.intrinsic/rz
  pyquil:
    name: pyquil.gates.RZ
    url: https://pyquil-docs.rigetti.com/en/stable/apidocs/pyquil.gates.html#pyquil.gates.RZ
  braket:
    name: braket.circuits.gates.Rz
    url: https://amazon-braket-sdk-python.readthedocs.io/en/latest/_apidoc/braket.circuits.gates.html#braket.circuits.gates.Rz
  bqskit:
    name: bqskit.ir.gates.RZGate
    url: https://bqskit.readthedocs.io/en/latest/source/autogen/bqskit.ir.gates.RZGate.html
  qibo:
    name: qibo.gates.RZ
    url: https://qibo.science/qibo/stable/api-reference/qibo.html#qibo.gates.RZ
  pytket:
    name: pytket.circuit.OpType.Rz
    url: https://docs.quantinuum.com/tket/api-docs/optype.html#pytket.circuit.OpType.Rz
    note: "Angle in half-turns: Rz(theta/pi)"
  qasm:
    name: "stdgates.inc: rz"
    url: https://openqasm.com/language/standard_library.html#rz
---

The $R_z$ gate rotates a qubit by angle $\theta$ around the $z$ axis, adding a relative phase between $|0\rangle$ and $|1\rangle$.

$$
R_z(\theta) = \exp\left(-i\frac{\theta}{2}Z\right) =
\begin{bmatrix}
  \mathrm{e}^{-i\frac{\theta}{2}}   & 0 \\
  0                                 & \mathrm{e}^{i\frac{\theta}{2}}
\end{bmatrix}
$$

### Properties

- Often implemented virtually as a frame update in many platforms.
- Combined with $R_x$ or $R_y$ for universal single-qubit control.
- Equivalent to a phase shift up to a global phase.
