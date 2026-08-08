---
layout: gate
title: Controlled $x$ Rotation
symbol: \mathrm{C}R_x
alias:
  - crx
notations:
  - \mathrm{CR}_x(\theta)
  - \Lambda(R_x(\theta))
controlled: rx
arity: 2
parameters: 1
description: Rotates the target about the $x$ axis by $\theta$ when the control qubit is in the $|1\rangle$ state.
sdks:
  qiskit:
    name: qiskit.circuit.library.CRXGate
    url: https://docs.quantum.ibm.com/api/qiskit/qiskit.circuit.library.CRXGate
  pennylane:
    name: pennylane.CRX
    url: https://docs.pennylane.ai/en/stable/code/api/pennylane.CRX.html
  cirq:
    note: Not available natively. Construct with cirq.rx(theta).controlled().
---

The controlled-$R_x$ gate applies the single-qubit rotation [$R_x(\theta)$](/gates/rx) to the target, conditioned on the control.

$$
\mathrm{C}R_x(\theta) =
\begin{bmatrix}
  1 & 0 & 0 & 0 \\\\
  0 & 1 & 0 & 0 \\\\
  0 & 0 & \cos\frac{\theta}{2} & -i\sin\frac{\theta}{2} \\\\
  0 & 0 & -i\sin\frac{\theta}{2} & \cos\frac{\theta}{2}
\end{bmatrix}
$$

### Special values

| $\theta$ | Gate |
| --- | --- |
| $0$ | [Identity](/gates/identity) |
| $\pi$ | [CNOT](/gates/cnot), up to a phase of $-i$ on the control's $|1\rangle$ subspace |
| $4\pi$ | Identity (the period is $4\pi$, not $2\pi$) |

### Properties

- Inverse: $\mathrm{C}R_x(\theta)^\dagger = \mathrm{C}R_x(-\theta)$.
- Related to [$\mathrm{C}R_z$](/gates/crz) by a basis change on the target: $\mathrm{C}R_x(\theta) = (I \otimes H) \\, \mathrm{C}R_z(\theta) \\, (I \otimes H)$.
- Note the $4\pi$ periodicity: $\mathrm{C}R_x(2\pi) = Z \otimes I$, not the identity, since $R_x(2\pi) = -I$ and the sign is only applied when the control is set — where it acts as a $Z$ on the *control*.

### Usage

- A standard entangling block in hardware-efficient variational ansätze.
