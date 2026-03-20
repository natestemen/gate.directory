---
layout: gate
title: Controlled sqrt(X)
symbol: \mathrm{C}\sqrt{X}
alias:
  - csx
  - controlled-sqrt-x
notations:
  - \mathrm{CS}X
  - \mathrm{C}V
  - \text{controlled-}\sqrt{X}
controlled: sx
arity: 2
description: Applies $\sqrt{X}$ to the target when the control qubit is $|1\rangle$.
sdks:
  qiskit:
    name: qiskit.circuit.library.CSXGate
    url: https://docs.quantum.ibm.com/api/qiskit/qiskit.circuit.library.CSXGate
  pennylane:
    note: Not available natively. Use qml.ctrl(qml.SX, control=0).
  cirq:
    note: Not available natively.
---

The controlled-$\sqrt{X}$ gate applies $\sqrt{X}$ to the target qubit conditioned on the control being $|1\rangle$.

$$
\mathrm{C}\sqrt{X} =
\begin{bmatrix}
  1 & 0 & 0               & 0 \\\\
  0 & 1 & 0               & 0 \\\\
  0 & 0 & \frac{1 + i}{2} & \frac{1 - i}{2} \\\\
  0 & 0 & \frac{1 - i}{2} & \frac{1 + i}{2}
\end{bmatrix}
$$

### Properties

- $(\mathrm{C}\sqrt{X})^2 = \mathrm{C}X$, but there are other gates $A$ that satisfy $A^2 = \mathrm{C}X$ such as $(\mathrm{C}\sqrt{X})^\dag$.
