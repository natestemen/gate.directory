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
B = e^{-i\left(\frac{\pi}{4}X\otimes X + \frac{\pi}{8}Y\otimes Y\right)}.
$$

### Properties

- Any $U \in U(4)$ can be realized with only two B gates plus local single-qubit gates.
- This improves on common alternatives (for example CNOT and DCNOT), which need three applications, and many other two-qubit gates that need three or more to synthesize arbitrary $U(4)$ operations.

## References

- [Minimum construction of two-qubit quantum operations](https://arxiv.org/abs/quant-ph/0312193)