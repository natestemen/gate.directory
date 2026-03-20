---
layout: gate
title: Identity
symbol: I
alias:
  - i
notations:
  - I
  - I_n
  - 1_n
  - \mathbb{1}
  - \mathrm{Id}
groups:
  - pauli
  - clifford
  - diagonal
  - orthogonal
arity: n
description: Leaves the quantum state unchanged.
---

The identity gate $I_n$ acts on $n$ qubits and leaves all basis states unchanged.

$$
I_2 = \begin{bmatrix}
  1 & 0 \\\\
  0 & 1
\end{bmatrix}
$$

### Properties

- Identity element of the unitary group; it commutes with all gates.