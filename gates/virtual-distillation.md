---
layout: gate
title: Virtual Distillation
symbol: B^{(2)}_i
arity: 2
description: A gate used in the virtual distillation protocol for error mitigation.
citation:
  year: 2020
  url: https://arxiv.org/abs/2011.07064
---

Virtual distillation is an error-mitigation technique that improves expectation-value estimates by effectively amplifying the contribution of the dominant eigenstate of a noisy quantum state.
The gate $B^{(2)}_i$ is a the two-qubit case of a more general entangling gate.
In the two-qubit case it on the $i$th qubit of two copies of a prepared state $\rho$ before measurement to extract information about higher moments of $\rho$ (such as $\mathrm{Tr}(\rho^2 O)$) using standard quantum hardware.

$$
B^{(2)}_i =
\begin{bmatrix}
  1 & 0                  & 0                   & 0 \\\\
  0 & \frac{\sqrt{2}}{2} & -\frac{\sqrt{2}}{2} & 0 \\\\
  0 & \frac{\sqrt{2}}{2} & \frac{\sqrt{2}}{2}  & 0 \\\\
  0 & 0                  & 0                   & 1
\end{bmatrix}
$$

See [arXiv:2011.07064](https://arxiv.org/abs/2011.07064) for the full protocol.
