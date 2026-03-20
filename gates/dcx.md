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
arity: 2
description: Two back-to-back CNOTs with alternating control and target qubits.
sdks:
  qiskit:
    name: qiskit.circuit.library.DCXGate
    url: https://docs.quantum.ibm.com/api/qiskit/qiskit.circuit.library.DCXGate
  pennylane:
    note: Not available natively.
  cirq:
    note: Not available natively.
---

The DCNOT gate applies a CNOT from qubit 1 to 2 and then a CNOT from qubit 2 to 1.

$$
\mathrm{DC}X =
\begin{bmatrix}
  1 & 0 & 0 & 0 \\\\
  0 & 0 & 1 & 0 \\\\
  0 & 0 & 0 & 1 \\\\
  0 & 1 & 0 & 0
\end{bmatrix}
$$

### Properties

- A two-qubit Clifford gate built from two CNOTs.
- Not symmetric under permuatation of qubits.
