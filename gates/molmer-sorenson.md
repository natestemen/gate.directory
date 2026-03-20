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
  year: 1999
  url: https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.82.1835
sdks:
  qiskit:
    name: qiskit.circuit.library.MSGate
    url: https://docs.quantum.ibm.com/api/qiskit/qiskit.circuit.library.MSGate
  pennylane:
    note: Not available in core PennyLane. Available as pennylane_ionq.MS in the IonQ plugin.
  cirq:
    name: cirq.MSGate
    url: https://quantumai.google/reference/python/cirq/MSGate
---

The Mølmer-Sørensen (MS) gate acts on $n$ qubits and, for $n = 2$, reduces to an $XX$ rotation. In full generality the MS gate (sometimes referred to as global MS or GMS) takes $n(n-1)/2$ parameters $\chi_{ij}$.

$$
\mathrm{MS}(\chi_{ij}) = \exp\left(-i \sum_{i=1}^n\sum_{j=i+1}^n X_i\otimes X_j \, \chi_{ij} / 2\right)
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
