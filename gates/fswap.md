---
layout: gate
title: fSWAP
symbol: \mathrm{fSWAP}
alias:
  - fswap
  - fermionic-swap
groups:
  - orthogonal
arity: 2
description: Swaps $|01\rangle$ and $|10\rangle$ while applying a $-1$ phase to $|11\rangle$.
---

The fermionic SWAP (fSWAP) gate behaves like SWAP on single-excitation states, but adds a phase of $-1$ to the $|11\rangle$ state.
The name comes from the fact that exchanging two fermions introduces a $-1$ phase as fermionic wavefunctions are antisymmetric under particle exchange.

$$
\mathrm{fSWAP} =
\begin{bmatrix}
  1 & 0 & 0 &  0 \\\\
  0 & 0 & 1 &  0 \\\\
  0 & 1 & 0 &  0 \\\\
  0 & 0 & 0 & -1
\end{bmatrix}
$$

### Properties

- Self-inverse: $\mathrm{fSWAP}^2 = I$.
- Equals SWAP on the $\{|01\rangle, |10\rangle\}$ subspace.
