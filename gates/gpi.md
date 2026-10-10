---
layout: gate
title: GPi
symbol: \mathrm{GPi}
alias:
  - gpi
notations:
  - \mathrm{GPi}(\phi)
  - \mathrm{GPI}(\phi)
properties:
  - hermitian
arity: 1
parameters: 1
description: IonQ's native $\pi$ pulse, a bit flip about the equatorial Bloch-sphere axis at angle $\phi$.
sdks:
  qiskit:
    note: Available through the qiskit-ionq provider as GPIGate.
  pennylane:
    note: Available through the PennyLane-IonQ plugin as GPI.
  cirq:
    name: cirq_ionq.GPIGate
    url: https://quantumai.google/reference/python/cirq_ionq/GPIGate
  braket:
    name: braket.circuits.gates.GPi
    url: https://amazon-braket-sdk-python.readthedocs.io/en/latest/_apidoc/braket.circuits.gates.html#braket.circuits.gates.GPi
  bqskit:
    name: bqskit.ir.gates.U1qPiGate
    url: https://bqskit.readthedocs.io/en/latest/source/autogen/bqskit.ir.gates.U1qPiGate.html
    note: U1qPi = R(pi, phi); equals GPi(phi) up to a global phase of -i
  qibo:
    name: qibo.gates.GPI
    url: https://qibo.science/qibo/stable/api-reference/qibo.html#qibo.gates.GPI
  pytket:
    name: pytket.circuit.OpType.GPI
    url: https://docs.quantinuum.com/tket/api-docs/optype.html#pytket.circuit.OpType.GPI
    note: "Phase phi in half-turns: GPI(phi/pi)"
---

The GPi gate is one of IonQ's native gates: a $\pi$ rotation about an axis in the equatorial plane of the Bloch sphere, at azimuthal angle $\phi$. Physically it is a resonant Rabi pulse whose phase sets $\phi$.

$$
\mathrm{GPi}(\phi) =
\begin{bmatrix}
  0 & \mathrm{e}^{-i\phi} \\
  \mathrm{e}^{i\phi} & 0
\end{bmatrix}
$$

### Special values

| $\phi$ | Gate |
| --- | --- |
| $0$ | [Pauli-$X$](/gates/pauli-x) |
| $\pi/2$ | [Pauli-$Y$](/gates/pauli-y) |

### Properties

- Hermitian and self-inverse for every $\phi$: $\mathrm{GPi}(\phi)^2 = I$.
- Always a bit flip: $\mathrm{GPi}(\phi)|0\rangle = \mathrm{e}^{i\phi}|1\rangle$. The angle $\phi$ only changes the relative phase picked up along the way.
- Equal to the general [phased rotation](/gates/r) at $\theta = \pi$, up to global phase: $\mathrm{GPi}(\phi) = i \, R(\pi, \phi)$.

### Usage

- Together with [GPi2](/gates/gpi2) and the [Mølmer–Sørensen](/gates/molmer-sorenson) interaction, this forms IonQ's native gate set; circuits submitted in native-gate mode compile to exactly these operations.
