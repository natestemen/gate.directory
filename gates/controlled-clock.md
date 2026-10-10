---
layout: gate
title: Controlled Clock
symbol: \mathrm{C}Z_d
alias:
  - controlled-clock
  - qudit-cz
  - czd
  - controlled-zd
notations:
  - \mathrm{C}Z_d
  - \mathrm{CP}_d
  - \Lambda(Z_d)
groups:
  - diagonal
  - number-preserving
arity: 2
dimension: d
matrix:
  - ["1", 0, 0, 0, 0, 0, 0, 0, 0]
  - [0, "1", 0, 0, 0, 0, 0, 0, 0]
  - [0, 0, "1", 0, 0, 0, 0, 0, 0]
  - [0, 0, 0, "1", 0, 0, 0, 0, 0]
  - [0, 0, 0, 0, "exp(2 pi i/3)", 0, 0, 0, 0]
  - [0, 0, 0, 0, 0, "exp(4 pi i/3)", 0, 0, 0]
  - [0, 0, 0, 0, 0, 0, "1", 0, 0]
  - [0, 0, 0, 0, 0, 0, 0, "exp(4 pi i/3)", 0]
  - [0, 0, 0, 0, 0, 0, 0, 0, "exp(2 pi i/3)"]
matrix_note: d = 3
controlled: clock
description: Qudit generalization of controlled-$Z$ that applies the phase $\omega^{ct}$ to $|c,t\rangle$.
sdks:
  cirq:
    note: Not available natively. Define its $d^2\times d^2$ unitary with `cirq.MatrixGate(..., qid_shape=(d, d))`.
citation:
  title: Generalizing Pauli Checks for Qudit-based Quantum Error Detection and Mitigation
  year: 2026
  url: https://arxiv.org/abs/2608.18332
---

The controlled clock gate, also called qudit controlled-$Z$, is the $d$-level generalization of [controlled-$Z$](/gates/cz). Let $\omega = \mathrm{e}^{2\pi i/d}$. With the control listed first, it applies a phase determined by both computational-basis values:

$$
\begin{align*}
\mathrm{CZ}_d |c,t\rangle & = \omega^{ct}|c,t\rangle, \\
\mathrm{CZ}_d & = \sum_{c=0}^{d-1}|c\rangle\langle c| \otimes Z_d^c,
\end{align*}
$$

where $Z_d$ is the [clock gate](/gates/clock). Equivalently, its diagonal element on $|c,t\rangle$ is $\omega^{ct}$.

### Properties

- At $d=2$, $\mathrm{CZ}_2$ is the usual controlled-$Z$ gate.
- Diagonal and symmetric under exchanging the two qudits: $\omega^{ct}=\omega^{tc}$.
- Its inverse applies the conjugate phase, $\mathrm{CZ}_d^\dagger|c,t\rangle=\omega^{-ct}|c,t\rangle$. For $d>2$, it is generally not self-inverse, but $\mathrm{CZ}_d^d=I$.
- It is the Chrestenson-basis form of [controlled shift](/gates/controlled-shift):
  $\mathrm{CZ}_d=(I\otimes C_d)\,\mathrm{SUM}_d\,(I\otimes C_d^\dagger)$.

### Usage

- Qudit phase kickback, generalized stabilizer circuits, and entangling controlled-phase operations.
- In the paper's Pauli-check sandwiching protocol, the clock-type right check is $\mathrm{CZ}_d$ and the corresponding left check is $\mathrm{CZ}_d^\dagger$, with an ancilla acting as the control.
