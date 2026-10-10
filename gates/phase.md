---
layout: gate
title: Phase Shift
symbol: P
alias:
  - phase
  - p
  - u1
notations:
  - U_1(\phi)
groups:
  - diagonal
  - number-preserving
arity: 1
parameters: 1
quirk:
  spin: {phi: 2}
  cols:
    - [{id: Z^ft, param: phi}]
params:
  phi: { label: \phi, default: 1/4, range: [0, 2] }
matrix:
  - [1, 0]
  - [0, "exp(i phi)"]
description: Applies a relative phase $e^{i\phi}$ to the $|1\rangle$ component.
sdks:
  qiskit:
    name: qiskit.circuit.library.PhaseGate
    url: https://docs.quantum.ibm.com/api/qiskit/qiskit.circuit.library.PhaseGate
  pennylane:
    name: pennylane.PhaseShift
    url: https://docs.pennylane.ai/en/stable/code/api/pennylane.PhaseShift.html
  cirq:
    name: cirq.ZPowGate
    url: https://quantumai.google/reference/python/cirq/ZPowGate
    note: "P(φ) = cirq.Z**(φ/π) (ZPowGate with exponent φ/π)."
  qsharp:
    name: Std.Intrinsic.R1
    url: https://learn.microsoft.com/en-us/qsharp/api/qsharp-lang/std.intrinsic/r1
    note: R1(theta, q) applies the phase exp(i theta) to the one-state.
  pyquil:
    name: pyquil.gates.PHASE
    url: https://pyquil-docs.rigetti.com/en/stable/apidocs/pyquil.gates.html#pyquil.gates.PHASE
  braket:
    name: braket.circuits.gates.PhaseShift
    url: https://amazon-braket-sdk-python.readthedocs.io/en/latest/_apidoc/braket.circuits.gates.html#braket.circuits.gates.PhaseShift
  bqskit:
    name: bqskit.ir.gates.U1Gate
    url: https://bqskit.readthedocs.io/en/latest/source/autogen/bqskit.ir.gates.U1Gate.html
    note: Named U1Gate; diag(1, e^(i theta))
  qibo:
    name: qibo.gates.U1
    url: https://qibo.science/qibo/stable/api-reference/qibo.html#qibo.gates.U1
    note: "Named U1 in Qibo, diag(1, e^{iθ})"
  pytket:
    name: pytket.circuit.OpType.U1
    url: https://docs.quantinuum.com/tket/api-docs/optype.html#pytket.circuit.OpType.U1
    note: P(phi) = U1(phi/pi); angle in half-turns
  qasm:
    name: "stdgates.inc: p"
    url: https://openqasm.com/language/standard_library.html#p
---

The phase shift gate is diagonal and leaves $|0\rangle$ unchanged while multiplying $|1\rangle$ by $e^{i\phi}$.

$$
P(\phi) = \begin{bmatrix}
  1 & 0 \\
  0 & \mathrm{e}^{i\phi}
\end{bmatrix}
$$

### Properties

- Equivalent to $R_z(\phi)$ up to a global phase.
- Clifford when $\phi$ is an integer multiple of $\pi/2$.

### Special Cases

| $\phi$   | Equivalent Gate | Matrix                                          |
| -------- | --------------- | ----------------------------------------------- |
| $0$      | [Identity](/gates/identity)  | $\begin{bmatrix}1 & 0 \\ 0 & 1\end{bmatrix}$  |
| $\pi / 4$| [$T$](/gates/t) | $\begin{bmatrix}1 & 0 \\ 0 & \mathrm{e}^{i\pi/8}\end{bmatrix}$  |
| $\pi/2$  | [$S$](/gates/s)     | $\begin{bmatrix}1 & 0 \\ 0 & i\end{bmatrix}$  |
| $\pi$    | [$Z$](/gates/pauli-z)   | $\begin{bmatrix}1 & 0 \\ 0 & -1\end{bmatrix}$ |
| $3\pi/2$ | $S^\dagger$     | $\begin{bmatrix}1 & 0 \\ 0 & -i\end{bmatrix}$ |
