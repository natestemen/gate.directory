---
layout: gate
title: Givens Rotation
symbol: G_{ij}
alias:
  - givens
notations:
  - G(\theta)
  - G_{ij}(\theta)
groups:
  - orthogonal
  - matchgate
  - number-preserving
arity: 2
parameters: 1
weyl:
  coords: [theta/2, theta/2, 0]
  params:
    theta: { label: \theta, range: [0, 1], default: 1/4 }
quirk:
  spin: {theta: 2}
  cols:
    - [1, "Z^½"]
    - ["H", "H"]
    - ["•", "X"]
    - [1, {id: Rzft, param: theta}]
    - ["•", "X"]
    - ["H", "H"]
    - ["X^-½", "X^-½"]
    - ["•", "X"]
    - [1, {id: Rzft, param: theta}]
    - ["•", "X"]
    - ["X^½", "X^½"]
    - [1, "Z^-½"]
params:
  theta: { label: \theta, default: 1/4, range: [0, 2] }
matrix:
  - [1, 0, 0, 0]
  - [0, "cos(theta)", "-sin(theta)", 0]
  - [0, "sin(theta)", "cos(theta)", 0]
  - [0, 0, 0, 1]
description: Two-level rotation that mixes the $|01\rangle$ and $|10\rangle$ subspace.
sdks:
  qiskit:
    note: Not a named gate. XXPlusYYGate acts as a Givens rotation up to angle convention.
  pennylane:
    name: pennylane.SingleExcitation
    url: https://docs.pennylane.ai/en/stable/code/api/pennylane.SingleExcitation.html
    note: "Half-angle convention: SingleExcitation(θ) is the Givens rotation by θ/2."
  cirq:
    name: cirq.givens
    url: https://quantumai.google/reference/python/cirq/givens
    note: cirq.givens(θ) returns a PhasedISwapPowGate.
  qibo:
    name: qibo.gates.GIVENS
    url: https://qibo.science/qibo/stable/api-reference/qibo.html#qibo.gates.GIVENS
  pytket:
    note: "PhasedISWAP(0.25, 2*theta/pi) implements Givens(theta)"
---

A Givens rotation is a two-qubit gate that performs a real rotation in the single-excitation subspace spanned by $|01\rangle$ and $|10\rangle$, leaving $|00\rangle$ and $|11\rangle$ unchanged.

$$
G(\theta) =
\begin{bmatrix}
  1 & 0 & 0 & 0 \\
  0 & \cos\theta & -\sin\theta & 0 \\
  0 & \sin\theta & \cos\theta & 0 \\
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
