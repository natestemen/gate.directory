---
layout: group
title: Permutation Group
---

Permutation gates do the one thing a classical reversible computer can do: shuffle computational basis states. No superpositions are created from basis states, no phases appear — every entry of the matrix is a $0$ or a $1$. This group is the precise sense in which classical reversible logic sits inside quantum computing.

$$\mathrm{S}_N \cong \left\{ P \in \mathsf{U}(N) \mid P|x\rangle = |\pi(x)\rangle \right\}$$

where $\pi$ ranges over the permutations of $\{0, \ldots, N-1\}$.

For $n$ qubits, $N = 2^n$, and the group is the symmetric group on $2^n$ letters — finite, with $N!$ elements, and a subgroup of the [orthogonal group](/groups/orthogonal).

### Properties

- The classical logic dictionary: [$X$](/gates/pauli-x) is NOT, [CNOT](/gates/cnot) is XOR, and the [Toffoli](/gates/toffoli) computes AND. The Toffoli alone (with ancilla bits) generates every permutation — it is universal for classical reversible computation.
- Basis states map to basis states, so a permutation circuit acting on a basis-state input is simulable by literally running the classical program. All the quantumness comes from *superposed* inputs: a CNOT applied after a Hadamard entangles precisely because the permutation acts on both branches at once.
- This is how classical functions enter quantum algorithms: an [oracle](/gates/oracle) $|x, y\rangle \mapsto |x, y \oplus f(x)\rangle$ is a permutation gate, queried in superposition.
- Closed under composition and inverse (a permutation matrix's inverse is its transpose), and every element has finite order.

### Relations to other groups

Permutation gates are exactly the gates that are simultaneously real *and* "phase-free": the intersection of the orthogonal group with matrices of non-negative entries. Signed permutations like [$Z$](/gates/pauli-z), [$\mathrm{C}Z$](/gates/cz), or the [Margolus gate](/gates/rccx) sit just outside, in the orthogonal group proper.
