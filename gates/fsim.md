---
layout: gate
title: Fermionic Simulator
symbol: \mathrm{FSim}
alias:
  - fsim
arity: 2
parameters: 2
description: Parameterized two-qubit gate combining an $XY$ interaction with a controlled-phase, native to Google superconducting hardware.
sdks:
  cirq:
    name: cirq.FSimGate
    url: https://quantumai.google/reference/python/cirq/FSimGate
  pyquil:
    name: pyquil.simulation.matrices.FSIM
    url: https://pyquil-docs.rigetti.com/en/stable/apidocs/pyquil.simulation.matrices.html#pyquil.simulation.matrices.FSIM
  bqskit:
    name: bqskit.ir.gates.FSIMGate
    url: https://bqskit.readthedocs.io/en/latest/source/autogen/bqskit.ir.gates.FSIMGate.html
---

The fermionic simulator gate is a two-parameter family that unifies the [iSWAP](/gates/iswap) and [CZ](/gates/cz) interactions.

$$
\mathrm{FSim}(\theta, \phi) =
\begin{bmatrix}
  1 & 0            & 0            & 0 \\\\
  0 & \cos\theta   & -i\sin\theta & 0 \\\\
  0 & -i\sin\theta & \cos\theta   & 0 \\\\
  0 & 0            & 0            & \mathrm{e}^{-i\phi}
\end{bmatrix}
$$

### Special cases

- $\mathrm{FSim}(\pi/2, 0) = i\mathrm{SWAP}$
- $\mathrm{FSim}(\pi/4, 0) = \sqrt{i\mathrm{SWAP}}$
- $\mathrm{FSim}(\pi/2, \pi) = \mathrm{fSWAP}$
- $\mathrm{FSim}(0, \phi) = \mathrm{C}P(\phi)$
- $\mathrm{FSim}(0, \pi) = \mathrm{CZ}$
- $\mathrm{FSim}(\pi/2, \pi/6)$ approximates the [Sycamore gate](https://doi.org/10.1038/s41586-019-1666-5) used in Google's quantum supremacy experiment.

### Properties

- The $\theta$ parameter controls the swap angle in the $\{|01\rangle, |10\rangle\}$ subspace.
- The $\phi$ parameter is a controlled phase on $|11\rangle$.
- Reduces to a product of single-qubit gates at $\theta = 0, \phi = 0$.
