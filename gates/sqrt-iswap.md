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
groups:
  - matchgate
  - number-preserving
arity: 2
weyl: [1/8, 1/8, 0]
quirk:
  matrix: "{{1,0,0,0},{0,0.7071067812,0.7071067812i,0},{0,0.7071067812i,0.7071067812,0},{0,0,0,1}}"
matrix:
  - [1, 0, 0, 0]
  - [0, "1/sqrt(2)", "i/sqrt(2)", 0]
  - [0, "i/sqrt(2)", "1/sqrt(2)", 0]
  - [0, 0, 0, 1]
description: Applies half of an iSWAP interaction, native to superconducting hardware with $XY$ coupling.
sdks:
  qiskit:
    note: Not available as a named gate. Use iSwapGate().power(0.5).
  pennylane:
    name: pennylane.SISWAP
    url: https://docs.pennylane.ai/en/stable/code/api/pennylane.SISWAP.html
    note: Also available under the alias qml.SQISW.
  cirq:
    name: cirq.SQRT_ISWAP
    url: https://quantumai.google/reference/python/cirq/SQRT_ISWAP
  pyquil:
    note: Equal to pyquil.gates.XY(pi/2); a dedicated SQISW gate exists only on master.
  braket:
    note: No named class; XY(pi/2) realizes sqrt-iSWAP
  bqskit:
    name: bqskit.ir.gates.SqrtISwapGate
    url: https://bqskit.readthedocs.io/en/latest/source/autogen/bqskit.ir.gates.SqrtISwapGate.html
  qibo:
    name: qibo.gates.SiSWAP
    url: https://qibo.science/qibo/stable/api-reference/qibo.html#qibo.gates.SiSWAP
    note: Dagger available as qibo.gates.SiSWAPDG
  pytket:
    note: ISWAP(0.5) in pytket; ISWAP angle is in half-turns
---

The $\sqrt{i\mathrm{SWAP}}$ gate is the square root of [iSWAP](/gates/iswap): applying it twice recovers the full iSWAP gate.

$$
\sqrt{i\mathrm{SWAP}} =
\begin{bmatrix}
  1 & 0                  & 0                  & 0 \\
  0 & \frac{1}{\sqrt{2}} & \frac{i}{\sqrt{2}} & 0 \\
  0 & \frac{i}{\sqrt{2}} & \frac{1}{\sqrt{2}} & 0 \\
  0 & 0                  & 0                  & 1
\end{bmatrix}
$$

### Properties

- $(\sqrt{i\mathrm{SWAP}})^2 = i\mathrm{SWAP}$.
