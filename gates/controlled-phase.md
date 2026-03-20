---
layout: gate
title: Controlled Phase
symbol: \mathrm{C}P(\phi)
alias:
  - cphase
  - cp
notations:
  - \mathrm{CPhase}(\phi)
  - \Lambda(\mathrm{e}^{i\phi})
controlled: phase
groups:
  - diagonal
  - unitary
parameters: 1
arity: 2
description: Applies a phase $\mathrm{e}^{i\phi}$ to $|11\rangle$ and leaves other basis states unchanged.
sdks:
  qiskit:
    name: qiskit.circuit.library.CPhaseGate
    url: https://docs.quantum.ibm.com/api/qiskit/qiskit.circuit.library.CPhaseGate
  pennylane:
    name: pennylane.ControlledPhaseShift
    url: https://docs.pennylane.ai/en/stable/code/api/pennylane.ControlledPhaseShift.html
  cirq:
    name: cirq.CZPowGate
    url: https://quantumai.google/reference/python/cirq/CZPowGate
    note: Use cirq.CZPowGate(exponent=φ/π). The helper cirq.cphase(rads) also works.
---

The controlled-phase gate is a two-qubit diagonal gate that adds a phase to the $|11\rangle$ component.

$$
\mathrm{C}P(\phi) =
\begin{bmatrix}
  1 & 0 & 0 & 0 \\\\
  0 & 1 & 0 & 0 \\\\
  0 & 0 & 1 & 0 \\\\
  0 & 0 & 0 & \mathrm{e}^{i\phi}
\end{bmatrix}
$$

### Properties

- Diagonal and symmetric under qubit exchange.
- Clifford when $\phi$ is a multiple of $\pi/2$.
- Related to controlled-$Z$ at $\phi = \pi$.

### Usage

- Phase-kickback in algorithms and controlled phase rotations.
- Building block for QFT and diagonal unitaries.
