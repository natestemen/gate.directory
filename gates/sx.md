---
layout: gate
title: Square Root of X
symbol: \sqrt{X}
alias:
  - sx
  - sqrt-x
  - sqrtx
notations:
  - \sqrt{X}
  - \mathrm{S}X
  - V
arity: 1
description: A gate whose square is the Pauli-$X$ (NOT) gate.
---

The $\sqrt{X}$ gate is a single-qubit unitary that squares to $X$.

$$
\sqrt{X} =
\frac{1}{2}\begin{bmatrix}
  1 + i & 1 - i \\\\
  1 - i & 1 + i
\end{bmatrix}
$$

### Properties

- $(\sqrt{X})^2 = X$.
- Equal to $R_x(\pi/2)$ up to a global phase.
- Used as the native gate in some superconducting platforms.
