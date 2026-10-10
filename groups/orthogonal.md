---
layout: group
title: Orthogonal Group
---

The orthogonal group consists of the *real* unitaries — gates whose matrices have no imaginary entries (the homepage filter calls this group "Real"). Real gates compose to real gates, so circuits built from them keep all amplitudes real, and a surprising amount of quantum computing happens entirely inside this group.

$$
\begin{aligned}
\mathsf{O}(n) &:= \left\{ O \in \mathrm{GL}(n, \mathbb{R}) \mid O^{\mathsf{T}} O = I \right\} \\
&= \mathsf{U}(n) \cap \mathrm{GL}(n, \mathbb{R})
\end{aligned}
$$

### Properties

- Every orthogonal matrix has $\det O = \pm 1$. The $+1$ component $\mathsf{SO}(n)$ contains the *rotations*, such as [$R_y(\theta)$](/gates/ry) and [Givens rotations](/gates/givens); determinant $-1$ elements are *reflections*, such as the [Grover diffuser](/gates/grover-diffuser).
- Orthogonal gates are exactly the gates invariant under complex conjugation — quantum operations indistinguishable from their own "time-reversed-frame" copies.
- [Permutation matrices](/groups/permutation) form a finite subgroup: [$X$](/gates/pauli-x), [CNOT](/gates/cnot), [Toffoli](/gates/toffoli), [SWAP](/gates/swap), and the qudit [shift](/gates/shift) all just shuffle basis states. All of classical reversible logic lives here.

### Why real amplitudes suffice

Restricting to real amplitudes costs almost nothing: a single extra qubit can carry the role of the imaginary unit, and real gates on $n+1$ qubits then simulate arbitrary complex circuits on $n$ qubits ([Rudolph and Grover](https://arxiv.org/abs/quant-ph/0210187) showed a single two-qubit real gate suffices for universality). Many textbook algorithms — Grover search among them — never produce a complex amplitude in the first place.
