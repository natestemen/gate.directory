---
layout: gate
title: Controlled-Z
symbol: \mathrm{CZ}
alias:
  - cz
groups:
  - clifford
arity: 2
description: Applies a $-1$ phase to $|11\rangle$.
---

The controlled-$Z$ gate is a two-qubit diagonal entangling gate.

$$
\mathrm{CZ} =
\begin{bmatrix}
  1 & 0 & 0 & 0 \\\\
  0 & 1 & 0 & 0 \\\\
  0 & 0 & 1 & 0 \\\\
  0 & 0 & 0 & -1
\end{bmatrix}
$$

### Properties

- Clifford, Hermitian, and self-inverse.
- Related to CNOT by Hadamards on the target: $\mathrm{CNOT} = (I \otimes H)\,\mathrm{CZ}\,(I \otimes H)$.
- Symmetric under exchange of the two qubits.

### Usage

- Native entangling gate on several hardware platforms.
- Controlled phase flips and stabilizer circuits.

