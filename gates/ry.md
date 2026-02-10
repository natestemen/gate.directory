---
layout: gate
title: $y$ Rotation
symbol: R_y
arity: 1
description: A rotation about the Y axis on the Bloch sphere.
---

The only purely real rotation matrix from $R_x$, $R_y$, $R_z$.
$$
R_y(\theta) = \exp\left(-i\frac{\theta}{2}Y\right) =
\begin{bmatrix}
    \cos\frac{\theta}{2}    & -\sin\frac{\theta}{2} \\\\
    \sin{\frac{\theta}{2}}            & \phantom{+}\cos\frac{\theta}{2}
\end{bmatrix}
$$

## References

- [`qiskit.circuit.library.RYGate`](https://quantum.cloud.ibm.com/docs/en/api/qiskit/qiskit.circuit.library.RYGate)
- [`qibo.gates.RY`](https://qibo.science/qibo/stable/api-reference/qibo.html#rotation-y-axis-ry)
- [`pyquil.gates.RY`](https://pyquil-docs.rigetti.com/en/stable/apidocs/pyquil.gates.html#pyquil.gates.RY)
- [`cirq.Ry`](https://quantumai.google/reference/python/cirq/Ry)
- [`pennylane.RY`](https://docs.pennylane.ai/en/stable/code/api/pennylane.RY.html)
- [`braket.circuits.gates.Ry`](https://amazon-braket-sdk-python.readthedocs.io/en/latest/_apidoc/braket.circuits.gates.html#braket.circuits.gates.Ry)
- [`bqskit.ir.gates.RYGate`](https://bqskit.readthedocs.io/en/latest/source/autogen/bqskit.ir.gates.RYGate.html)