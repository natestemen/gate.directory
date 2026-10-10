---
layout: gate
title: unnamed
symbol: G
groups:
  - orthogonal
arity: 1
quirk:
  cols:
    - [{id: Ryft, arg: "pi/4"}]
matrix:
  - ["cos(pi/8)", "-sin(pi/8)"]
  - ["sin(pi/8)", "cos(pi/8)"]
description: A single-qubit rotation used in optimal Toffoli decompositions.
citation:
  year: 2003
  url: https://arxiv.org/abs/quant-ph/0312225
---

The gate $G$ is a single-qubit rotation that appears in optimal decompositions of the Toffoli gate.

$$
G = \begin{bmatrix}
  \cos\frac{\pi}{8}   & -\sin\frac{\pi}{8} \\
  \sin{\frac{\pi}{8}} & \cos\frac{\pi}{8}
\end{bmatrix}
$$

### Properties

- Equivalent to $R_y(\pi/4)$.
- Real, unitary rotation about the $y$ axis.

### Usage

- Optimal decompositions of the Toffoli gate and related multi-controlled gates.

## References

- [The simplified Toffoli gate implementation by Margolus is optimal](https://arxiv.org/abs/quant-ph/0312225)