---
layout: gate
title: Controlled-CZ
symbol: \mathrm{CC}Z
alias:
  - ccz
notations:
  - C^2Z
  - \Lambda^2(Z)
groups:
  - diagonal
  - orthogonal
  - number-preserving
properties:
  - hermitian
controlled: cz
arity: 3
quirk:
  cols: [["•", "•", "Z"]]
matrix:
  - [1, 0, 0, 0, 0, 0, 0, 0]
  - [0, 1, 0, 0, 0, 0, 0, 0]
  - [0, 0, 1, 0, 0, 0, 0, 0]
  - [0, 0, 0, 1, 0, 0, 0, 0]
  - [0, 0, 0, 0, 1, 0, 0, 0]
  - [0, 0, 0, 0, 0, 1, 0, 0]
  - [0, 0, 0, 0, 0, 0, 1, 0]
  - [0, 0, 0, 0, 0, 0, 0, -1]
description: Applies a $-1$ phase to $|111\rangle$ and leaves all other basis states unchanged.
sdks:
  qiskit:
    name: qiskit.circuit.library.CCZGate
    url: https://docs.quantum.ibm.com/api/qiskit/qiskit.circuit.library.CCZGate
  pennylane:
    name: pennylane.CCZ
    url: https://docs.pennylane.ai/en/stable/code/api/pennylane.CCZ.html
  cirq:
    name: cirq.CCZ
    url: https://quantumai.google/reference/python/cirq/CCZ
  qsharp:
    note: "Apply via the Controlled functor, Controlled Z([c1, c2], target)."
  pyquil:
    note: "Not available natively. Use the CONTROLLED modifier: CZ(q1, q2).controlled(q0)."
  braket:
    note: "No CCZ class; use z with two controls: Circuit().z(t, control=[c0,c1])"
  bqskit:
    note: No CCZGate; build with ControlledGate(ZGate(), 2)
  qibo:
    name: qibo.gates.CCZ
    url: https://qibo.science/qibo/stable/api-reference/qibo.html#qibo.gates.CCZ
  pytket:
    name: pytket.circuit.OpType.CnZ
    url: https://docs.quantinuum.com/tket/api-docs/optype.html#pytket.circuit.OpType.CnZ
    note: Use CnZ with two controls
  qasm:
    note: "Not in stdgates.inc; write ctrl @ ctrl @ z q0, q1, q2."
---

The controlled-controlled-$Z$ gate applies a phase of $-1$ to the $|111\rangle$ state and acts as the identity on all others.

$$
\mathrm{CC}Z =
\begin{bmatrix}
  1 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
  0 & 1 & 0 & 0 & 0 & 0 & 0 & 0 \\
  0 & 0 & 1 & 0 & 0 & 0 & 0 & 0 \\
  0 & 0 & 0 & 1 & 0 & 0 & 0 & 0 \\
  0 & 0 & 0 & 0 & 1 & 0 & 0 & 0 \\
  0 & 0 & 0 & 0 & 0 & 1 & 0 & 0 \\
  0 & 0 & 0 & 0 & 0 & 0 & 1 & 0 \\
  0 & 0 & 0 & 0 & 0 & 0 & 0 & -1
\end{bmatrix}
$$

### Properties

- Hermitian and self-inverse: $\mathrm{CCZ}^2 = I$.
- Related to Toffoli by Hadamards on the target: $\mathrm{CC}X = (I \otimes I \otimes H)\mathrm{CC}Z(I \otimes I \otimes H)$.
- Symmetric under permutation of all three qubits, unlike Toffoli.
