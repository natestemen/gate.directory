---
layout: gate
title: Pauli-X
symbol: X
alias:
  - x
notations:
  - X
  - \sigma_x
  - \sigma^x
  - \sigma_1
  - \mathrm{NOT}
groups:
  - pauli
  - clifford
  - orthogonal
  - permutation
arity: 1
description: Bit-flip gate that swaps $|0\rangle$ and $|1\rangle$.
sdks:
  qiskit:
    name: qiskit.circuit.library.XGate
    url: https://docs.quantum.ibm.com/api/qiskit/qiskit.circuit.library.XGate
  pennylane:
    name: pennylane.PauliX
    url: https://docs.pennylane.ai/en/stable/code/api/pennylane.PauliX.html
  cirq:
    name: cirq.X
    url: https://quantumai.google/reference/python/cirq/X
  qsharp:
    name: Std.Intrinsic.X
    url: https://learn.microsoft.com/en-us/qsharp/api/qsharp-lang/std.intrinsic/x
  pyquil:
    name: pyquil.gates.X
    url: https://pyquil-docs.rigetti.com/en/stable/apidocs/pyquil.gates.html#pyquil.gates.X
  braket:
    name: braket.circuits.gates.X
    url: https://amazon-braket-sdk-python.readthedocs.io/en/latest/_apidoc/braket.circuits.gates.html#braket.circuits.gates.X
  bqskit:
    name: bqskit.ir.gates.XGate
    url: https://bqskit.readthedocs.io/en/latest/source/autogen/bqskit.ir.gates.XGate.html
  qibo:
    name: qibo.gates.X
    url: https://qibo.science/qibo/stable/api-reference/qibo.html#qibo.gates.X
  pytket:
    name: pytket.circuit.OpType.X
    url: https://docs.quantinuum.com/tket/api-docs/optype.html#pytket.circuit.OpType.X
  stim:
    name: X
    url: https://github.com/quantumlib/Stim/blob/main/doc/gates.md#X
  qasm:
    name: "stdgates.inc: x"
    url: https://openqasm.com/language/standard_library.html#x
---

The Pauli-$X$ gate is the quantum analog of a classical NOT.

$$
X = \begin{bmatrix}
  0 & 1 \\\\
  1 & 0
\end{bmatrix}
$$

### Properties

- Hermitian and self-inverse: $X^\dagger = X$ and $X^2 = I$.
- Equivalent to a $R_x(\pi)$ up to global phase.
