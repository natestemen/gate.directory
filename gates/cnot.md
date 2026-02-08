---
layout: gate
title: Controlled Not
symbol: \mathrm{C}X
alias:
  - cx
groups:
  - clifford
arity: 2
controlled: pauli-x
description: The $\mathrm{C}X$ gate generates entanglement between two qubits.

---

|             |                                                                                                       |
| ----------- | ----------------------------------------------------------------------------------------------------- |
| Notation(s) | $\mathrm{C}X$, $\mathrm{CNOT}$, $\mathrm{CNOT}_{ij}$                                                  |
| Matrix      | $\begin{bmatrix}1 & 0 & 0 & 0 \\\\ 0 & 1 & 0 & 0 \\\\ 0 & 0 & 0 & 1 \\\\ 0 & 0 & 1 & 0 \end{bmatrix}$ |
| Arity       | {{ arity }}                                                                                           |
| Group       | $\mathsf{U}(4)$                                                                                       |

### Usage

This gate is commonly used in algorithms like the Quantum Fourier Transform.

## References

- Q#: [`Std.Intrinsic.CNOT`](https://learn.microsoft.com/en-us/qsharp/api/qsharp-lang/std.intrinsic/cnot)
- PyQuil: [`pyquil.gates.CNOT`](https://pyquil-docs.rigetti.com/en/stable/apidocs/pyquil.gates.html#pyquil.gates.CNOT)