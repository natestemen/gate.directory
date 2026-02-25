---
layout: gate
title: Phase Shift
symbol: P(\phi)
alias:
  - phase
  - p
groups:
arity: 1
description: Applies a relative phase $e^{i\phi}$ to the $|1\rangle$ component.
---

The phase shift gate is diagonal and leaves $|0\rangle$ unchanged while multiplying $|1\rangle$ by $e^{i\phi}$.

|             |                                                         |
| ----------- | ------------------------------------------------------- |
| Notation(s) | $P(\phi)$, $R_z(\phi)$                                  |
| Matrix      | $\begin{bmatrix}1 & 0 \\\\ 0 & e^{i\phi} \end{bmatrix}$ |
| Arity       | {{ arity }}                                             |
| Group       | $\mathsf{U}(2)$                                         |

### Properties

- Equivalent to $R_z(\phi)$ up to a global phase.
- Clifford when $\phi$ is an integer multiple of $\pi/2$.

### Usage

- Phase corrections and calibrated $Z$ rotations.
- Implementing controlled-phase operations and diagonal unitaries.

### Special Cases

The phase shift gate corresponds to other well-known gates for specific values of $\phi$:

| $\phi$   | Equivalent Gate | Matrix                                          |
| -------- | --------------- | ----------------------------------------------- |
| $0$      | Identity ($I$)  | $\begin{bmatrix}1 & 0 \\\\ 0 & 1\end{bmatrix}$  |
| $\pi/2$  | Phase ($S$)     | $\begin{bmatrix}1 & 0 \\\\ 0 & i\end{bmatrix}$  |
| $\pi$    | Pauli-Z ($Z$)   | $\begin{bmatrix}1 & 0 \\\\ 0 & -1\end{bmatrix}$ |
| $3\pi/2$ | $S^\dagger$     | $\begin{bmatrix}1 & 0 \\\\ 0 & -i\end{bmatrix}$ |
