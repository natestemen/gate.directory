---
layout: gate
title: Global Phase
symbol: \mathrm{Ph}
alias:
  - gphase
  - ph
notations:
  - \mathrm{e}^{i\phi}
  - \mathrm{e}^{i\phi} I
arity: n
parameters: 1
description: Multiplies the entire quantum state by an overall phase factor.
sdks:
  qiskit:
    name: qiskit.circuit.library.GlobalPhaseGate
    url: https://docs.quantum.ibm.com/api/qiskit/qiskit.circuit.library.GlobalPhaseGate
  pennylane:
    name: pennylane.GlobalPhase
    url: https://docs.pennylane.ai/en/stable/code/api/pennylane.GlobalPhase.html
  cirq:
    name: cirq.GlobalPhaseGate
    url: https://quantumai.google/reference/python/cirq/GlobalPhaseGate
---

A global phase gate applies $e^{i\phi}$ to the entire state. It has no observable effect on measurement probabilities or expectation values.
On a single qubit:

$$
\mathrm{Ph}(\phi) = \mathrm{e}^{i\phi} I =
\begin{bmatrix}
  \mathrm{e}^{i\phi} & 0 \\\\
  0                  & \mathrm{e}^{i\phi}
\end{bmatrix}
$$

### Properties

- Physically unobservable on a closed system; only relative phases matter.
- Commutes with all gates.

### Usage

- Often ignored in circuit optimization and compilation.
- Appears when simplifying products of rotations.
