---
layout: gate
title: $x$ Rotation
symbol: R_x
arity: 1
description: Rotation about the $x$ axis of the Bloch sphere.
---

The $R_x$ gate rotates a qubit by angle $\theta$ around the $x$ axis.

$$R_x(\theta) = \exp\left(-i\frac{\theta}{2}X\right) = \begin{bmatrix}\cos\frac{\theta}{2}   & -i\sin\frac{\theta}{2} \\\\ -i\sin{\frac{\theta}{2}} & \cos\frac{\theta}{2}\end{bmatrix}$$

### Properties

- Unitary with generator $X$: $R_x(\theta) = e^{-i\theta X/2}$.
- $R_x(\pi)$ equals $-iX$ (global phase).
- Together with $R_z$ it forms a universal set for single-qubit rotations.

### Usage

- Physical drive rotations in many hardware platforms.
- Basis changes when conjugating two-qubit interactions.
