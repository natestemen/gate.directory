---
layout: gate
title: Echoed Cross-Resonance
symbol: ECR
groups:
  - clifford
arity: 2
description: The Echoed Cross-Resonance (ECR) gate is a two-qubit Clifford gate that is native to superconducting quantum processors based on the cross-resonance interaction. Up to local single-qubit Clifford operations, the ECR gate is equivalent to a CNOT, and can therefore be used as a drop-in replacement for CNOT in Clifford circuits.

---

$$
ECR = \frac{1}{\sqrt{2}}
\begin{pmatrix}
    0 & 1   &  0  & i \\\\
    1 & 0   & -i  & 0 \\\\
    0 & i   &  0  & 1 \\\\
    -i & 0  &  1  & 0
\end{pmatrix}
$$

## References

- [`qiskit.circuit.library.ECRGate`](https://quantum.cloud.ibm.com/docs/en/api/qiskit/qiskit.circuit.library.ECRGate)
- [`bqskit.ir.gates.ECRGate`](https://bqskit.readthedocs.io/en/latest/source/autogen/bqskit.ir.gates.ECRGate.html)
- [`pennylane.ECR`](https://docs.pennylane.ai/en/stable/code/api/pennylane.ECR.html) (**note**: PennyLane uses a different endian than the matrix provided above.)