---
layout: gate
title: SWAP
symbol: \mathrm{SWAP}
notations:
  - \mathrm{SWAP}
  - \mathrm{SWAP}_{ij}
groups:
  - clifford
  - orthogonal
  - permutation
  - number-preserving
properties:
  - hermitian
arity: 2
weyl: [1/4, 1/4, 1/4]
quirk:
  cols: [["Swap", "Swap"]]
description: Exchanges the quantum states of two qubits.
sdks:
  qiskit:
    name: qiskit.circuit.library.SwapGate
    url: https://docs.quantum.ibm.com/api/qiskit/qiskit.circuit.library.SwapGate
  pennylane:
    name: pennylane.SWAP
    url: https://docs.pennylane.ai/en/stable/code/api/pennylane.SWAP.html
  cirq:
    name: cirq.SWAP
    url: https://quantumai.google/reference/python/cirq/SWAP
  qsharp:
    name: Std.Intrinsic.SWAP
    url: https://learn.microsoft.com/en-us/qsharp/api/qsharp-lang/std.intrinsic/swap
  pyquil:
    name: pyquil.gates.SWAP
    url: https://pyquil-docs.rigetti.com/en/stable/apidocs/pyquil.gates.html#pyquil.gates.SWAP
  braket:
    name: braket.circuits.gates.Swap
    url: https://amazon-braket-sdk-python.readthedocs.io/en/latest/_apidoc/braket.circuits.gates.html#braket.circuits.gates.Swap
  bqskit:
    name: bqskit.ir.gates.SwapGate
    url: https://bqskit.readthedocs.io/en/latest/source/autogen/bqskit.ir.gates.SwapGate.html
  qibo:
    name: qibo.gates.SWAP
    url: https://qibo.science/qibo/stable/api-reference/qibo.html#qibo.gates.SWAP
  pytket:
    name: pytket.circuit.OpType.SWAP
    url: https://docs.quantinuum.com/tket/api-docs/optype.html#pytket.circuit.OpType.SWAP
  stim:
    name: SWAP
    url: https://github.com/quantumlib/Stim/blob/main/doc/gates.md#SWAP
  qasm:
    name: "stdgates.inc: swap"
    url: https://openqasm.com/language/standard_library.html#swap
---

The SWAP gate exchanges the states of two qubits and is commonly used to reorder qubits or mediate interactions between distant qubits.

$$
\mathrm{SWAP} = \begin{bmatrix}
  1 & 0 & 0 & 0 \\
  0 & 0 & 1 & 0 \\
  0 & 1 & 0 & 0 \\
  0 & 0 & 0 & 1
\end{bmatrix}
$$

### Properties

- Reversible: the SWAP gate is its own inverse.
- Decomposition:
  $\mathrm{SWAP} = \mathrm{CNOT}_{12} \cdot \mathrm{CNOT}_{21} \cdot \mathrm{CNOT}_{12}$.
