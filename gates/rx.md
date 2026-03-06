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
description: Rotation about the $x$ axis of the Bloch sphere.
---

The $R_x$ gate rotates a qubit by angle $\theta$ around the $x$ axis.

$$
R_x(\theta) = \exp\left(-i\frac{\theta}{2}X\right)
= \begin{bmatrix}
  \cos\frac{\theta}{2}     & -i\sin\frac{\theta}{2} \\\\
  -i\sin{\frac{\theta}{2}} & \cos\frac{\theta}{2}
\end{bmatrix}
$$

### Properties

- $R_x(\pi) = -iX$ (global phase).
- Together with $R_z$ it forms a universal set for single-qubit rotations.
