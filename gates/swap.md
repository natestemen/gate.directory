---
layout: gate
title: SWAP Gate
symbol: SWAP
groups:
  - clifford
arity: 2
---

The SWAP gate exchanges the states of two qubits. It is commonly used in quantum circuits to reorder qubits or facilitate interactions between qubits that are not directly connected. {.gate-description}

|             |                                                                                                       |
| ----------- | ----------------------------------------------------------------------------------------------------- |
| Notation(s) | $\text{SWAP}$                                                                                         |
| Matrix      | $\begin{bmatrix}1 & 0 & 0 & 0 \\\\ 0 & 0 & 1 & 0 \\\\ 0 & 1 & 0 & 0 \\\\ 0 & 0 & 0 & 1 \end{bmatrix}$ |
| Arity       | {{ arity }}                                                                                           |
| Group       | $\mathsf{U}(4)$                                                                                       |

### Properties

- **Reversible**: The SWAP gate is its own inverse, i.e., $\mathrm{SWAP} \cdot \mathrm{SWAP} = I$. Or put differently, the gate is <em>self-adjoint</em>.
- **Decomposition**: The SWAP gate can be decomposed into three CNOT gates: $\mathrm{SWAP} = \mathrm{CNOT}_{12} \cdot \mathrm{CNOT}_{21} \cdot \mathrm{CNOT}_{12}$

### Applications

- Reordering qubits in a circuit.
- Facilitating interactions between qubits in hardware with limited connectivity.
