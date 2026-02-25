---
layout: gate
title: $y$ Rotation
symbol: R_y
arity: 1
description: Rotation about the $y$ axis of the Bloch sphere.
---

The $R_y$ gate rotates a qubit by angle $\theta$ around the $y$ axis.
It is the only purely real rotation matrix among $R_x$, $R_y$, and $R_z$.

$$
R_y(\theta) = \exp\left(-i\frac{\theta}{2}Y\right) =
\begin{bmatrix}
    \cos\frac{\theta}{2}    & -\sin\frac{\theta}{2} \\\\
    \sin{\frac{\theta}{2}}            & \phantom{+}\cos\frac{\theta}{2}
\end{bmatrix}
$$

### Properties

- Unitary with generator $Y$: $R_y(\theta) = e^{-i\theta Y/2}$.
- Real-valued matrix; useful for preparing real-amplitude states.
- $R_y(\pi)$ equals $-iY$ up to global phase.

### Usage

- State preparation and mixing amplitudes in variational circuits.
- Combined with $R_z$ for arbitrary single-qubit rotations.

## References

- [`qiskit.circuit.library.RYGate`](https://quantum.cloud.ibm.com/docs/en/api/qiskit/qiskit.circuit.library.RYGate)
- [`qibo.gates.RY`](https://qibo.science/qibo/stable/api-reference/qibo.html#rotation-y-axis-ry)
- [`pyquil.gates.RY`](https://pyquil-docs.rigetti.com/en/stable/apidocs/pyquil.gates.html#pyquil.gates.RY)
- [`cirq.Ry`](https://quantumai.google/reference/python/cirq/Ry)
- [`pennylane.RY`](https://docs.pennylane.ai/en/stable/code/api/pennylane.RY.html)
- [`braket.circuits.gates.Ry`](https://amazon-braket-sdk-python.readthedocs.io/en/latest/_apidoc/braket.circuits.gates.html#braket.circuits.gates.Ry)
- [`bqskit.ir.gates.RYGate`](https://bqskit.readthedocs.io/en/latest/source/autogen/bqskit.ir.gates.RYGate.html)
