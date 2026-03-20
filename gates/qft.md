---
layout: gate
title: Quantum Fourier Transform
symbol: \mathrm{QFT}_n
alias:
  - qft
arity: n
description: Applies the discrete Fourier transform to the amplitudes of an $n$-qubit state.
---

The quantum Fourier transform maps the computational basis state $|j\rangle$ to an equal superposition with phases determined by $j$.
Let $N = 2^n$ and $\omega = \mathrm{e}^{2\pi i / N}$, then

$$
\mathrm{QFT}\_{N} |j\rangle = \frac{1}{\sqrt{N}} \sum_{k=0}^{N-1} \omega^{jk} |k\rangle
$$


For two qubits ($N = 4$, $\omega = i$):

$$
\mathrm{QFT}_{4} = \frac{1}{2}
\begin{bmatrix}
  1 &  1 &  1 &  1 \\\\
  1 &  i & -1 & -i \\\\
  1 & -1 &  1 & -1 \\\\
  1 & -i & -1 &  i
\end{bmatrix}
$$

In general the matrix has entries $[\mathrm{QFT}\_N]_{jk} = \frac{\omega^{jk}}{\sqrt{N}}$.

### Properties

- Unitary: $\mathrm{QFT}\_{n}^\dagger = \mathrm{QFT}_{n}^{-1}$.
- The inverse QFT (used in phase estimation readout) has conjugated phases $\omega^{-jk}$.
- Achieves an exponential speedup over the classical FFT for in-place computation on a quantum state; however, the amplitudes cannot be read out directly without measurement.
