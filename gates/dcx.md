---
layout: gate
title: Double CX
symbol: \mathrm{DC}X
alias:
  - dcnot
notations:
  - \mathrm{DCNOT}
groups:
  - clifford
  - orthogonal
  - permutation
arity: 2
weyl: [1/4, 1/4, 0]
quirk:
  cols: [["•", "X"], ["X", "•"]]
matrix:
  - [1, 0, 0, 0]
  - [0, 0, 1, 0]
  - [0, 0, 0, 1]
  - [0, 1, 0, 0]
description: Two back-to-back CNOTs with alternating control and target qubits.
sdks:
  qiskit:
    name: qiskit.circuit.library.DCXGate
    url: https://docs.quantum.ibm.com/api/qiskit/qiskit.circuit.library.DCXGate
  cirq:
    note: Not available natively. Compose cirq.CNOT(a, b) then cirq.CNOT(b, a).
  pyquil:
    note: Not available natively. Compose CNOT(q0, q1) then CNOT(q1, q0).
  qibo:
    note: Compose qibo.gates.CNOT(q0, q1) then qibo.gates.CNOT(q1, q0)
  pytket:
    note: Compose CX(0,1) then CX(1,0); wrap in a CircBox if reused
  stim:
    name: SWAPCX
    url: https://github.com/quantumlib/Stim/blob/main/doc/gates.md#SWAPCX
    note: SWAPCX is exactly DCX; CXSWAP is the same gate with qubit order reversed.
---

The DCNOT gate applies a CNOT from qubit 1 to 2 and then a CNOT from qubit 2 to 1.

$$
\mathrm{DC}X =
\begin{bmatrix}
  1 & 0 & 0 & 0 \\
  0 & 0 & 1 & 0 \\
  0 & 0 & 0 & 1 \\
  0 & 1 & 0 & 0
\end{bmatrix}
$$

### Properties

- A two-qubit Clifford gate built from two CNOTs.
- Not symmetric under permuatation of qubits.
