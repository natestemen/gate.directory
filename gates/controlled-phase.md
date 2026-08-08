---
layout: gate
title: Controlled Phase
symbol: \mathrm{C}P
alias:
  - cphase
  - cp
notations:
  - \mathrm{CPhase}(\phi)
  - \Lambda(\mathrm{e}^{i\phi})
controlled: phase
groups:
  - diagonal
  - number-preserving
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
    note: CPhase(φ) = cirq.CZPowGate(exponent=φ/π); helper cirq.cphase(φ).
  qsharp:
    note: "Apply via the Controlled functor, Controlled R1([control], (phi, target))."
  pyquil:
    name: pyquil.gates.CPHASE
    url: https://pyquil-docs.rigetti.com/en/stable/apidocs/pyquil.gates.html#pyquil.gates.CPHASE
  braket:
    name: braket.circuits.gates.CPhaseShift
    url: https://amazon-braket-sdk-python.readthedocs.io/en/latest/_apidoc/braket.circuits.gates.html#braket.circuits.gates.CPhaseShift
    note: CPhaseShift00/01/10 variants also available
  bqskit:
    name: bqskit.ir.gates.CPGate
    url: https://bqskit.readthedocs.io/en/latest/source/autogen/bqskit.ir.gates.CPGate.html
  qibo:
    name: qibo.gates.CU1
    url: https://qibo.science/qibo/stable/api-reference/qibo.html#qibo.gates.CU1
    note: "Named CU1 (a.k.a. CPhase); applies e^{iθ} to |11⟩"
  pytket:
    name: pytket.circuit.OpType.CU1
    url: https://docs.quantinuum.com/tket/api-docs/optype.html#pytket.circuit.OpType.CU1
    note: CP(phi) = CU1(phi/pi); angle in half-turns
  qasm:
    name: "stdgates.inc: cp"
    url: https://openqasm.com/language/standard_library.html#cp
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
