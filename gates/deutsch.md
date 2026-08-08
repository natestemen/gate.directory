---
layout: gate
title: Deutsch
symbol: D(\theta)
alias:
  - deutsch
notations:
  - D(\theta)
  - \Lambda^2(iR_x(2\theta))
arity: 3
parameters: 1
description: The original universal three-qubit gate, applying $iR_x(2\theta)$ to the target when both controls are $|1\rangle$.
citation:
  title: Quantum computational networks
  year: 1989
  url: https://doi.org/10.1098/rspa.1989.0099
---

The Deutsch gate is the doubly-controlled rotation David Deutsch introduced in 1989 to prove that a *single* three-qubit gate can be universal for quantum computation. When both controls are set it applies $i R_x(2\theta)$ to the target; otherwise it does nothing:

$$
D(\theta) =
\begin{bmatrix}
  1 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\\\
  0 & 1 & 0 & 0 & 0 & 0 & 0 & 0 \\\\
  0 & 0 & 1 & 0 & 0 & 0 & 0 & 0 \\\\
  0 & 0 & 0 & 1 & 0 & 0 & 0 & 0 \\\\
  0 & 0 & 0 & 0 & 1 & 0 & 0 & 0 \\\\
  0 & 0 & 0 & 0 & 0 & 1 & 0 & 0 \\\\
  0 & 0 & 0 & 0 & 0 & 0 & i\cos\theta & \sin\theta \\\\
  0 & 0 & 0 & 0 & 0 & 0 & \sin\theta & i\cos\theta
\end{bmatrix}
$$

### Special values

| $\theta$ | Gate |
| --- | --- |
| $\pi/2$ | [Toffoli](/gates/toffoli) |

### Properties

- Universality: when $\theta/\pi$ is irrational, repeated applications of $D(\theta)$ alone approximate any unitary to arbitrary accuracy (using ancilla qubits) — the historical prototype for all universality results that followed.
- Since $D(\theta)$ contains the Toffoli, it inherits classical (reversible) universality too.

### Usage

- Mostly of theoretical and historical interest; no hardware implements it natively, and modern universality proofs use small discrete gate sets (e.g. Clifford + [$T$](/gates/t)) instead.
