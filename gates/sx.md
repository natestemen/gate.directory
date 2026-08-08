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
groups:
  - clifford
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
    note: "No named constant. SX = cirq.X**0.5 exactly (XPowGate with exponent 0.5)."
  qsharp:
    name: Std.Intrinsic.SX
    url: https://learn.microsoft.com/en-us/qsharp/api/qsharp-lang/std.intrinsic/sx
  pyquil:
    note: Not available natively. RX(pi/2) is equal up to global phase.
  braket:
    name: braket.circuits.gates.V
    url: https://amazon-braket-sdk-python.readthedocs.io/en/latest/_apidoc/braket.circuits.gates.html#braket.circuits.gates.V
    note: "Braket names sqrt(X) 'V'; Vi is its inverse"
  bqskit:
    name: bqskit.ir.gates.SXGate
    url: https://bqskit.readthedocs.io/en/latest/source/autogen/bqskit.ir.gates.SXGate.html
    note: Also exported as SqrtXGate
  qibo:
    name: qibo.gates.SX
    url: https://qibo.science/qibo/stable/api-reference/qibo.html#qibo.gates.SX
  pytket:
    name: pytket.circuit.OpType.SX
    url: https://docs.quantinuum.com/tket/api-docs/optype.html#pytket.circuit.OpType.SX
  stim:
    name: SQRT_X
    url: https://github.com/quantumlib/Stim/blob/main/doc/gates.md#SQRT_X
  qasm:
    name: "stdgates.inc: sx"
    url: https://openqasm.com/language/standard_library.html#sx
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
