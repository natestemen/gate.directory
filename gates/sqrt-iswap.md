---
layout: gate
title: Square Root iSWAP
symbol: \sqrt{i\mathrm{SWAP}}
alias:
  - sqrt-iswap
  - siswap
  - sqisw
notations:
  - \mathrm{SISWAP}
  - \mathrm{SQISW}
arity: 2
description: Applies half of an iSWAP interaction, native to superconducting hardware with $XY$ coupling.
sdks:
  qiskit:
    note: Not available as a named gate. Use iSwapGate().power(0.5).
  pennylane:
    name: pennylane.SISWAP
    url: https://docs.pennylane.ai/en/stable/code/api/pennylane.SISWAP.html
  cirq:
    name: cirq.SQRT_ISWAP
    url: https://quantumai.google/reference/python/cirq/SQRT_ISWAP
---

The $\sqrt{i\mathrm{SWAP}}$ gate is the square root of [iSWAP](/gates/iswap): applying it twice recovers the full iSWAP gate.

$$
\sqrt{i\mathrm{SWAP}} =
\begin{bmatrix}
  1 & 0                  & 0                  & 0 \\\\
  0 & \frac{1}{\sqrt{2}} & \frac{i}{\sqrt{2}} & 0 \\\\
  0 & \frac{i}{\sqrt{2}} & \frac{1}{\sqrt{2}} & 0 \\\\
  0 & 0                  & 0                  & 1
\end{bmatrix}
$$

### Properties

- $(\sqrt{i\mathrm{SWAP}})^2 = i\mathrm{SWAP}$.
