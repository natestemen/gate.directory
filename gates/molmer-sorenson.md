---
layout: gate
title: Mølmer-Sørensen
symbol: MS
arity: n
dimension: 2
description: A native two qubit operation for ion traps.
citation:
  year: 1999
  url: https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.82.1835
---

The Mølmer-Sørensen (MS) gate is defined to act on $n$ qubits, but in the case of $n = 2$ reduces to [$R_{xx}$](/gates/rxx).
In full generality the MS gate (sometimes referred to as global MS or GMS) takes $n(n-1)/2$ parameters $\chi_{ij}$.

$$
\mathrm{MS}(\chi_{ij}) = \exp\left(-i \sum_{i=1}^n\sum_{j=i+1}^n X_i\otimes X_j \\, \chi_{ij} / 2\right)
$$

Where $X_i$ denotes a [Pauli X](/gates/pauli-x) on qubit $i$.


## References

- [`qiskit.circuit.library.MSGate`](https://quantum.cloud.ibm.com/docs/en/api/qiskit/qiskit.circuit.library.MSGate)
- [Use of global interactions in efficient quantum circuit constructions](https://arxiv.org/abs/1707.06356)