---
layout: gate
title: Controlled $y$ Rotation
symbol: \mathrm{C}R_y
alias:
  - cry
notations:
  - \mathrm{CR}_y(\theta)
  - \Lambda(R_y(\theta))
groups:
  - orthogonal
controlled: ry
arity: 2
parameters: 1
description: Rotates the target about the $y$ axis by $\theta$ when the control qubit is in the $|1\rangle$ state.
sdks:
  qiskit:
    name: qiskit.circuit.library.CRYGate
    url: https://docs.quantum.ibm.com/api/qiskit/qiskit.circuit.library.CRYGate
  pennylane:
    name: pennylane.CRY
    url: https://docs.pennylane.ai/en/stable/code/api/pennylane.CRY.html
  cirq:
    note: Not available natively. Construct with cirq.ry(θ).controlled().
  qsharp:
    note: "Apply via the Controlled functor, Controlled Ry([control], (theta, target))."
  pyquil:
    note: Not available natively. Use RY(theta, target).controlled(control).
  braket:
    note: No CRy class; use ry(target, angle, control=q)
  bqskit:
    name: bqskit.ir.gates.CRYGate
    url: https://bqskit.readthedocs.io/en/latest/source/autogen/bqskit.ir.gates.CRYGate.html
  qibo:
    name: qibo.gates.CRY
    url: https://qibo.science/qibo/stable/api-reference/qibo.html#qibo.gates.CRY
  pytket:
    name: pytket.circuit.OpType.CRy
    url: https://docs.quantinuum.com/tket/api-docs/optype.html#pytket.circuit.OpType.CRy
    note: "Angle in half-turns: CRy(theta/pi)"
  qasm:
    name: "stdgates.inc: cry"
    url: https://openqasm.com/language/standard_library.html#cry
---

The controlled-$R_y$ gate applies the single-qubit rotation [$R_y(\theta)$](/gates/ry) to the target, conditioned on the control.

$$
\mathrm{C}R_y(\theta) =
\begin{bmatrix}
  1 & 0 & 0 & 0 \\\\
  0 & 1 & 0 & 0 \\\\
  0 & 0 & \cos\frac{\theta}{2} & -\sin\frac{\theta}{2} \\\\
  0 & 0 & \sin\frac{\theta}{2} & \cos\frac{\theta}{2}
\end{bmatrix}
$$

### Special values

| $\theta$ | Gate |
| --- | --- |
| $0$ | [Identity](/gates/identity) |
| $\pi$ | [Controlled-$Y$](/gates/cy), up to a phase of $-i$ on the control's $|1\rangle$ subspace |

### Properties

- Real, so it lies in the orthogonal group — the only one of the three controlled rotations with this property.
- Inverse: $\mathrm{C}R_y(\theta)^\dagger = \mathrm{C}R_y(-\theta)$.
- Related to [$\mathrm{C}R_x$](/gates/crx) by conjugating the target with [$S$](/gates/s): $\mathrm{C}R_y(\theta) = (I \otimes S) \\, \mathrm{C}R_x(\theta) \\, (I \otimes S^\dagger)$.

### Decompositions

- Two CNOTs and two rotations: $\mathrm{C}R_y(\theta) = (I \otimes R_y(\theta/2)) \\, \mathrm{CNOT} \\, (I \otimes R_y(-\theta/2)) \\, \mathrm{CNOT}$.

### Usage

- Ubiquitous in state preparation: cascades of $\mathrm{C}R_y$ gates load arbitrary real amplitudes, and it is the standard entangler in many variational ansätze.
