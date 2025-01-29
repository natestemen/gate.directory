---
layout: gate
title: Phase Shift Gate
symbol: P(\phi)
alias:
  - phase
  - p
groups:
arity: 1
---

The Phase Shift gate applies a rotation to the phase of the quantum state, leaving the $|0\rangle$ component unchanged while applying a phase shift $e^{i\phi}$ to the $|1\rangle$ component. {.gate-description}

|             |                                                         |
| ----------- | ------------------------------------------------------- |
| Notation(s) | $P(\phi)$, $R_z(\phi)$                                  |
| Matrix      | $\begin{bmatrix}1 & 0 \\\\ 0 & e^{i\phi} \end{bmatrix}$ |
| Arity       | {{ arity }}                                             |
| Group       | $\mathsf{U}(2)$                                         |

### Special Cases

The Phase Shift gate corresponds to other well-known gates for specific values of $\phi$:

| $\phi$   | Equivalent Gate | Matrix                                          |
| -------- | --------------- | ----------------------------------------------- |
| $0$      | Identity ($I$)  | $\begin{bmatrix}1 & 0 \\\\ 0 & 1\end{bmatrix}$  |
| $\pi/2$  | Phase ($S$)     | $\begin{bmatrix}1 & 0 \\\\ 0 & i\end{bmatrix}$  |
| $\pi$    | Pauli-Z ($Z$)   | $\begin{bmatrix}1 & 0 \\\\ 0 & -1\end{bmatrix}$ |
| $3\pi/2$ | $S^\dagger$     | $\begin{bmatrix}1 & 0 \\\\ 0 & -i\end{bmatrix}$ |
