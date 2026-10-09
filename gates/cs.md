---
layout: gate
title: Controlled-S
symbol: \mathrm{C}S
alias:
  - cs
notations:
  - \Lambda(S)
  - \sqrt{\mathrm{C}Z}
  - \mathrm{CP}(\pi/2)
groups:
  - diagonal
  - number-preserving
controlled: s
arity: 2
weyl: [1/8, 0, 0]
description: Applies a phase of $i$ to the $|11\rangle$ state, the square root of controlled-$Z$.
sdks:
  qiskit:
    name: qiskit.circuit.library.CSGate
    url: https://docs.quantum.ibm.com/api/qiskit/qiskit.circuit.library.CSGate
  pennylane:
    note: Not available natively. Construct with qml.ctrl(qml.S(0), 1).
  cirq:
    name: cirq.CZPowGate
    url: https://quantumai.google/reference/python/cirq/CZPowGate
    note: "No named constant. CS = cirq.CZ**0.5 (CZPowGate with exponent 0.5)."
  qsharp:
    note: "Apply via the Controlled functor, Controlled S([control], target)."
  pyquil:
    note: Equal to CPHASE(pi/2, control, target), or use S(target).controlled(control).
  braket:
    note: No CS class; CPhaseShift(pi/2) or s(target, control=q)
  bqskit:
    name: bqskit.ir.gates.CSGate
    url: https://bqskit.readthedocs.io/en/latest/source/autogen/bqskit.ir.gates.CSGate.html
  qibo:
    note: Construct as qibo.gates.S(q1).controlled_by(q0) or qibo.gates.CU1(q0, q1, pi/2)
  pytket:
    name: pytket.circuit.OpType.CS
    url: https://docs.quantinuum.com/tket/api-docs/optype.html#pytket.circuit.OpType.CS
  qasm:
    note: "Not in stdgates.inc; write ctrl @ s q0, q1."
---

The controlled-$S$ gate is a two-qubit diagonal gate, and the special case $\phi = \pi/2$ of the [controlled phase](/gates/controlled-phase) gate.

$$
\mathrm{C}S =
\begin{bmatrix}
  1 & 0 & 0 & 0 \\\\
  0 & 1 & 0 & 0 \\\\
  0 & 0 & 1 & 0 \\\\
  0 & 0 & 0 & i
\end{bmatrix}
$$

### Properties

- Diagonal and symmetric: control and target are interchangeable.
- Squares to [controlled-$Z$](/gates/cz): $\mathrm{C}S^2 = \mathrm{C}Z$, hence the notation $\sqrt{\mathrm{C}Z}$.
- *Not* Clifford. Like the [$T$ gate](/gates/t), it sits in the third level of the Clifford hierarchy, so it is a genuine resource beyond stabilizer circuits.

### Decompositions

- In terms of [$T$](/gates/t) gates and [CNOTs](/gates/cnot):
  $$\mathrm{C}S = (T \otimes T) \\, \mathrm{CNOT} \\, (I \otimes T^\dagger) \\, \mathrm{CNOT}$$
  Three $T$ gates is the minimum for an exact, ancilla-free circuit.

### Usage

- Appears throughout the [QFT](/gates/qft), which is built from controlled phase gates of decreasing angle: $\mathrm{C}Z$, $\mathrm{C}S$, $\mathrm{C}T$, and so on.
