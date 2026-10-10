---
layout: gate
title: Fermionic Simulator
symbol: \mathrm{FSim}
alias:
  - fsim
groups:
  - number-preserving
arity: 2
parameters: 2
weyl:
  coords: [-theta/2, -theta/2, -phi/4]
  params:
    theta: { label: \theta, range: [0, 1], default: 1/2 }
    phi: { label: \phi, range: [0, 2], default: 1/6 }
quirk:
  cols:
    - ["H", "H"]
    - ["•", "X"]
    - [1, {id: Rzft, arg: "2 pi t"}]
    - ["•", "X"]
    - ["H", "H"]
    - ["X^-½", "X^-½"]
    - ["•", "X"]
    - [1, {id: Rzft, arg: "2 pi t"}]
    - ["•", "X"]
    - ["X^½", "X^½"]
    - ["•", {id: Z^ft, arg: "-4 t"}]
  note: \theta = 2\pi t,\ \phi = 4\pi t
description: Parameterized two-qubit gate combining an $XY$ interaction with a controlled-phase, native to Google superconducting hardware.
sdks:
  qiskit:
    note: Not available natively. Compose XXPlusYYGate with CPhaseGate.
  pennylane:
    note: Not available natively. Compose from qml.IsingXY and qml.ControlledPhaseShift.
  cirq:
    name: cirq.FSimGate
    url: https://quantumai.google/reference/python/cirq/FSimGate
  pyquil:
    name: pyquil.simulation.matrices.FSIM
    url: https://pyquil-docs.rigetti.com/en/stable/apidocs/pyquil.simulation.matrices.html#pyquil.simulation.matrices.FSIM
    note: Matrix only; wrap with DefGate to use in programs.
  braket:
    note: No fSim class; compose XY and CPhaseShift
  bqskit:
    name: bqskit.ir.gates.FSIMGate
    url: https://bqskit.readthedocs.io/en/latest/source/autogen/bqskit.ir.gates.FSIMGate.html
  qibo:
    name: qibo.gates.fSim
    url: https://qibo.science/qibo/stable/api-reference/qibo.html#qibo.gates.fSim
  pytket:
    name: pytket.circuit.OpType.FSim
    url: https://docs.quantinuum.com/tket/api-docs/optype.html#pytket.circuit.OpType.FSim
    note: fSim(theta,phi) = FSim(theta/pi, phi/pi); angles in half-turns
---

The fermionic simulator gate is a two-parameter family that unifies the [iSWAP](/gates/iswap) and [CZ](/gates/cz) interactions.

$$
\mathrm{FSim}(\theta, \phi) =
\begin{bmatrix}
  1 & 0            & 0            & 0 \\
  0 & \cos\theta   & -i\sin\theta & 0 \\
  0 & -i\sin\theta & \cos\theta   & 0 \\
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
