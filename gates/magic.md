---
layout: gate
title: Magic
symbol: M
alias:
  - m
arity: 2
description: Changes from the computational basis to the magic (Bell) basis used in two-qubit local invariants.
---

The magic gate is a fixed two-qubit unitary that performs a basis change to the magic basis (a Bell basis with specific phases).

$$
  M = \frac{1}{\sqrt{2}}
  \begin{bmatrix}
    1 & i & 0 & 0 \\\\
    0 & 0 & i & 1 \\\\
    0 & 0 & i & -1 \\\\
    1 & -i & 0 & 0
  \end{bmatrix}
$$

### Properties

- Columns are (phase-adjusted) Bell states, so it maps the computational basis to the magic basis:
  $M|00\rangle = \tfrac{|00\rangle + |11\rangle}{\sqrt{2}}$, $M|01\rangle = \tfrac{i(|00\rangle - |11\rangle)}{\sqrt{2}}$, $M|10\rangle = \tfrac{i(|01\rangle + |10\rangle)}{\sqrt{2}}$, $M|11\rangle = \tfrac{|01\rangle - |10\rangle}{\sqrt{2}}$.
- If $U \in \mathsf{SO}(4)$, then $M U M^\dagger = A \otimes B$ for some $A,B \in \mathsf{SU}(2)$ (the $\mathsf{SO}(4) \simeq (\mathsf{SU}(2)\times\mathsf{SU}(2))/\mathbb{Z}_2$ correspondence).
