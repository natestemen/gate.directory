---
layout: gate
title: $z$ Rotation
symbol: R_z
notations:
  - R_z(\theta)
  - \mathrm{Rz}(\theta)
  - Z(\theta)
  - Z_\theta
arity: 1
description: Rotation about the $z$ axis of the Bloch sphere.
---

The $R_z$ gate rotates a qubit by angle $\theta$ around the $z$ axis, adding a relative phase between $|0\rangle$ and $|1\rangle$.

$$R_z(\theta) = \exp\left(-i\frac{\theta}{2}Z\right) = \begin{bmatrix}e^{-i\frac{\theta}{2}}   & 0 \\\\ 0 & e^{i\frac{\theta}{2}}\end{bmatrix}$$

### Properties

- Diagonal in the computational basis.
- Equivalent to a phase shift up to a global phase.
- Often implemented virtually as a frame update in many platforms.

### Usage

- Fast phase corrections in compilation.
- Combined with $R_x$ or $R_y$ for universal single-qubit control.