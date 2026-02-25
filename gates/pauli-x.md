---
layout: gate
title: Pauli-X
symbol: X
alias:
  - x
groups:
  - pauli
  - clifford
arity: 1
description: Bit-flip gate that swaps $|0\rangle$ and $|1\rangle$.
---

The Pauli-$X$ gate is the quantum analog of a classical NOT.

|             |                                                 |
| ----------- | ----------------------------------------------- |
| Notation(s) | $X$, $\sigma_x$, $\sigma_1$                     |
| Matrix      | $\begin{bmatrix}0 & 1 \\\\ 1 & 0 \end{bmatrix}$ |
| Arity       | {{ arity }}                                     |
| Group       | $\mathsf{U}(2)$                                 |

### Properties

- Hermitian and self-inverse: $X^\dagger = X$ and $X^2 = I$.
- Equivalent to a $R_x(\pi)$ up to global phase.

### Usage

- Bit flips and toggling computational basis states.
