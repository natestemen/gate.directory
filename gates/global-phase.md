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
groups:
  - diagonal
  - number-preserving
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
    note: "GlobalPhase(φ) multiplies the state by e^{-iφ} (note the minus sign)."
  cirq:
    name: cirq.GlobalPhaseGate
    url: https://quantumai.google/reference/python/cirq/GlobalPhaseGate
  qsharp:
    note: Use R(PauliI, theta, q) from Std.Intrinsic; applies global phase exp(-i theta/2).
  pyquil:
    note: Quil has no global-phase gate; programs are defined up to global phase.
  braket:
    name: braket.circuits.gates.GPhase
    url: https://amazon-braket-sdk-python.readthedocs.io/en/latest/_apidoc/braket.circuits.gates.html#braket.circuits.gates.GPhase
    note: "Zero-qubit gate applying e^{i gamma} to the whole state"
  qibo:
    note: No gate class; apply exp(iφ)·I via qibo.gates.Unitary on any qubit
  pytket:
    name: pytket.circuit.OpType.Phase
    url: https://docs.quantinuum.com/tket/api-docs/optype.html#pytket.circuit.OpType.Phase
    note: "Phase(a) applies e^{i*pi*a}; a in half-turns"
  qasm:
    name: gphase
    url: https://openqasm.com/language/gates.html#gphase
---

A global phase gate applies $e^{i\phi}$ to the entire state. It has no observable effect on measurement probabilities or expectation values.
On a single qubit:

$$
\mathrm{Ph}(\phi) = \mathrm{e}^{i\phi} I =
\begin{bmatrix}
  \mathrm{e}^{i\phi} & 0 \\
  0                  & \mathrm{e}^{i\phi}
\end{bmatrix}
$$

### Properties

- Physically unobservable on a closed system; only relative phases matter.
- Commutes with all gates.

### Usage

- Often ignored in circuit optimization and compilation.
- Appears when simplifying products of rotations.
