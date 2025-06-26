---
layout: gate
title: Controlled Not Gate
symbol: \mathrm{C}X
groups:
  - clifford
arity: 2
controlled: pauli-x
description: The {{ symbol }} gate generates entanglement between two qubits.

---

The Hadamard gate is one of the fundamental quantum gates, enabling qubits to enter a state of superposition. {.gate-description}

|             |                                                                                                       |
| ----------- | ----------------------------------------------------------------------------------------------------- |
| Notation(s) | $\mathrm{C}X$, $\mathrm{CNOT}$, $\mathrm{CNOT}_{ij}$                                                  |
| Matrix      | $\begin{bmatrix}1 & 0 & 0 & 0 \\\\ 0 & 1 & 0 & 0 \\\\ 0 & 0 & 0 & 1 \\\\ 0 & 0 & 1 & 0 \end{bmatrix}$ |
| Arity       | {{ arity }}                                                                                           |
| Group       | $\mathsf{U}(4)$                                                                                       |

### Usage

This gate is commonly used in algorithms like the Quantum Fourier Transform.
