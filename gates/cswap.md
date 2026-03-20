---
layout: gate
title: Fredkin
symbol: \mathrm{CSWAP}
alias:
  - fredkin
notations:
  - \mathrm{CSWAP}
  - \text{Fredkin}
  - \text{controlled-}SWAP
arity: 3
controlled: swap
description: Controlled swap of two target qubits conditioned on a single control qubit.
sdks:
  qiskit:
    name: qiskit.circuit.library.CSwapGate
    url: https://docs.quantum.ibm.com/api/qiskit/qiskit.circuit.library.CSwapGate
  pennylane:
    name: pennylane.CSWAP
    url: https://docs.pennylane.ai/en/stable/code/api/pennylane.CSWAP.html
  cirq:
    name: cirq.CSWAP
    url: https://quantumai.google/reference/python/cirq/CSWAP
---

The Fredkin (CSWAP) gate swaps the two target qubits when the control qubit is in the $|1\rangle$ state, and acts as identity when the control is $|0\rangle$.

$$
\mathrm{CSWAP} =
\begin{bmatrix}
  1 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\\\
  0 & 1 & 0 & 0 & 0 & 0 & 0 & 0 \\\\
  0 & 0 & 1 & 0 & 0 & 0 & 0 & 0 \\\\
  0 & 0 & 0 & 1 & 0 & 0 & 0 & 0 \\\\
  0 & 0 & 0 & 0 & 1 & 0 & 0 & 0 \\\\
  0 & 0 & 0 & 0 & 0 & 0 & 1 & 0 \\\\
  0 & 0 & 0 & 0 & 0 & 1 & 0 & 0 \\\\
  0 & 0 & 0 & 0 & 0 & 0 & 0 & 1
\end{bmatrix}
$$

### Properties

- Self-inverse and Hermitian: $\mathrm{CSWAP}^\dagger = \mathrm{CSWAP}$.
- Classical reversible and conservative; it preserves Hamming weight in the computational basis.
- Can be decomposed into CNOT and Toffoli gates or into a small set of two-qubit gates.

### Usage

- Conditional routing and permutation of qubits in a circuit.
- Reversible classical logic and quantum algorithms that require controlled swaps.