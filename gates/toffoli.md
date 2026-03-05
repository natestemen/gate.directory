---
layout: gate
title: Toffoli
symbol: \mathrm{CCX}
alias:
  - toffoli
  - ccx
notations:
  - \mathrm{CCX}
  - \mathrm{CCNOT}
  - \mathrm{TOFF}
  - C^2X
  - \Lambda^2(X)
  - \text{Toffoli}
groups:
  - orthogonal
properties:
  - hermitian
controlled: cnot
arity: 3
description: Controlled-controlled-NOT gate that flips a target qubit when both controls are $|1\rangle$.
---

The Toffoli gate (Controlled-Controlled-NOT) flips a target qubit if and only if two control qubits are in the $|1\rangle$ state. It is universal for classical reversible computation and is widely used in quantum algorithms.

|             |                                                                                                                                                                                                                                                                                                                   |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Matrix      | $\begin{bmatrix}1 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\\\ 0 & 1 & 0 & 0 & 0 & 0 & 0 & 0 \\\\ 0 & 0 & 1 & 0 & 0 & 0 & 0 & 0 \\\\ 0 & 0 & 0 & 1 & 0 & 0 & 0 & 0 \\\\ 0 & 0 & 0 & 0 & 1 & 0 & 0 & 0 \\\\ 0 & 0 & 0 & 0 & 0 & 1 & 0 & 0 \\\\ 0 & 0 & 0 & 0 & 0 & 0 & 0 & 1 \\\\ 0 & 0 & 0 & 0 & 0 & 0 & 1 & 0 \end{bmatrix}$ |
| Arity       | {{ arity }}                                                                                                                                                                                                                                                                                                       |
| Group       | $\mathsf{O}(8)$                                                                                                                                                                                                                                                                                                   |

### Properties

- Classical universality: implements any reversible Boolean computation with NOT gates.
- Reversible: the Toffoli gate is its own inverse.
- Decomposable into single- and two-qubit gates (e.g., $H$, $T$, and CNOT).

### Usage

- Classical reversible computation and arithmetic circuits.
- Multi-controlled operations in quantum algorithms.