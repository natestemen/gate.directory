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
    note: Opposite qubit-ordering convention from Qiskit.
  braket:
    name: braket.circuits.gates.ECR
    url: https://amazon-braket-sdk-python.readthedocs.io/en/latest/_apidoc/braket.circuits.gates.html#braket.circuits.gates.ECR
  bqskit:
    name: bqskit.ir.gates.ECRGate
    url: https://bqskit.readthedocs.io/en/latest/source/autogen/bqskit.ir.gates.ECRGate.html
  qibo:
    name: qibo.gates.ECR
    url: https://qibo.science/qibo/stable/api-reference/qibo.html#qibo.gates.ECR
    note: Qubit-ordering conventions may differ from other SDKs
  pytket:
    name: pytket.circuit.OpType.ECR
    url: https://docs.quantinuum.com/tket/api-docs/optype.html#pytket.circuit.OpType.ECR
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
