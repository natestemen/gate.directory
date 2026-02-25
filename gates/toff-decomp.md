---
layout: gate
title: unnamed
symbol: G
arity: 1
description: A single-qubit rotation used in optimal Toffoli decompositions.
citation:
  year: 2003
  url: https://arxiv.org/abs/quant-ph/0312225
---

The gate $G$ is a single-qubit rotation that appears in optimal decompositions of the Toffoli gate.

$$
G = \begin{bmatrix}
  \cos\frac{\pi}{8}   & -\sin\frac{\pi}{8} \\\\
  \sin{\frac{\pi}{8}} & \cos\frac{\pi}{8}
\end{bmatrix}
$$

### Properties

- Equivalent to $R_y(\pi/4)$.
- Real, unitary rotation about the $y$ axis.

### Usage

- Optimal decompositions of the Toffoli gate and related multi-controlled gates.

## References

- [Shende, Markov, and Bullock (2003)](https://arxiv.org/abs/quant-ph/0312225)
