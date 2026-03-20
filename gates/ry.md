---
layout: gate
title: $y$ Rotation
symbol: R_y
notations:
  - R_y(\theta)
  - \mathrm{Ry}(\theta)
  - Y(\theta)
  - Y_\theta
groups:
  - orthogonal
arity: 1
parameters: 1
description: Rotation about the $y$ axis of the Bloch sphere.
sdks:
  qiskit:
    name: qiskit.circuit.library.RYGate
    url: https://docs.quantum.ibm.com/api/qiskit/qiskit.circuit.library.RYGate
  pennylane:
    name: pennylane.RY
    url: https://docs.pennylane.ai/en/stable/code/api/pennylane.RY.html
  cirq:
    name: cirq.Ry
    url: https://quantumai.google/reference/python/cirq/Ry
  pyquil:
    name: pyquil.gates.RY
    url: https://pyquil-docs.rigetti.com/en/stable/apidocs/pyquil.gates.html#pyquil.gates.RY
  braket:
    name: braket.circuits.gates.Ry
    url: https://amazon-braket-sdk-python.readthedocs.io/en/latest/_apidoc/braket.circuits.gates.html#braket.circuits.gates.Ry
  qibo:
    name: qibo.gates.RY
    url: https://qibo.science/qibo/stable/api-reference/qibo.html#rotation-y-axis-ry
  bqskit:
    name: bqskit.ir.gates.RYGate
    url: https://bqskit.readthedocs.io/en/latest/source/autogen/bqskit.ir.gates.RYGate.html
---

The $R_y$ gate rotates a qubit by angle $\theta$ around the $y$ axis.
It is the only purely real rotation matrix among $R_x$, $R_y$, and $R_z$.

$$
R_y(\theta) = \exp\left(-i\frac{\theta}{2}Y\right) =
\begin{bmatrix}
    \cos\frac{\theta}{2}    & -\sin\frac{\theta}{2} \\\\
    \sin{\frac{\theta}{2}}  & \phantom{+}\cos\frac{\theta}{2}
\end{bmatrix}
$$

### Properties

- Unitary with generator $Y$: $R_y(\theta) = e^{-i\theta Y/2}$.
- Real-valued matrix; useful for preparing real-amplitude states.
- $R_y(\pi) = -iY$.

### Usage

- State preparation and mixing amplitudes in variational circuits.
- Combined with $R_z$ for arbitrary single-qubit rotations.
