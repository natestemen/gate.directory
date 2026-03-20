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
arity: 1
parameters: 1
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
---

The $R_z$ gate rotates a qubit by angle $\theta$ around the $z$ axis, adding a relative phase between $|0\rangle$ and $|1\rangle$.

$$
R_z(\theta) = \exp\left(-i\frac{\theta}{2}Z\right) =
\begin{bmatrix}
  \mathrm{e}^{-i\frac{\theta}{2}}   & 0 \\\\
  0                                 & \mathrm{e}^{i\frac{\theta}{2}}
\end{bmatrix}
$$

### Properties

- Often implemented virtually as a frame update in many platforms.
- Combined with $R_x$ or $R_y$ for universal single-qubit control.
- Equivalent to a phase shift up to a global phase.
