---
layout: gate
title: Canonical entangling
symbol: \mathrm{CAN}
alias:
  - can
  - canonical
groups:
arity: 2
parameters: 3
description: Parameterizes every two-qubit interaction up to local unitaries.
---

The canonical gate generates every two-qubit interaction (up to single-qubit rotations) through three real parameters $(a, b, c)$:

$$
\mathrm{CAN}(a, b, c) = \exp(i(a X{\otimes}X + b Y{\otimes}Y + c Z{\otimes}Z))
$$

In the computational basis:

$$
\begin{bmatrix}
  \mathrm{e}^{ic}\cos(a-b)    & 0                    & 0                    & i\mathrm{e}^{ic}\sin(a-b)    \\\\
  0                   & \mathrm{e}^{-ic}\cos(a+b)    & i\mathrm{e}^{-ic}\sin(a+b)   & 0                   \\\\
  0                   & i\mathrm{e}^{-ic}\sin(a+b)   & \mathrm{e}^{-ic}\cos(a+b)    & 0                   \\\\
  i\mathrm{e}^{ic}\sin(a-b)   & 0                    & 0                    & \mathrm{e}^{ic}\cos(a-b)
\end{bmatrix}
$$

### Properties

- Every $U \in SU(4)$ equals $\mathrm{CAN}(a,b,c)$ sandwiched by local single-qubit unitaries for some $a, b, c \in \mathbb{R}$ satisfying $\pi/4 \geq a \geq b \geq |c|$. This region defines the **Weyl chamber**.
- Two gates are locally equivalent if and only if they share the same $(a, b, c)$ coordinates.
- The Hamiltonian $aXX + bYY + cZZ$ block-diagonalizes in the Bell basis.

### Special Cases

| $(a, b, c)$             | Locally equivalent |
| ----------------------- | --------------------------------------- |
| $(0, 0, 0)$             | [Identity](/gates/identity) |
| $(\pi/4, 0, 0)$         | [CNOT](/gates/cnot) / [CZ](/gates/cz) |
| $(\pi/8, \pi/8, 0)$     | $\sqrt{i\mathrm{SWAP}}$ |
| $(\pi/4, \pi/4, 0)$     | [iSWAP](/gates/iswap) |
| $(\pi/8, \pi/8, \pi/8)$ | [$\sqrt{\mathrm{SWAP}}$](/gates/sqrt-swap) |
| $(\pi/4, \pi/4, \pi/4)$ | [SWAP](/gates/swap) (global phase) |
