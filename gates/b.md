---
layout: gate
title: B Gate
symbol: B
arity: 2
description: Two-qubit entangling gate that can synthesize arbitrary elements of $U(4)$ with only two applications.
citation:
  year: 2004
  url: https://arxiv.org/abs/quant-ph/0312193
---

The B gate introduced in Zhang, Vala, Sastry, and Whaley is

$$
\begin{align*}
B & = \exp\left[-i\left(\frac{\pi}{4}X\otimes X + \frac{\pi}{8}Y\otimes Y\right)\right] \\\\
  & = \begin{bmatrix}
    \alpha^{+} & 0 & 0 & i\alpha^{-} \\\\
    0 & \alpha^{-} & i\alpha^{+} & 0 \\\\
    0 & i\alpha^{+} & \alpha^{-} & 0 \\\\
    i\alpha^{-} & 0 & 0 & \alpha^{+}
  \end{bmatrix}
\end{align*}
$$

Where
$$
\begin{align*}
\alpha^{\pm} & = \tfrac{\sqrt{2}}{2}\left(\cos \tfrac{\pi}{8} \pm \sin \tfrac{\pi}{8}\right) \\\\
             & = \tfrac{\sqrt{2}}{4}\left(\sqrt{2 + \sqrt{2}} \pm \sqrt{2 - \sqrt{2}}\right)
\end{align*}
$$

### Properties

- Any $U \in U(4)$ can be realized with only two B gates plus local single-qubit gates.
- This improves on common alternatives (for example CNOT and DCNOT), which need three applications, and many other two-qubit gates that need three or more to synthesize arbitrary $U(4)$ operations.

## References

- [Minimum construction of two-qubit quantum operations](https://arxiv.org/abs/quant-ph/0312193)