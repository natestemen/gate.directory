---
layout: gate
title: T
symbol: T
notations:
  - \pi/8
arity: 1
description: A $\pi/8$ phase gate which is a non-Clifford rotation about $Z$.
---

The $T$ gate applies a phase of $e^{i\pi/4}$ to $|1\rangle$.

$$T = \begin{bmatrix}1 & 0 \\\\ 0 & e^{i\frac{\pi}{4}}\end{bmatrix} = \sqrt{S} = \sqrt[4]{Z}$$

### Properties

- Non-Clifford; together with Clifford gates yields universal quantum computation.
- $T^2 = S$, $T^4 = Z$, and $T^8 = I$.
- Diagonal and unitary.

### Usage

- Resource gate in fault-tolerant protocols (magic state distillation).
- Phase rotations and compiling arbitrary single-qubit unitaries.