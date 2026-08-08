---
layout: gate
title: Margolus
symbol: \mathrm{RCC}X
alias:
  - rccx
  - margolus
notations:
  - \mathrm{RCCX}
  - \widetilde{\mathrm{CC}X}
groups:
  - orthogonal
properties:
  - hermitian
arity: 3
description: Simplified Toffoli gate, equal to the Toffoli up to a $-1$ phase on $|101\rangle$, costing only three CNOTs.
citation:
  title: On the CNOT-cost of TOFFOLI gates
  year: 2008
  url: https://arxiv.org/abs/0803.2316
sdks:
  qiskit:
    name: qiskit.circuit.library.RCCXGate
    url: https://docs.quantum.ibm.com/api/qiskit/qiskit.circuit.library.RCCXGate
  pennylane:
    note: Not available natively.
  cirq:
    note: Not available natively.
---

The Margolus gate (Qiskit's "relative-phase" or "simplified" Toffoli, RCCX) acts exactly like the [Toffoli](/gates/toffoli) on every computational basis state except one, where it picks up a harmless-looking sign:

$$
\mathrm{RCC}X =
\begin{bmatrix}
  1 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\\\
  0 & 1 & 0 & 0 & 0 & 0 & 0 & 0 \\\\
  0 & 0 & 1 & 0 & 0 & 0 & 0 & 0 \\\\
  0 & 0 & 0 & 1 & 0 & 0 & 0 & 0 \\\\
  0 & 0 & 0 & 0 & 1 & 0 & 0 & 0 \\\\
  0 & 0 & 0 & 0 & 0 & -1 & 0 & 0 \\\\
  0 & 0 & 0 & 0 & 0 & 0 & 0 & 1 \\\\
  0 & 0 & 0 & 0 & 0 & 0 & 1 & 0
\end{bmatrix}
$$

That is, $\mathrm{RCC}X = \mathrm{CC}X$ except $|101\rangle \mapsto -|101\rangle$.

### Why it matters

An exact Toffoli requires six CNOTs; the Margolus gate needs only **three** (Shende and Markov proved both counts optimal). Whenever a Toffoli is used in a compute–uncompute pair — as ancilla logic almost always is — the stray phase cancels between the compute and uncompute halves, so the cheap version is safe and halves the entangling-gate cost.

### Decompositions

- Three CNOTs and four rotations, all real:
  $R_y(-\tfrac{\pi}{4})_t \\, \mathrm{CX}_{2,t} \\, R_y(-\tfrac{\pi}{4})_t \\, \mathrm{CX}_{1,t} \\, R_y(\tfrac{\pi}{4})_t \\, \mathrm{CX}_{2,t} \\, R_y(\tfrac{\pi}{4})_t$
  (read right to left; subscripts denote control, target).

### Properties

- Hermitian and self-inverse, like the Toffoli itself.
- Entirely real, so it lies in the orthogonal group.
