---
layout: gate
title: Hadamard
symbol: H
alias:
  - h
groups:
  - clifford
arity: 1
description: Maps computational basis states to equal superpositions and swaps the $X$ and $Z$ bases.
---

The Hadamard gate creates and removes superposition by mapping $|0\rangle \mapsto |+\rangle$ and $|1\rangle \mapsto |-\rangle$.

|             |                                                                    |
| ----------- | ------------------------------------------------------------------ |
| Notation(s) | $H$                                                                |
| Matrix      | $\frac{1}{\sqrt{2}}\begin{bmatrix}1 & 1 \\\\ 1 & -1 \end{bmatrix}$ |
| Arity       | {{ arity }}                                                        |
| Group       | $\mathsf{O}(2)$                                                    |

### Properties

- Self-inverse and Hermitian: $H^\dagger = H$.
- Conjugates Pauli operators: $H X H = Z$ and $H Z H = X$.
- Real and symmetric.

### Usage

- Basis changes between $Z$ and $X$ measurements.
- State preparation and interference in algorithms like QFT and Grover.
