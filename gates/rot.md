---
layout: gate
title: Arbitrary Rotation
symbol: R_{\mathbf{n}}
alias:
  - rot
notations:
  - \mathrm{Rot}(\vec{n}, \theta)
  - R_{\vec{n}}(\theta)
arity: 1
parameters: 3
description: Rotation by angle $\theta$ about the Bloch-sphere axis $\vec{n}$.
sdks:
  qiskit:
    name: qiskit.circuit.library.RVGate
    url: https://docs.quantum.ibm.com/api/qiskit/qiskit.circuit.library.RVGate
    note: Rotation axis given as a vector whose norm is the rotation angle.
  pennylane:
    name: pennylane.Rot
    url: https://docs.pennylane.ai/en/stable/code/api/pennylane.Rot.html
    note: "ZYZ Euler convention, not axis-angle: Rot(ϕ,θ,ω)=RZ(ω)RY(θ)RZ(ϕ)."
  cirq:
    note: Not available natively. Decompose into cirq.rz/cirq.ry or use cirq.MatrixGate.
  qsharp:
    name: Std.Intrinsic.R
    url: https://learn.microsoft.com/en-us/qsharp/api/qsharp-lang/std.intrinsic/r
    note: Rotates about a chosen Pauli axis; arbitrary axes require composition.
  braket:
    note: No axis-angle class; U(theta, phi, lambda) covers any 1-qubit unitary
  bqskit:
    name: bqskit.ir.gates.PauliGate
    url: https://bqskit.readthedocs.io/en/latest/source/autogen/bqskit.ir.gates.PauliGate.html
    note: PauliGate(1) = exp(i a.sigma); params are Pauli coefficients, not (theta, axis)
  qibo:
    note: No axis-angle gate; use qibo.gates.U3 with equivalent Euler angles
  pytket:
    note: Any 1-qubit rotation via TK1 Euler angles (half-turns) or Unitary1qBox
---

The $\mathrm{Rot}(\vec{n}, \theta)$ gate performs a rotation by angle $\theta$ about the unit vector $\vec{n} = (n_x, n_y, n_z)$ on the Bloch sphere.

$$
\mathrm{Rot}(\vec{n}, \theta) = e^{-i\frac{\theta}{2}(n_x X + n_y Y + n_z Z)}
$$

Writing $c = \cos\frac{\theta}{2}$ and $s = \sin\frac{\theta}{2}$, the matrix is

$$
\mathrm{Rot}(\vec{n}, \theta) =
\begin{bmatrix}
  c - i n_z s & (-i n_x - n_y)\, s \\
  (-i n_x + n_y)\, s & c + i n_z s
\end{bmatrix}
$$

### Properties

- Recovers $R_x$, $R_y$, and $R_z$ when $\vec{n}$ is aligned with the axes.
- Generates all single-qubit unitaries up to global phase.

### Usage

- Arbitrary axis rotations in pulse-level control.
- Compact parameterization for variational circuits and compilation.
