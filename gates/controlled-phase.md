---
layout: gate
title: Controlled Phase
symbol: \mathrm{C}P(\phi)
alias:
  - cphase
  - cp
notations:
  - \mathrm{CPhase}(\phi)
arity: 2
description: Applies a phase $\mathrm{e}^{i\phi}$ to $|11\rangle$ and leaves other basis states unchanged.
---

The controlled-phase gate is a two-qubit diagonal gate that adds a phase to the $|11\rangle$ component.

$$
\mathrm{C}P(\phi) =
\begin{bmatrix}
  1 & 0 & 0 & 0 \\\\
  0 & 1 & 0 & 0 \\\\
  0 & 0 & 1 & 0 \\\\
  0 & 0 & 0 & \mathrm{e}^{i\phi}
\end{bmatrix}
$$

### Properties

- Diagonal and symmetric under qubit exchange.
- Clifford when $\phi$ is a multiple of $\pi/2$.
- Related to controlled-$Z$ at $\phi = \pi$.

### Usage

- Phase-kickback in algorithms and controlled phase rotations.
- Building block for QFT and diagonal unitaries.
