---
layout: gate
title: Controlled Shift (SUM)
symbol: \mathrm{SUM}_d
alias:
  - sum
  - cadd
  - qudit-cx
  - controlled-shift
notations:
  - \mathrm{C}X_d
  - \mathrm{ADD}_d
  - \mathrm{SUM}_d
groups:
  - orthogonal
  - permutation
arity: 2
dimension: d
controlled: shift
description: Qudit-controlled shift that adds the control value to the target modulo $d$.
sdks:
  cirq:
    note: Not available natively. Define its $d^2\times d^2$ unitary with `cirq.MatrixGate(..., qid_shape=(d, d))`.
citation:
  title: Generalizing Pauli Checks for Qudit-based Quantum Error Detection and Mitigation
  year: 2026
  url: https://arxiv.org/abs/2608.18332
---

The controlled shift, commonly called the SUM or modular-addition gate, is the qudit generalization of [CNOT](/gates/cnot). With the control listed first, it adds the control value to the target modulo $d$:

$$
\begin{align*}
\mathrm{SUM}_d |c,t\rangle & = |c, t+c \bmod d\rangle, \\
\mathrm{SUM}_d & = \sum_{c=0}^{d-1}|c\rangle\langle c| \otimes X_d^c,
\end{align*}
$$

where $X_d$ is the [shift gate](/gates/shift). It permutes the $d^2$ two-qudit computational-basis states.

### Properties

- Its inverse subtracts the control value: $\mathrm{SUM}_d^\dagger |c,t\rangle = |c,t-c \bmod d\rangle$. Hence $\mathrm{SUM}_d^d=I$.
- At $d=2$, addition modulo two is XOR, so $\mathrm{SUM}_2$ is CNOT.
- Conjugating the target with the [Chrestenson gate](/gates/chrestenson) produces the [controlled clock gate](/gates/controlled-clock):
  $\mathrm{CZ}_d = (I \otimes C_d)\,\mathrm{SUM}_d\,(I \otimes C_d^\dagger)$.
- Applying $C_d$ to the control of $|0,0\rangle$, then applying $\mathrm{SUM}_d$, prepares the generalized GHZ state $\frac{1}{\sqrt{d}}\sum_{k=0}^{d-1}|k,k\rangle$.

### Usage

- Reversible modular arithmetic, qudit teleportation, and generalized GHZ-state preparation.
- In the paper's Pauli-check sandwiching protocol, the shift-type checks condition $X_d^k$ on ancilla state $|k\rangle$; these are the SUM gate and its inverse, with the ancilla as the control.
