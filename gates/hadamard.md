---
layout: gate
title: Hadamard
symbol: H
alias:
  - h
groups:
  - clifford
  - orthogonal
arity: 1
description: Maps computational basis states to equal superpositions and swaps the $X$ and $Z$ bases.
sdks:
  qiskit:
    name: qiskit.circuit.library.HGate
    url: https://docs.quantum.ibm.com/api/qiskit/qiskit.circuit.library.HGate
  pennylane:
    name: pennylane.Hadamard
    url: https://docs.pennylane.ai/en/stable/code/api/pennylane.Hadamard.html
  cirq:
    name: cirq.H
    url: https://quantumai.google/reference/python/cirq/H
  qsharp:
    name: Std.Intrinsic.H
    url: https://learn.microsoft.com/en-us/qsharp/api/qsharp-lang/std.intrinsic/h
  pyquil:
    name: pyquil.gates.H
    url: https://pyquil-docs.rigetti.com/en/stable/apidocs/pyquil.gates.html#pyquil.gates.H
  braket:
    name: braket.circuits.gates.H
    url: https://amazon-braket-sdk-python.readthedocs.io/en/latest/_apidoc/braket.circuits.gates.html#braket.circuits.gates.H
  bqskit:
    name: bqskit.ir.gates.HGate
    url: https://bqskit.readthedocs.io/en/latest/source/autogen/bqskit.ir.gates.HGate.html
  qibo:
    name: qibo.gates.H
    url: https://qibo.science/qibo/stable/api-reference/qibo.html#qibo.gates.H
  pytket:
    name: pytket.circuit.OpType.H
    url: https://docs.quantinuum.com/tket/api-docs/optype.html#pytket.circuit.OpType.H
  stim:
    name: H
    url: https://github.com/quantumlib/Stim/blob/main/doc/gates.md#H
  qasm:
    name: "stdgates.inc: h"
    url: https://openqasm.com/language/standard_library.html#h
---

The Hadamard gate creates and removes superposition by mapping $|0\rangle \mapsto |+\rangle$ and $|1\rangle \mapsto |-\rangle$.

$$
H = \frac{1}{\sqrt{2}}\begin{bmatrix}
  1 & 1 \\\\
  1 & -1
\end{bmatrix}
$$

### Properties

- Self-inverse and Hermitian: $H^\dagger = H$.
- Conjugates Pauli operators: $H X H = Z$ and $H Z H = X$.
- Real and symmetric.
