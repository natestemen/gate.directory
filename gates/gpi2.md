---
layout: gate
title: GPi2
symbol: \mathrm{GPi2}
alias:
  - gpi2
notations:
  - \mathrm{GPi2}(\phi)
  - \mathrm{GPI2}(\phi)
arity: 1
parameters: 1
description: IonQ's native $\pi/2$ pulse, a half rotation about the equatorial Bloch-sphere axis at angle $\phi$.
sdks:
  qiskit:
    note: Available through the qiskit-ionq provider as GPI2Gate.
  pennylane:
    note: Available through the PennyLane-IonQ plugin as GPI2.
  cirq:
    name: cirq_ionq.GPI2Gate
    url: https://quantumai.google/reference/python/cirq_ionq/GPI2Gate
  braket:
    name: braket.circuits.gates.GPi2
    url: https://amazon-braket-sdk-python.readthedocs.io/en/latest/_apidoc/braket.circuits.gates.html#braket.circuits.gates.GPi2
  bqskit:
    name: bqskit.ir.gates.U1qPi2Gate
    url: https://bqskit.readthedocs.io/en/latest/source/autogen/bqskit.ir.gates.U1qPi2Gate.html
    note: Quantinuum U1qPi2 = R(pi/2, phi), identical to GPi2(phi)
  qibo:
    name: qibo.gates.GPI2
    url: https://qibo.science/qibo/stable/api-reference/qibo.html#qibo.gates.GPI2
  pytket:
    name: pytket.circuit.OpType.GPI2
    url: https://docs.quantinuum.com/tket/api-docs/optype.html#pytket.circuit.OpType.GPI2
    note: "Phase phi in half-turns: GPI2(phi/pi)"
---

The GPi2 gate is the half-pulse counterpart of [GPi](/gates/gpi): a $\pi/2$ rotation about the equatorial axis at azimuthal angle $\phi$. It is exactly the general [phased rotation](/gates/r) at $\theta = \pi/2$: $\mathrm{GPi2}(\phi) = R(\pi/2, \phi)$.

$$
\mathrm{GPi2}(\phi) = \frac{1}{\sqrt{2}}
\begin{bmatrix}
  1 & -i\mathrm{e}^{-i\phi} \\\\
  -i\mathrm{e}^{i\phi} & 1
\end{bmatrix}
$$

### Special values

| $\phi$ | Gate |
| --- | --- |
| $0$ | $R_x(\pi/2)$, i.e. [$\sqrt{X}$](/gates/sx) up to global phase |
| $\pi/2$ | $R_y(\pi/2)$ |
| $\pi$ | $R_x(-\pi/2)$ |

### Properties

- Creates equal superpositions: $\mathrm{GPi2}(\phi)$ maps the poles of the Bloch sphere to the equator, making it the hardware-native stand-in for the [Hadamard](/gates/hadamard).
- Inverse: $\mathrm{GPi2}(\phi)^\dagger = \mathrm{GPi2}(\phi + \pi)$.

### Usage

- On IonQ hardware, arbitrary single-qubit gates are compiled into at most two GPi2 pulses (plus phase bookkeeping): $z$ rotations are *virtual* — implemented by advancing the phase of all subsequent pulses — so only the equatorial pulses cost real gate time.
