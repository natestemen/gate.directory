---
layout: gate
title: Pauli-Z
symbol: Z
alias:
  - z
notations:
  - Z
  - \sigma_z
  - \sigma^z
  - \sigma_3
groups:
  - pauli
  - clifford
  - diagonal
arity: 1
description: Phase-flip gate that leaves $|0\rangle$ unchanged and flips the phase of $|1\rangle$.
---

The Pauli-$Z$ gate applies a relative phase of $-1$ to the $|1\rangle$ component.

$$
Z = \begin{bmatrix}
  1 & 0 \\\\
  0 & -1
\end{bmatrix}
$$

### Properties

- Hermitian and self-inverse: $Z^\dagger = Z$ and $Z^2 = I$.
- Equivalent to a $\pi$ rotation about $z$ up to global phase.