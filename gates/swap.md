---
layout: gate
title: SWAP
symbol: \mathrm{SWAP}
notations:
  - \mathrm{SWAP}
  - \mathrm{SWAP}_{ij}
groups:
  - clifford
arity: 2
description: Exchanges the quantum states of two qubits.
---

The SWAP gate exchanges the states of two qubits and is commonly used to reorder qubits or mediate interactions between distant qubits.

|             |                                                                                                       |
| ----------- | ----------------------------------------------------------------------------------------------------- |
| Matrix      | $\begin{bmatrix}1 & 0 & 0 & 0 \\\\ 0 & 0 & 1 & 0 \\\\ 0 & 1 & 0 & 0 \\\\ 0 & 0 & 0 & 1 \end{bmatrix}$ |
| Arity       | {{ arity }}                                                                                           |
| Group       | $\mathsf{U}(4)$                                                                                       |

### Properties

- Reversible: the SWAP gate is its own inverse.
- Decomposition:
  $\mathrm{SWAP} = \mathrm{CNOT}\_{12} \cdot \mathrm{CNOT}\_{21} \cdot \mathrm{CNOT}\_{12}$.

### Usage

- Reordering qubits in a circuit.
- Facilitating interactions in hardware with limited connectivity.