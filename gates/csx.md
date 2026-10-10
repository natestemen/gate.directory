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
weyl: [1/8, 0, 0]
quirk:
  cols: [["•", "X^½"]]
description: Applies $\sqrt{X}$ to the target when the control qubit is $|1\rangle$.
sdks:
  qiskit:
    name: qiskit.circuit.library.CSXGate
    url: https://docs.quantum.ibm.com/api/qiskit/qiskit.circuit.library.CSXGate
  pennylane:
    note: Not available natively. Construct with qml.ctrl(qml.SX(0), 1).
  cirq:
    name: cirq.CNotPowGate
    url: https://quantumai.google/reference/python/cirq/CNotPowGate
    note: "No named constant. CSX = cirq.CNOT**0.5 (CNotPowGate with exponent 0.5)."
  qsharp:
    note: "Apply via the Controlled functor, Controlled SX([control], target)."
  braket:
    name: braket.circuits.gates.CV
    url: https://amazon-braket-sdk-python.readthedocs.io/en/latest/_apidoc/braket.circuits.gates.html#braket.circuits.gates.CV
    note: "CV is Braket's controlled sqrt(X)"
  bqskit:
    name: bqskit.ir.gates.SqrtCNOTGate
    url: https://bqskit.readthedocs.io/en/latest/source/autogen/bqskit.ir.gates.SqrtCNOTGate.html
    note: Named SqrtCNOTGate; identical matrix to CSX
  qibo:
    name: qibo.gates.CSX
    url: https://qibo.science/qibo/stable/api-reference/qibo.html#qibo.gates.CSX
  pytket:
    name: pytket.circuit.OpType.CSX
    url: https://docs.quantinuum.com/tket/api-docs/optype.html#pytket.circuit.OpType.CSX
  qasm:
    note: "Not in stdgates.inc; write ctrl @ sx q0, q1."
---

The controlled-$\sqrt{X}$ gate applies $\sqrt{X}$ to the target qubit conditioned on the control being $|1\rangle$.

$$
\mathrm{C}\sqrt{X} =
\begin{bmatrix}
  1 & 0 & 0               & 0 \\
  0 & 1 & 0               & 0 \\
  0 & 0 & \frac{1 + i}{2} & \frac{1 - i}{2} \\
  0 & 0 & \frac{1 - i}{2} & \frac{1 + i}{2}
\end{bmatrix}
$$

### Properties

- $(\mathrm{C}\sqrt{X})^2 = \mathrm{C}X$, but there are other gates $A$ that satisfy $A^2 = \mathrm{C}X$ such as $(\mathrm{C}\sqrt{X})^\dag$.
