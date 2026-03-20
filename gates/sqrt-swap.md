---
layout: gate
title: Square Root SWAP
symbol: \sqrt{\mathrm{SWAP}}
alias:
  - sqrtswap
groups:
arity: 2
description: Applies half of a SWAP interaction, creating maximal entanglement from a product state.
sdks:
  qiskit:
    note: Not available as a named gate. Use SwapGate().power(0.5).
  pennylane:
    note: Not available natively. Note that pennylane.SISWAP is sqrt(iSWAP), a different gate.
  cirq:
    name: cirq.SwapPowGate
    url: https://quantumai.google/reference/python/cirq/SwapPowGate
    note: No named constant. Use cirq.SWAP**0.5 (SwapPowGate with exponent=0.5). Note that cirq.SQRT_ISWAP is a different gate.
---

The $\sqrt{\mathrm{SWAP}}$ gate is the canonical maximally entangling two-qubit gate: a single application takes a product state to a maximally entangled state, and two applications recover the full [SWAP](/gates/swap).

$$
\sqrt{\mathrm{SWAP}} =
\begin{bmatrix}
  1 & 0 & 0 & 0 \\\\
  0 & \frac{1+i}{2} & \frac{1-i}{2} & 0 \\\\
  0 & \frac{1-i}{2} & \frac{1+i}{2} & 0 \\\\
  0 & 0 & 0 & 1
\end{bmatrix}
$$

### Properties

- Maximally entangling: maps $|01\rangle \mapsto \tfrac{1+i}{2}|01\rangle + \tfrac{1-i}{2}|10\rangle$, a state with concurrence 1.
- Symmetric under exchange of qubits.
- Together with single-qubit rotations, forms a universal gate set.
- Weyl coordinates $(\frac{\pi}{8}, \frac{\pi}{8}, \frac{\pi}{8})$.
- Native gate on some spin-based and exchange-coupled hardware platforms.
