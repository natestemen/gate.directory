---
layout: gate
title: Global Phase
symbol: e^{i\phi}
arity: n
description: Multiplies the entire quantum state by an overall phase factor.
---

A global phase gate applies $e^{i\phi}$ to the entire state. It has no observable effect on measurement probabilities or expectation values.

$$
G(\phi) = e^{i\phi} I = e^{i\phi}
\begin{bmatrix}
  1 & 0 \\\\
  0 & 1
\end{bmatrix}
$$

### Properties

- Physically unobservable on a closed system; only relative phases matter.
- Commutes with all gates.

### Usage

- Often ignored in circuit optimization and compilation.
- Appears when simplifying products of rotations.

