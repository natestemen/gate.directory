---
layout: gate
title: Pauli-X
symbol: X
alias:
  - x
notations:
  - X
  - \sigma_x
  - \sigma^x
  - \sigma_1
  - \mathrm{NOT}
groups:
  - pauli
  - clifford
arity: 1
description: Bit-flip gate that swaps $|0\rangle$ and $|1\rangle$.
---

The Pauli-$X$ gate is the quantum analog of a classical NOT.

$$
X = \begin{bmatrix}
  0 & 1 \\\\
  1 & 0
\end{bmatrix}
$$

### Properties

- Hermitian and self-inverse: $X^\dagger = X$ and $X^2 = I$.
- Equivalent to a $R_x(\pi)$ up to global phase.
