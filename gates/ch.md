---
layout: gate
title: Controlled-Hadamard
symbol: \mathrm{C}H
alias:
  - ch
notations:
  - \Lambda(H)
  - \text{controlled-}H
groups:
  - orthogonal
properties:
  - hermitian
controlled: hadamard
arity: 2
weyl: [1/4, 0, 0]
description: Applies a Hadamard to the target qubit when the control qubit is in the $|1\rangle$ state.
sdks:
  qiskit:
    name: qiskit.circuit.library.CHGate
    url: https://docs.quantum.ibm.com/api/qiskit/qiskit.circuit.library.CHGate
  pennylane:
    name: pennylane.CH
    url: https://docs.pennylane.ai/en/stable/code/api/pennylane.CH.html
  cirq:
    note: Not available natively. Construct with cirq.H.controlled().
  qsharp:
    note: "Apply via the Controlled functor, Controlled H([control], target)."
  pyquil:
    note: "Not available natively. Use the CONTROLLED modifier: H(target).controlled(control)."
  braket:
    note: No CH class; use h(target, control=q) control modifier
  bqskit:
    name: bqskit.ir.gates.CHGate
    url: https://bqskit.readthedocs.io/en/latest/source/autogen/bqskit.ir.gates.CHGate.html
  qibo:
    name: qibo.gates.CH
    url: https://qibo.science/qibo/stable/api-reference/qibo.html#qibo.gates.CH
  pytket:
    name: pytket.circuit.OpType.CH
    url: https://docs.quantinuum.com/tket/api-docs/optype.html#pytket.circuit.OpType.CH
  qasm:
    name: "stdgates.inc: ch"
    url: https://openqasm.com/language/standard_library.html#ch
---

The controlled-Hadamard gate performs a conditional change of basis, moving the target between the computational basis and the Hadamard basis only when the control is $|1\rangle$.

$$
\mathrm{C}H =
\begin{bmatrix}
  1 & 0 & 0 & 0 \\\\
  0 & 1 & 0 & 0 \\\\
  0 & 0 & \tfrac{1}{\sqrt{2}} & \tfrac{1}{\sqrt{2}} \\\\
  0 & 0 & \tfrac{1}{\sqrt{2}} & -\tfrac{1}{\sqrt{2}}
\end{bmatrix}
$$

### Properties

- Hermitian and self-inverse, like the [Hadamard](/gates/hadamard) itself.
- Real, so it lies in the orthogonal group.
- Although $H$ is Clifford, $\mathrm{C}H$ is *not*. Adding a control to a Clifford gate does not preserve Clifford-ness in general (compare [CNOT](/gates/cnot), which stays Clifford, versus $\mathrm{C}H$ and [$\mathrm{C}S$](/gates/cs), which do not).

### Decompositions

- A single entangling gate suffices:
  $\mathrm{C}H = (I \otimes R_y(\pi/4)) \\, \mathrm{C}Z \\, (I \otimes R_y(-\pi/4))$,
  which works because $R_y(\pi/4) \\, Z \\, R_y(-\pi/4) = H$.
