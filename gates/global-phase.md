---
layout: gate
title: Global Phase
symbol: \mathrm{Ph}(\phi)
alias:
  - gphase
  - ph
notations:
  - \mathrm{e}^{i\phi}
  - \mathrm{e}^{i\phi} I
arity: n
description: Multiplies the entire quantum state by an overall phase factor.
---

A global phase gate applies $e^{i\phi}$ to the entire state. It has no observable effect on measurement probabilities or expectation values.
On a single qubit:

$$
\mathrm{Ph}(\phi) = \mathrm{e}^{i\phi} I =
\begin{bmatrix}
  \mathrm{e}^{i\phi} & 0 \\\\
  0                  & \mathrm{e}^{i\phi}
\end{bmatrix}
$$

### Properties

- Physically unobservable on a closed system; only relative phases matter.
- Commutes with all gates.

### Usage

- Often ignored in circuit optimization and compilation.
- Appears when simplifying products of rotations.
