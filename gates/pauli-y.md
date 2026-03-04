---
layout: gate
title: Pauli-Y
symbol: Y
alias:
  - y
notations:
  - Y
  - \sigma_y
  - \sigma_2
groups:
  - pauli
  - clifford
arity: 1
description: Bit-and-phase flip combining $X$ and $Z$ with a phase.
---

The Pauli-$Y$ gate is a $\pi$ rotation around the $y$ axis of the Bloch sphere.

|             |                                                  |
| ----------- | ------------------------------------------------ |
| Matrix      | $\begin{bmatrix}0 & -i \\\\ i & 0 \end{bmatrix}$ |
| Arity       | {{ arity }}                                      |
| Group       | $\mathsf{U}(2)$                                  |

### Properties

- Hermitian and self-inverse: $Y^\dagger = Y$ and $Y^2 = I$.
- Equivalent to a $\pi$ rotation about $y$ up to global phase.

### Usage

- Phase-sensitive bit flips and basis changes.