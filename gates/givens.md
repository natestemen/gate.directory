---
layout: gate
title: Givens Rotation
symbol: G(\theta)
alias:
  - givens
notations:
  - G(\theta)
  - G_{ij}(\theta)
groups:
  - orthogonal
arity: 2
parameters: 1
description: Two-level rotation that mixes the $|01\rangle$ and $|10\rangle$ subspace.
---

A Givens rotation is a two-qubit gate that performs a real rotation in the single-excitation subspace spanned by $|01\rangle$ and $|10\rangle$, leaving $|00\rangle$ and $|11\rangle$ unchanged.

$$
G(\theta) =
\begin{bmatrix}
  1 & 0 & 0 & 0 \\\\
  0 & \cos\theta & -\sin\theta & 0 \\\\
  0 & \sin\theta & \cos\theta & 0 \\\\
  0 & 0 & 0 & 1
\end{bmatrix}
$$

### Properties

- Conserves excitation number (acts nontrivially only on the single-excitation subspace).
- Real orthogonal rotation on $\{|01\rangle, |10\rangle\}$.
- Often combined with single-qubit phases to form a general complex Givens rotation.

### Usage

- Fermionic simulation and Gaussian/Slater-determinant state preparation.
- Structured ansatze that require pairwise mode rotations (e.g., in quantum chemistry).
