---
layout: gate
title: Virtual Distillation
symbol: B^{(2)}_i
arity: 2
description: A two-qubit entangling gate used in virtual distillation error-mitigation protocols.
citation:
  year: 2020
  url: https://arxiv.org/abs/2011.07064
---

Virtual distillation is an error-mitigation technique that amplifies the dominant eigenstate of a noisy density matrix.
The gate $B^{(2)}_i$ is the two-qubit case of a more general entangling gate applied to two copies of a state.

$$
B^{(2)}_i =
\begin{bmatrix}
  1 & 0                  & 0                   & 0 \\\\
  0 & \frac{\sqrt{2}}{2} & -\frac{\sqrt{2}}{2} & 0 \\\\
  0 & \frac{\sqrt{2}}{2} & \frac{\sqrt{2}}{2}  & 0 \\\\
  0 & 0                  & 0                   & 1
\end{bmatrix}
$$

### Properties

- Unitary and entangling.
- Implements a partial swap between two copies of a state on qubit $i$.

### Usage

- Estimating nonlinear functionals like $\mathrm{Tr}(\rho^2 O)$ with hardware.
- Error mitigation in near-term experiments.

See [arXiv:2011.07064](https://arxiv.org/abs/2011.07064) for the full protocol.
