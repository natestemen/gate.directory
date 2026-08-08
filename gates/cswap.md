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
groups:
  - orthogonal
  - permutation
  - number-preserving
properties:
  - hermitian
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
    note: "Alias: cirq.FREDKIN."
  qsharp:
    note: "Apply via the Controlled functor, Controlled SWAP([control], (q1, q2))."
  pyquil:
    name: pyquil.gates.CSWAP
    url: https://pyquil-docs.rigetti.com/en/stable/apidocs/pyquil.gates.html#pyquil.gates.CSWAP
  braket:
    name: braket.circuits.gates.CSwap
    url: https://amazon-braket-sdk-python.readthedocs.io/en/latest/_apidoc/braket.circuits.gates.html#braket.circuits.gates.CSwap
  bqskit:
    note: No CSwapGate; build with ControlledGate(SwapGate())
  qibo:
    note: Construct as qibo.gates.SWAP(q1, q2).controlled_by(q0)
  pytket:
    name: pytket.circuit.OpType.CSWAP
    url: https://docs.quantinuum.com/tket/api-docs/optype.html#pytket.circuit.OpType.CSWAP
  qasm:
    name: "stdgates.inc: cswap"
    url: https://openqasm.com/language/standard_library.html#cswap
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