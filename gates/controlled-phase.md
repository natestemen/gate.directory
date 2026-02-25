---
layout: gate
title: Controlled Phase
symbol: \mathrm{CP}(\phi)
alias:
  - cphase
  - cp
arity: 2
description: Applies a phase $e^{i\phi}$ to $|11\rangle$ and leaves other basis states unchanged.
---

The controlled-phase gate is a two-qubit diagonal gate that adds a phase to the $|11\rangle$ component.

$$
\mathrm{CP}(\phi) =
\begin{bmatrix}
  1 & 0 & 0 & 0 \\\\
  0 & 1 & 0 & 0 \\\\
  0 & 0 & 1 & 0 \\\\
  0 & 0 & 0 & e^{i\phi}
\end{bmatrix}
$$

### Properties

- Diagonal and symmetric under qubit exchange.
- Clifford when $\phi$ is a multiple of $\pi/2$.
- Related to controlled-$Z$ at $\phi = \pi$.

### Usage

- Phase-kickback in algorithms and controlled phase rotations.
- Building block for QFT and diagonal unitaries.

