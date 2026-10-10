---
layout: group
title: Number-Preserving Group
description: "Gates that conserve the number of excitations, moving them around and adjusting phases without creating or destroying any."
---

Number-preserving (or *excitation-preserving*) gates conserve the total number of $|1\rangle$s: they never create or destroy excitations, only move them around and adjust phases. Formally, they are the unitaries commuting with the total number operator $\hat{N} = \sum_i (I - Z_i)/2$ — the gates with a global $\mathsf{U}(1)$ symmetry.

$$\mathcal{N}_n := \left\{ U \in \mathsf{U}(2^n) \mid U \hat{N} U^\dag = \hat{N} \right\}$$

Equivalently, $U$ is block-diagonal with respect to Hamming weight: it decomposes as $\bigoplus_{k=0}^{n} U_k$ with $U_k$ acting on the $\binom{n}{k}$-dimensional weight-$k$ sector.

### Properties

- The whole [diagonal group](/groups/diagonal) is contained here: a gate that fixes every basis state certainly fixes its Hamming weight. The interesting members are the ones that *move* excitations — [SWAP](/gates/swap), [iSWAP](/gates/iswap), the [XY interaction](/gates/xy), [Givens rotations](/gates/givens), [FSim](/gates/fsim).
- On two qubits, a number-preserving gate is a phase on $|00\rangle$, a phase on $|11\rangle$, and an arbitrary $\mathsf{U}(2)$ rotation of the single-excitation subspace — exactly the FSim family and its relatives. The contrast case is the [$XX - YY$ interaction](/gates/xx-minus-yy), which coherently converts $|00\rangle \leftrightarrow |11\rangle$ and breaks the symmetry.

### Why it matters

- **Chemistry and fermions.** Molecular Hamiltonians conserve electron number, so chemistry ansätze are built from number-preserving blocks: ladders of Givens rotations tiled across a register can prepare *any* state of fixed particle number.
- **Hardware.** Energy-conserving interactions (exchange couplings, beam splitters) are natively number-preserving, which is why the iSWAP/FSim families are what superconducting hardware actually implements.
- **Error mitigation.** If a circuit should conserve $\hat{N}$, measuring the total excitation number and discarding violating shots (symmetry verification) catches any error that changes the weight — bit flips in particular.
