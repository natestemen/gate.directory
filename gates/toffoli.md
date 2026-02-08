---
layout: gate
title: Toffoli
symbol: \mathrm{CCX}
alias:
  - toffoli
  - ccx
groups:
properties:
  - hermitian
arity: 3
---

The Toffoli gate, also known as the Controlled-Controlled-NOT ($\mathrm{CCX}$) gate, flips the state of a target qubit if and only if the two control qubits are in the $|1\rangle$ state. It is a universal gate for classical reversible computation and plays an important role in quantum algorithms. {.gate-description}

|             |                                                                                                                                                                                                                                                                                                                   |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Notation(s) | $\mathrm{CCX}$, $\mathrm{CCNOT}$, $\mathrm{TOFF}$                                                                                                                                                                                                                                                                 |
| Matrix      | $\begin{bmatrix}1 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\\\ 0 & 1 & 0 & 0 & 0 & 0 & 0 & 0 \\\\ 0 & 0 & 1 & 0 & 0 & 0 & 0 & 0 \\\\ 0 & 0 & 0 & 1 & 0 & 0 & 0 & 0 \\\\ 0 & 0 & 0 & 0 & 1 & 0 & 0 & 0 \\\\ 0 & 0 & 0 & 0 & 0 & 1 & 0 & 0 \\\\ 0 & 0 & 0 & 0 & 0 & 0 & 0 & 1 \\\\ 0 & 0 & 0 & 0 & 0 & 0 & 1 & 0 \end{bmatrix}$ |
| Arity       | {{ arity }}                                                                                                                                                                                                                                                                                                       |
| Group       | $\mathsf{U}(8)$                                                                                                                                                                                                                                                                                                   |

### Properties

- **Classical Universality**: The Toffoli gate can implement any classical reversible computation when combined with single-qubit NOT gates.
- **Reversibility**: The Toffoli gate is its own inverse, i.e., $\text{CCX} \cdot \text{CCX} = I$.
- **Decomposition**: The Toffoli gate can be decomposed into single-qubit and two-qubit gates (e.g., Hadamard, T, and CNOT gates) on a universal quantum gate set.

### Applications

- Classical reversible computation.
- Controlled operations involving multiple control qubits.
