---
layout: gate
title: Grover Diffuser
symbol: U_s
alias:
  - grover-diffuser
  - diffuser
notations:
  - U_s
  - 2|s\rangle\langle s| - I
  - \mathrm{D}
groups:
  - orthogonal
properties:
  - hermitian
arity: n
quirk:
  matrix: "{{-0.5,0.5,0.5,0.5},{0.5,-0.5,0.5,0.5},{0.5,0.5,-0.5,0.5},{0.5,0.5,0.5,-0.5}}"
  name: Us
  note: n = 2
matrix:
  - ["-1/2", "1/2", "1/2", "1/2"]
  - ["1/2", "-1/2", "1/2", "1/2"]
  - ["1/2", "1/2", "-1/2", "1/2"]
  - ["1/2", "1/2", "1/2", "-1/2"]
matrix_note: n = 2
description: Reflection about the uniform superposition, the "inversion about the mean" step of Grover's algorithm.
citation:
  title: A fast quantum mechanical algorithm for database search
  year: 1996
  url: https://arxiv.org/abs/quant-ph/9605043
sdks:
  qiskit:
    name: qiskit.circuit.library.grover_operator
    url: https://docs.quantum.ibm.com/api/qiskit/qiskit.circuit.library.grover_operator
    note: Builds the full Grover iterate, oracle included.
  pennylane:
    name: pennylane.GroverOperator
    url: https://docs.pennylane.ai/en/stable/code/api/pennylane.GroverOperator.html
  qibo:
    note: Built inside qibo.models.grover.Grover (diffusion step); no standalone gate
  pytket:
    note: "CircBox: H on all, X on all, CnZ, X on all, H on all"
---

The Grover diffuser is the reflection about the uniform superposition $|s\rangle = \frac{1}{\sqrt{N}}\sum_{x=0}^{N-1} |x\rangle$ over $n$ qubits ($N = 2^n$):

$$
U_s = 2|s\rangle\langle s| - I
= H^{\otimes n} \left( 2|0^n\rangle\langle 0^n| - I \right) H^{\otimes n}
$$

Its matrix has $\frac{2}{N} - 1$ on the diagonal and $\frac{2}{N}$ everywhere else.

### Inversion about the mean

Acting on a state with amplitudes $a_x$, the diffuser maps each amplitude to $2\bar{a} - a_x$, where $\bar{a}$ is the mean amplitude. An amplitude that a [phase oracle](/gates/phase-oracle) has flipped negative lands *above* the mean after reflection — this is the amplification step of Grover's algorithm.

### Properties

- Hermitian, self-inverse, and real: a reflection in every sense.
- The Grover iterate is the diffuser composed with a [phase oracle](/gates/phase-oracle): $G = U_s U_f$. Geometrically, two reflections make a rotation — each iterate rotates the state toward the marked subspace by a fixed angle, giving the $O(\sqrt{N})$ query count.
- Up to the sign convention, $2|0^n\rangle\langle 0^n| - I$ is itself a phase oracle marking $|0^n\rangle$, implemented as a multi-controlled $Z$, so the diffuser costs one [MCX](/gates/mcx) conjugated by Hadamards.

### Usage

- The amplitude-amplification step in Grover search and its generalizations (amplitude estimation, fixed-point search, quantum walks).
