---
layout: gate
title: Mølmer-Sørensen
symbol: MS
notations:
  - \mathrm{MS}
  - \mathrm{MS}(\chi_{ij})
  - \mathrm{GMS}
arity: n
dimension: 2
parameters: n(n-1)/2
description: A native entangling interaction in ion-trap systems based on collective spin-motion coupling.
citation:
  title: Multiparticle Entanglement of Hot Trapped Ions
  year: 1999
  url: https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.82.1835
sdks:
  qiskit:
    name: qiskit.circuit.library.MSGate
    url: https://docs.quantum.ibm.com/api/qiskit/qiskit.circuit.library.MSGate
  pennylane:
    note: Not in core PennyLane. Available through the PennyLane-IonQ plugin as MS.
  cirq:
    name: cirq.MSGate
    url: https://quantumai.google/reference/python/cirq/MSGate
    note: Two-qubit MS via cirq.ms(rads); cirq_ionq.MSGate is the IonQ native version.
  braket:
    name: braket.circuits.gates.MS
    url: https://amazon-braket-sdk-python.readthedocs.io/en/latest/_apidoc/braket.circuits.gates.html#braket.circuits.gates.MS
    note: IonQ 2-qubit phased MS(phi0, phi1, theta); theta defaults to pi/2
  bqskit:
    name: bqskit.ir.gates.XXGate
    url: https://bqskit.readthedocs.io/en/latest/source/autogen/bqskit.ir.gates.XXGate.html
    note: Fixed 2-qubit MS gate exp(-i pi XX/4); no n-qubit MS gate
  qibo:
    name: qibo.gates.MS
    url: https://qibo.science/qibo/stable/api-reference/qibo.html#qibo.gates.MS
    note: Two-qubit MS(q0, q1, phi0, phi1, theta); theta defaults to π/2
  pytket:
    name: pytket.circuit.OpType.AAMS
    url: https://docs.quantinuum.com/tket/api-docs/optype.html#pytket.circuit.OpType.AAMS
    note: 2-qubit phased MS, angles in half-turns; plain MS(pi/2) = XXPhase(0.5)
  stim:
    name: SQRT_XX
    url: https://github.com/quantumlib/Stim/blob/main/doc/gates.md#SQRT_XX
    note: "Only the Clifford point: the 2-qubit MS at theta = pi/2 equals SQRT_XX up to phase."
---

The Mølmer-Sørensen (MS) gate acts on $n$ qubits and, for $n = 2$, reduces to an $XX$ rotation. In full generality the MS gate (sometimes referred to as global MS or GMS) takes $n(n-1)/2$ parameters $\chi_{ij}$.

$$
\mathrm{MS}(\chi_{ij}) = \exp\left(-i \sum_{i=1}^n\sum_{j=i+1}^n X_i\otimes X_j \\, \chi_{ij} / 2\right)
$$

Where $X_i$ denotes a [Pauli X](/gates/pauli-x) on qubit $i$.

### Properties

- For two qubits, $\mathrm{MS}(\chi) = R_{xx}(\chi)$.
- Entangling for nontrivial angles; $\chi = \pi/2$ yields a maximally entangling gate.
- Symmetric under qubit exchange in the two-qubit case.

### Usage

- Native two-qubit entangling gate in trapped-ion hardware.
- Building blocks for GHZ states, parity checks, and variational layers.

## References

- [Use of global interactions in efficient quantum circuit constructions](https://arxiv.org/abs/1707.06356)
