---
layout: gate
title: Echoed Cross-Resonance
symbol: ECR
groups:
  - clifford
arity: 2
description: A native two-qubit Clifford gate for cross-resonance hardware, locally equivalent to CNOT.
sdks:
  qiskit:
    name: qiskit.circuit.library.ECRGate
    url: https://docs.quantum.ibm.com/api/qiskit/qiskit.circuit.library.ECRGate
  pennylane:
    name: pennylane.ECR
    url: https://docs.pennylane.ai/en/stable/code/api/pennylane.ECR.html
    note: PennyLane's ECR uses the opposite qubit ordering convention from Qiskit.
  cirq:
    note: Not available natively.
  bqskit:
    name: bqskit.ir.gates.ECRGate
    url: https://bqskit.readthedocs.io/en/latest/source/autogen/bqskit.ir.gates.ECRGate.html
---

The echoed cross-resonance (ECR) gate is an entangling operation used on superconducting processors based on the cross-resonance interaction.

$$
ECR = \frac{1}{\sqrt{2}}
\begin{pmatrix}
    0 & 1   &  0  & i \\\\
    1 & 0   & -i  & 0 \\\\
    0 & i   &  0  & 1 \\\\
    -i & 0  &  1  & 0
\end{pmatrix}
$$

### Properties

- Clifford and entangling.
- Locally equivalent to CNOT via single-qubit Clifford gates.
- Implemented using echoed cross-resonance pulses.

### Usage

- Native two-qubit gate on cross-resonance superconducting devices.
- Compiled to or from CNOT in Clifford circuits.
