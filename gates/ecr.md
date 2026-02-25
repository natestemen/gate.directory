---
layout: gate
title: Echoed Cross-Resonance
symbol: ECR
groups:
  - clifford
arity: 2
description: A native two-qubit Clifford gate for cross-resonance hardware, locally equivalent to CNOT.
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

## References

- [`qiskit.circuit.library.ECRGate`](https://quantum.cloud.ibm.com/docs/en/api/qiskit/qiskit.circuit.library.ECRGate)
- [`bqskit.ir.gates.ECRGate`](https://bqskit.readthedocs.io/en/latest/source/autogen/bqskit.ir.gates.ECRGate.html)
- [`pennylane.ECR`](https://docs.pennylane.ai/en/stable/code/api/pennylane.ECR.html) (**note**: PennyLane uses a different endian than the matrix provided above.)
