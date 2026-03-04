---
layout: gate
title: Phase
symbol: S
notations:
  - S
  - \sqrt{Z}
  - Z^{1/2}
  - P(\pi/2)
arity: 1
groups:
  - clifford
description: $\pi/2$ phase gate, equal to $\sqrt{Z}$.
---

The $S$ gate applies a relative phase of $i$ to the $|1\rangle$ component.

$$S = \begin{bmatrix}1 & 0 \\\\ 0 & i\end{bmatrix} = \sqrt{Z}$$

### Properties

- Clifford and diagonal.
- $S^2 = Z$ and $S^4 = I$.
- Conjugates $X$ into $Y$: $S X S^\dagger = Y$.

### Usage

- Phase corrections and basis changes in Clifford circuits.
- Building block for $T$ and controlled-phase operations.