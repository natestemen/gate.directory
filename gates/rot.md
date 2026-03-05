---
layout: gate
title: Arbitrary Rotation
symbol: R_{\mathbf{n}}(\theta)
alias:
  - rot
notations:
  - \mathrm{Rot}(\vec{n}, \theta)
  - R_{\vec{n}}(\theta)
arity: 1
parameters: 3
description: Rotation by angle $\theta$ about the Bloch-sphere axis $\vec{n}$.
---

The $\mathrm{Rot}(\vec{n}, \theta)$ gate performs a rotation by angle $\theta$ about the unit vector $\vec{n} = (n_x, n_y, n_z)$ on the Bloch sphere.

$$
\mathrm{Rot}(\vec{n}, \theta) = e^{-i\frac{\theta}{2}(n_x X + n_y Y + n_z Z)}
$$

$$
\mathrm{Rot}(\vec{n}, \theta) =
\begin{bmatrix}
  \cos\frac{\theta}{2} - i n_z \sin\frac{\theta}{2} & (-i n_x - n_y)\sin\frac{\theta}{2} \\\\
  (-i n_x + n_y)\sin\frac{\theta}{2} & \cos\frac{\theta}{2} + i n_z \sin\frac{\theta}{2}
\end{bmatrix}
$$

### Properties

- Recovers $R_x$, $R_y$, and $R_z$ when $\vec{n}$ is aligned with the axes.
- Generates all single-qubit unitaries up to global phase.

### Usage

- Arbitrary axis rotations in pulse-level control.
- Compact parameterization for variational circuits and compilation.
