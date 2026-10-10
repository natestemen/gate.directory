---
layout: gate
title: fSWAP
symbol: \mathrm{fSWAP}
alias:
  - fswap
  - fermionic-swap
groups:
  - clifford
  - orthogonal
  - matchgate
  - number-preserving
properties:
  - hermitian
arity: 2
weyl: [1/4, 1/4, 0]
quirk:
  cols: [["Swap", "Swap"], ["•", "Z"]]
description: Swaps $|01\rangle$ and $|10\rangle$ while applying a $-1$ phase to $|11\rangle$.
sdks:
  qiskit:
    note: Not available natively. Compose SwapGate with CZGate.
  pennylane:
    name: pennylane.FermionicSWAP
    url: https://docs.pennylane.ai/en/stable/code/api/pennylane.FermionicSWAP.html
    note: Takes a continuous parameter φ; the standard fSWAP corresponds to φ=π.
  cirq:
    note: Not available in core Cirq; openfermion.circuits.FSWAP provides it.
  braket:
    note: No fSwap class; compose Swap and CZ
  qibo:
    name: qibo.gates.FSWAP
    url: https://qibo.science/qibo/stable/api-reference/qibo.html#qibo.gates.FSWAP
  pytket:
    note: Compose SWAP and CZ (they commute)
  stim:
    name: CZSWAP
    url: https://github.com/quantumlib/Stim/blob/main/doc/gates.md#CZSWAP
    note: CZSWAP (alias SWAPCZ) is exactly the fSWAP gate.
---

The fermionic SWAP (fSWAP) gate behaves like SWAP on single-excitation states, but adds a phase of $-1$ to the $|11\rangle$ state.
The name comes from the fact that exchanging two fermions introduces a $-1$ phase as fermionic wavefunctions are antisymmetric under particle exchange.

$$
\mathrm{fSWAP} =
\begin{bmatrix}
  1 & 0 & 0 &  0 \\
  0 & 0 & 1 &  0 \\
  0 & 1 & 0 &  0 \\
  0 & 0 & 0 & -1
\end{bmatrix}
$$

### Properties

- Self-inverse: $\mathrm{fSWAP}^2 = I$.
- Equals SWAP on the $\{|01\rangle, |10\rangle\}$ subspace.
