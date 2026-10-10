---
layout: gate
title: Controlled $z$ Rotation
symbol: \mathrm{C}R_z
alias:
  - crz
notations:
  - \mathrm{CR}_z(\theta)
  - \Lambda(R_z(\theta))
groups:
  - diagonal
  - number-preserving
controlled: rz
arity: 2
parameters: 1
weyl:
  coords: [0, 0, theta/4]
quirk:
  spin: {theta: 4}
  cols:
    - ["•", {id: Rzft, param: theta}]
params:
  theta: { label: \theta, default: 1, range: [0, 4] }
matrix:
  - [1, 0, 0, 0]
  - [0, 1, 0, 0]
  - [0, 0, "exp(-i theta/2)", 0]
  - [0, 0, 0, "exp(i theta/2)"]
description: Rotates the target about the $z$ axis by $\theta$ when the control qubit is in the $|1\rangle$ state.
sdks:
  qiskit:
    name: qiskit.circuit.library.CRZGate
    url: https://docs.quantum.ibm.com/api/qiskit/qiskit.circuit.library.CRZGate
  pennylane:
    name: pennylane.CRZ
    url: https://docs.pennylane.ai/en/stable/code/api/pennylane.CRZ.html
  cirq:
    note: Not available natively. Construct with cirq.rz(θ).controlled().
  qsharp:
    note: "Apply via the Controlled functor, Controlled Rz([control], (theta, target))."
  pyquil:
    note: Not available natively. Use RZ(theta, target).controlled(control).
  braket:
    note: No CRz class; use rz(target, angle, control=q)
  bqskit:
    name: bqskit.ir.gates.CRZGate
    url: https://bqskit.readthedocs.io/en/latest/source/autogen/bqskit.ir.gates.CRZGate.html
  qibo:
    name: qibo.gates.CRZ
    url: https://qibo.science/qibo/stable/api-reference/qibo.html#qibo.gates.CRZ
  pytket:
    name: pytket.circuit.OpType.CRz
    url: https://docs.quantinuum.com/tket/api-docs/optype.html#pytket.circuit.OpType.CRz
    note: "Angle in half-turns: CRz(theta/pi)"
  qasm:
    name: "stdgates.inc: crz"
    url: https://openqasm.com/language/standard_library.html#crz
---

The controlled-$R_z$ gate applies the single-qubit rotation [$R_z(\theta)$](/gates/rz) to the target, conditioned on the control.

$$
\mathrm{C}R_z(\theta) =
\begin{bmatrix}
  1 & 0 & 0 & 0 \\
  0 & 1 & 0 & 0 \\
  0 & 0 & \mathrm{e}^{-i\theta/2} & 0 \\
  0 & 0 & 0 & \mathrm{e}^{i\theta/2}
\end{bmatrix}
$$

### Properties

- Diagonal, so it commutes with all other diagonal gates ($Z$, $S$, $T$, $\mathrm{C}Z$, ...).
- **Not the same as [controlled phase](/gates/controlled-phase)**, a frequent source of confusion. The two differ by a phase on the control:
  $$\mathrm{CP}(\theta) = (P(\theta/2) \otimes I) \, \mathrm{C}R_z(\theta)$$
  In particular $\mathrm{C}R_z(\pi) \neq \mathrm{C}Z$; it equals $\mathrm{C}Z$ only up to a $-i$ phase on the control's $|1\rangle$ subspace.
- Inverse: $\mathrm{C}R_z(\theta)^\dagger = \mathrm{C}R_z(-\theta)$.

### Decompositions

- Two CNOTs and two rotations: $\mathrm{C}R_z(\theta) = (I \otimes R_z(\theta/2)) \, \mathrm{CNOT} \, (I \otimes R_z(-\theta/2)) \, \mathrm{CNOT}$.

### Usage

- The entangling block of many variational ansätze, and the conditional-evolution primitive in quantum simulation circuits.
