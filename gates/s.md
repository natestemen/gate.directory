---
layout: gate
title: Phase
symbol: S
notations:
  - S
  - \sqrt{Z}
  - Z^{1/2}
  - P(\pi/2)
  - K
arity: 1
groups:
  - clifford
  - diagonal
  - number-preserving
description: $\pi/2$ phase gate, equal to $\sqrt{Z}$.
sdks:
  qiskit:
    name: qiskit.circuit.library.SGate
    url: https://docs.quantum.ibm.com/api/qiskit/qiskit.circuit.library.SGate
  pennylane:
    name: pennylane.S
    url: https://docs.pennylane.ai/en/stable/code/api/pennylane.S.html
  cirq:
    name: cirq.S
    url: https://quantumai.google/reference/python/cirq/S
  qsharp:
    name: Std.Intrinsic.S
    url: https://learn.microsoft.com/en-us/qsharp/api/qsharp-lang/std.intrinsic/s
  pyquil:
    name: pyquil.gates.S
    url: https://pyquil-docs.rigetti.com/en/stable/apidocs/pyquil.gates.html#pyquil.gates.S
  braket:
    name: braket.circuits.gates.S
    url: https://amazon-braket-sdk-python.readthedocs.io/en/latest/_apidoc/braket.circuits.gates.html#braket.circuits.gates.S
  bqskit:
    name: bqskit.ir.gates.SGate
    url: https://bqskit.readthedocs.io/en/latest/source/autogen/bqskit.ir.gates.SGate.html
  qibo:
    name: qibo.gates.S
    url: https://qibo.science/qibo/stable/api-reference/qibo.html#qibo.gates.S
  pytket:
    name: pytket.circuit.OpType.S
    url: https://docs.quantinuum.com/tket/api-docs/optype.html#pytket.circuit.OpType.S
  stim:
    name: S
    url: https://github.com/quantumlib/Stim/blob/main/doc/gates.md#S
    note: Stim also accepts the alternate name SQRT_Z.
  qasm:
    name: "stdgates.inc: s"
    url: https://openqasm.com/language/standard_library.html#s
---

The $S$ gate applies a relative phase of $i$ to the $|1\rangle$ component.

$$S = \begin{bmatrix}1 & 0 \\\\ 0 & i\end{bmatrix} = \sqrt{Z}$$

### Properties

- Clifford and diagonal.
- $S^2 = Z$ and $S^4 = I$.
- Conjugates $X$ into $Y$: $S X S^\dagger = Y$.

### Usage

- Phase corrections and basis changes in Clifford circuits.
- Building block for $T$ and controlled-phase operations.