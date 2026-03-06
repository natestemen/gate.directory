---
layout: gate
title: T
symbol: T
notations:
  - \pi/8
groups:
  - diagonal
arity: 1
description: A $\pi/8$ phase gate which is a non-Clifford rotation about $Z$.
---

The $T$ gate applies a phase of $\mathrm{e}^{i\pi/4}$ to $|1\rangle$.

$$
T =
\begin{bmatrix}
  1 & 0 \\\\
  0 & \mathrm{e}^{i\frac{\pi}{4}}
\end{bmatrix}
$$

### Properties

- Non-Clifford; together with Clifford gates yields universal quantum computation.
- $T^2 = S$, $T^4 = Z$, and $T^8 = I$.
- $P(\pi/4) = T$.
- Often referred to as the $\pi/8$ gate because when viewed as a rotation around the $Z$-axis of the Bloch sphere, it can be written as $T = \mathrm{e}^{i\pi/8}R_z(\pi/4)$.

### Usage

- Resource gate in fault-tolerant protocols (magic state distillation).
- Phase rotations and compiling arbitrary single-qubit unitaries.