---
layout: gate
title: Chrestenson
symbol: C_d
alias:
  - chrestenson
  - chrestenson-transform
  - generalized-hadamard
notations:
  - C_d
  - \mathcal{C}_d
arity: 1
dimension: d
description: Qudit generalization of the Hadamard gate that maps each basis state to an equal superposition with root-of-unity phases.
sdks:
  cirq:
    note: Not available natively. Define the $d\times d$ Chrestenson matrix with `cirq.MatrixGate(..., qid_shape=(d,))`.
citation:
  title: A class of generalized Walsh functions
  year: 1955
  url: https://doi.org/10.2140/pjm.1955.5.17
---

The Chrestenson gate is the $d$-level generalization of the [Hadamard gate](/gates/hadamard). Let $\omega = \mathrm{e}^{2\pi i/d}$. It maps a computational-basis state $|j\rangle$ to an equal superposition whose phases depend on $j$:

$$
C_d |j\rangle = \frac{1}{\sqrt{d}} \sum_{k=0}^{d-1} \omega^{jk}|k\rangle,
\qquad
(C_d)_{kj} = \frac{\omega^{jk}}{\sqrt{d}}.
$$

For a four-level qudit, $\omega=i$ and

$$
C_4 = \frac{1}{2}
\begin{bmatrix}
  1 &  1 &  1 &  1 \\
  1 &  i & -1 & -i \\
  1 & -1 &  1 & -1 \\
  1 & -i & -1 &  i
\end{bmatrix}.
$$

### Properties

- $C_2 = H$: in dimension two the Chrestenson gate is exactly the Hadamard gate.
- Unitary and symmetric: $C_d^\dagger C_d = I$ and $C_d^\mathsf{T} = C_d$. Its inverse replaces $\omega$ by $\omega^{-1}$.
- It is the one-qudit, $d$-dimensional [quantum Fourier transform](/gates/qft) under the same positive-exponent convention. Consequently, $C_d^2|j\rangle = |-j \bmod d\rangle$ and $C_d^4 = I$.
- It exchanges the generalized Pauli bases: $C_d X_d C_d^\dagger = Z_d$ and $C_d Z_d C_d^\dagger = X_d^{-1}$, where $X_d$ and $Z_d$ are the [shift](/gates/shift) and [clock](/gates/clock) gates.

### Usage

- Creates a maximal superposition from $|0\rangle$: $C_d|0\rangle = \frac{1}{\sqrt{d}}\sum_k |k\rangle$.
- In generalized Pauli-check sandwiching, $C_d$ and $C_d^\dagger$ prepare and unprepare qudit ancilla syndrome registers. This use is described in [Agyeman-Bobie *et al.* (2026)](https://arxiv.org/abs/2608.18332).
