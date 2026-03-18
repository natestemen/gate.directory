---
layout: gate
title: Controlled Not
symbol: \mathrm{C}X
alias:
  - cx
notations:
  - \mathrm{C}X
  - \mathrm{CNOT}
  - \mathrm{CNOT}_{ij}
  - \text{controlled-}X
  - \Lambda(X)
  - \mathrm{XOR}[i, j]
groups:
  - clifford
arity: 2
controlled: pauli-x
description: Flips the target qubit when the control qubit is in the $|1\rangle$ state.
---

The controlled-NOT (CNOT) gate is a two-qubit entangling gate that conditionally applies $X$ to the target.

$$
\mathrm{C}X =
\begin{bmatrix}
  1 & 0 & 0 & 0 \\\\
  0 & 1 & 0 & 0 \\\\
  0 & 0 & 0 & 1 \\\\
  0 & 0 & 1 & 0
\end{bmatrix}
$$

### Properties

- Self-inverse and Hermitian: $\mathrm{CNOT}^\dagger = \mathrm{CNOT}$.
- Equivalent to a controlled-$Z$ up to Hadamards on the target: $\mathrm{CNOT} = (I \otimes H)\,\mathrm{CZ}\,(I \otimes H)$.

## References

- Q#: [`Std.Intrinsic.CNOT`](https://learn.microsoft.com/en-us/qsharp/api/qsharp-lang/std.intrinsic/cnot)
- PyQuil: [`pyquil.gates.CNOT`](https://pyquil-docs.rigetti.com/en/stable/apidocs/pyquil.gates.html#pyquil.gates.CNOT)