---
layout: gate
title: Square Root of X
symbol: \sqrt{X}
alias:
  - sx
  - sqrt-x
  - sqrtx
notations:
  - \sqrt{X}
  - \mathrm{S}X
  - V
arity: 1
description: A gate whose square is the Pauli-$X$ (NOT) gate.
sdks:
  qiskit:
    name: qiskit.circuit.library.SXGate
    url: https://docs.quantum.ibm.com/api/qiskit/qiskit.circuit.library.SXGate
  pennylane:
    name: pennylane.SX
    url: https://docs.pennylane.ai/en/stable/code/api/pennylane.SX.html
  cirq:
    name: cirq.XPowGate
    url: https://quantumai.google/reference/python/cirq/XPowGate
    note: No named constant. Use cirq.X**0.5 (XPowGate with exponent=0.5).
---

The $\sqrt{X}$ gate is a single-qubit unitary that squares to $X$.

$$
\sqrt{X} =
\frac{1}{2}\begin{bmatrix}
  1 + i & 1 - i \\\\
  1 - i & 1 + i
\end{bmatrix}
$$

### Properties

- $(\sqrt{X})^2 = X$.
- Equal to $R_x(\pi/2)$ up to a global phase.
- Used as the native gate in some superconducting platforms.
