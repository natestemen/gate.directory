---
layout: gate
title: $x$ Rotation
symbol: R_x
notations:
  - R_x(\theta)
  - \mathrm{Rx}(\theta)
  - X(\theta)
  - X_\theta
arity: 1
parameters: 1
quirk:
  cols:
    - [{id: Rxft, arg: "2 pi t"}]
  note: \theta = 2\pi t
description: Rotation about the $x$ axis of the Bloch sphere.
sdks:
  qiskit:
    name: qiskit.circuit.library.RXGate
    url: https://docs.quantum.ibm.com/api/qiskit/qiskit.circuit.library.RXGate
  pennylane:
    name: pennylane.RX
    url: https://docs.pennylane.ai/en/stable/code/api/pennylane.RX.html
  cirq:
    name: cirq.Rx
    url: https://quantumai.google/reference/python/cirq/Rx
  qsharp:
    name: Std.Intrinsic.Rx
    url: https://learn.microsoft.com/en-us/qsharp/api/qsharp-lang/std.intrinsic/rx
  pyquil:
    name: pyquil.gates.RX
    url: https://pyquil-docs.rigetti.com/en/stable/apidocs/pyquil.gates.html#pyquil.gates.RX
  braket:
    name: braket.circuits.gates.Rx
    url: https://amazon-braket-sdk-python.readthedocs.io/en/latest/_apidoc/braket.circuits.gates.html#braket.circuits.gates.Rx
  bqskit:
    name: bqskit.ir.gates.RXGate
    url: https://bqskit.readthedocs.io/en/latest/source/autogen/bqskit.ir.gates.RXGate.html
  qibo:
    name: qibo.gates.RX
    url: https://qibo.science/qibo/stable/api-reference/qibo.html#qibo.gates.RX
  pytket:
    name: pytket.circuit.OpType.Rx
    url: https://docs.quantinuum.com/tket/api-docs/optype.html#pytket.circuit.OpType.Rx
    note: "Angle in half-turns: Rx(theta/pi)"
  qasm:
    name: "stdgates.inc: rx"
    url: https://openqasm.com/language/standard_library.html#rx
---

The $R_x$ gate rotates a qubit by angle $\theta$ around the $x$ axis.

$$
R_x(\theta) = \exp\left(-i\frac{\theta}{2}X\right)
= \begin{bmatrix}
  \cos\frac{\theta}{2}     & -i\sin\frac{\theta}{2} \\
  -i\sin{\frac{\theta}{2}} & \cos\frac{\theta}{2}
\end{bmatrix}
$$

### Properties

- $R_x(\pi) = -iX$ (global phase).
- Together with $R_z$ it forms a universal set for single-qubit rotations.
