---
layout: gate
title: Pauli-Z
symbol: Z
alias:
  - z
groups:
  - pauli
  - clifford
arity: 1
description: Phase-flip gate that leaves $|0\rangle$ unchanged and flips the phase of $|1\rangle$.
---

The Pauli-$Z$ gate applies a relative phase of $-1$ to the $|1\rangle$ component.

|             |                                                  |
| ----------- | ------------------------------------------------ |
| Notation(s) | $Z$, $\sigma_z$, $\sigma_3$                      |
| Matrix      | $\begin{bmatrix}1 & 0 \\\\ 0 & -1 \end{bmatrix}$ |
| Arity       | {{ arity }}                                      |
| Group       | $\mathsf{U}(2)$                                  |

### Properties

- Hermitian and self-inverse: $Z^\dagger = Z$ and $Z^2 = I$.
- Equivalent to a $\pi$ rotation about $z$ up to global phase.
- Diagonal in the computational basis.
