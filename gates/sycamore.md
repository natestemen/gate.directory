---
layout: gate
title: Sycamore
symbol: \mathrm{SYC}
alias:
  - sycamore
  - syc
notations:
  - \mathrm{SYC}
  - \mathrm{fSim}(\pi/2, \pi/6)
groups:
  - number-preserving
arity: 2
description: Google's native two-qubit gate, the fSim gate at $\theta = \pi/2$, $\phi = \pi/6$.
citation:
  title: Quantum supremacy using a programmable superconducting processor
  year: 2019
  url: https://doi.org/10.1038/s41586-019-1666-5
sdks:
  qiskit:
    note: Not available natively.
  pennylane:
    note: Not available natively.
  cirq:
    name: cirq_google.SYC
    url: https://quantumai.google/reference/python/cirq_google/SYC
---

The Sycamore gate is the native entangling gate of Google's Sycamore processor, used in the 2019 quantum-supremacy experiment. It is the [FSim gate](/gates/fsim) at the specific angles $\theta = \pi/2$, $\phi = \pi/6$.

$$
\mathrm{SYC} =
\begin{bmatrix}
  1 & 0 & 0 & 0 \\\\
  0 & 0 & -i & 0 \\\\
  0 & -i & 0 & 0 \\\\
  0 & 0 & 0 & \mathrm{e}^{-i\pi/6}
\end{bmatrix}
$$

### Properties

- Excitation-preserving: on the single-excitation subspace it acts as a full iSWAP-style exchange (with phase $-i$ rather than [iSWAP](/gates/iswap)'s $+i$), and it adds a $-\pi/6$ phase on $|11\rangle$ from the dispersive interaction.
- The $|11\rangle$ phase makes it *not* Clifford, unlike iSWAP.
- A [CZ](/gates/cz) — and hence a CNOT, up to Hadamards — compiles into two Sycamore gates plus single-qubit rotations; a [SWAP](/gates/swap) takes three.

### Usage

- Chosen for hardware reasons: both the exchange ($\theta$) and dispersive ($\phi$) couplings are turned on simultaneously, giving the fastest high-fidelity gate the hardware supports rather than the cleanest algebraic form.
