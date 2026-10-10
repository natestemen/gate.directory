---
layout: gate
title: Phased Rotation
symbol: R(\theta, \phi)
alias:
  - r
  - phased-x
notations:
  - R(\theta, \phi)
  - R_\phi(\theta)
  - \mathrm{PhasedX}
arity: 1
parameters: 2
quirk:
  spin: {theta: 2, phi: 4}
  cols:
    - [{id: Rzft, param: phi, mul: -1}]
    - [{id: Rxft, param: theta}]
    - [{id: Rzft, param: phi}]
params:
  theta: { label: \theta, default: 1/2, range: [0, 2] }
  phi: { label: \phi, default: 1/4, range: [0, 4] }
matrix:
  - ["cos(theta/2)", "-i exp(-i phi) sin(theta/2)"]
  - ["-i exp(i phi) sin(theta/2)", "cos(theta/2)"]
description: Rotation by $\theta$ about the equatorial Bloch-sphere axis at azimuthal angle $\phi$.
sdks:
  qiskit:
    name: qiskit.circuit.library.RGate
    url: https://docs.quantum.ibm.com/api/qiskit/qiskit.circuit.library.RGate
  pennylane:
    note: Not available natively. Decompose into qml.RZ and qml.RX.
  cirq:
    name: cirq.PhasedXPowGate
    url: https://quantumai.google/reference/python/cirq/PhasedXPowGate
    note: R(θ,φ) = PhasedXPowGate(exponent=θ/π, phase_exponent=φ/π) up to global phase.
  qsharp:
    note: "No single op; apply Rz(-phi), Rx(theta), Rz(phi). Q#'s R rotates about Pauli axes only."
  braket:
    name: braket.circuits.gates.PRx
    url: https://amazon-braket-sdk-python.readthedocs.io/en/latest/_apidoc/braket.circuits.gates.html#braket.circuits.gates.PRx
    note: Braket names this PRx(theta, phi)
  bqskit:
    name: bqskit.ir.gates.U1qGate
    url: https://bqskit.readthedocs.io/en/latest/source/autogen/bqskit.ir.gates.U1qGate.html
    note: Quantinuum U1q(theta, phi) is identical to R(theta, phi)
  qibo:
    name: qibo.gates.PRX
    url: https://qibo.science/qibo/stable/api-reference/qibo.html#qibo.gates.PRX
    note: Named PRX (phased-RX); matches the standard R(θ, φ) matrix
  pytket:
    name: pytket.circuit.OpType.PhasedX
    url: https://docs.quantinuum.com/tket/api-docs/optype.html#pytket.circuit.OpType.PhasedX
    note: R(theta,phi) = PhasedX(theta/pi, phi/pi); angles in half-turns
---

The phased rotation generalizes [$R_x$](/gates/rx) and [$R_y$](/gates/ry) to an arbitrary axis in the equatorial ($xy$) plane of the Bloch sphere:

$$
\begin{align*}
R(\theta, \phi) & = \exp\left(-i \frac{\theta}{2} (\cos\phi \, X + \sin\phi \, Y)\right) \\
& = \begin{bmatrix}
  \cos\frac{\theta}{2} & -i\mathrm{e}^{-i\phi}\sin\frac{\theta}{2} \\
  -i\mathrm{e}^{i\phi}\sin\frac{\theta}{2} & \cos\frac{\theta}{2}
\end{bmatrix}
\end{align*}
$$

### Special values

| Parameters | Gate |
| --- | --- |
| $\phi = 0$ | [$R_x(\theta)$](/gates/rx) |
| $\phi = \pi/2$ | [$R_y(\theta)$](/gates/ry) |
| $\theta = \pi$ | [GPi](/gates/gpi)$(\phi)$ up to global phase |
| $\theta = \pi/2$ | [GPi2](/gates/gpi2)$(\phi)$ |

### Properties

- Sandwich form: $R(\theta, \phi) = R_z(\phi) \, R_x(\theta) \, R_z(-\phi)$ — the phase $\phi$ just rotates the frame in which the $x$ rotation happens.
- Covers half of the Bloch sphere's rotation axes with one pulse shape, which is why it is the native single-qubit gate on ion traps (as GPi/GPi2) and on Google hardware (as PhasedX).

### Usage

- On hardware with *virtual* $z$ rotations, any single-qubit unitary becomes two phased rotations: the compiler tracks $\phi$ offsets in software and only the equatorial pulses are physically played.
