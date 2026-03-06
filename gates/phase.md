---
layout: gate
title: Phase Shift
symbol: P(\phi)
alias:
  - phase
  - p
notations:
  - U_1(\phi)
groups:
  - diagonal
arity: 1
parameters: 1
description: Applies a relative phase $e^{i\phi}$ to the $|1\rangle$ component.
---

The phase shift gate is diagonal and leaves $|0\rangle$ unchanged while multiplying $|1\rangle$ by $e^{i\phi}$.

$$
P(\phi) = \begin{bmatrix}
  1 & 0 \\\\
  0 & \mathrm{e}^{i\phi}
\end{bmatrix}
$$

### Properties

- Equivalent to $R_z(\phi)$ up to a global phase.
- Clifford when $\phi$ is an integer multiple of $\pi/2$.

### Special Cases

| $\phi$   | Equivalent Gate | Matrix                                          |
| -------- | --------------- | ----------------------------------------------- |
| $0$      | [Identity](/gates/identity)  | $\begin{bmatrix}1 & 0 \\\\ 0 & 1\end{bmatrix}$  |
| $\pi / 4$| [$T$](/gates/t) | $\begin{bmatrix}1 & 0 \\\\ 0 & \mathrm{e}^{i\pi/8}\end{bmatrix}$  |
| $\pi/2$  | [$S$](/gates/s)     | $\begin{bmatrix}1 & 0 \\\\ 0 & i\end{bmatrix}$  |
| $\pi$    | [$Z$](/gates/pauli-z)   | $\begin{bmatrix}1 & 0 \\\\ 0 & -1\end{bmatrix}$ |
| $3\pi/2$ | $S^\dagger$     | $\begin{bmatrix}1 & 0 \\\\ 0 & -i\end{bmatrix}$ |
