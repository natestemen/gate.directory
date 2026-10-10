---
layout: gate
title: Multi-Controlled X
symbol: \mathrm{C}^nX
alias:
  - mcx
  - c3x
  - c4x
notations:
  - \mathrm{C}^nX
  - \Lambda^n(X)
  - \mathrm{MCX}
  - \mathrm{C}^3X
groups:
  - orthogonal
  - permutation
properties:
  - hermitian
controlled: toffoli
arity: n+1
quirk:
  cols: [["•", "•", "•", "X"]]
  note: n = 3
description: Flips the target qubit when all $n$ control qubits are in the $|1\rangle$ state.
citation:
  title: Elementary gates for quantum computation
  year: 1995
  url: https://arxiv.org/abs/quant-ph/9503016
sdks:
  qiskit:
    name: qiskit.circuit.library.MCXGate
    url: https://docs.quantum.ibm.com/api/qiskit/qiskit.circuit.library.MCXGate
  pennylane:
    name: pennylane.MultiControlledX
    url: https://docs.pennylane.ai/en/stable/code/api/pennylane.MultiControlledX.html
  cirq:
    note: Not available natively. Construct with cirq.X.controlled(n).
  qsharp:
    note: Apply via the Controlled functor, Controlled X(controls, target).
  pyquil:
    note: "Not available natively. Chain CONTROLLED modifiers: X(t).controlled(c1).controlled(c2)."
  braket:
    note: "No MCX class; use x(target, control=[...]) with any number of controls"
  bqskit:
    note: No MCXGate; build with ControlledGate(XGate(), num_controls=n)
  qibo:
    note: "Construct as qibo.gates.X(target).controlled_by(*controls)"
  pytket:
    name: pytket.circuit.OpType.CnX
    url: https://docs.quantinuum.com/tket/api-docs/optype.html#pytket.circuit.OpType.CnX
  qasm:
    note: "Not in stdgates.inc; write ctrl @ ctrl @ x q0, q1, q2."
---

The multi-controlled $X$ gate extends the family [$X$](/gates/pauli-x) → [CNOT](/gates/cnot) → [Toffoli](/gates/toffoli) to $n$ controls:

$$
\mathrm{C}^nX \, |c_1 \cdots c_n\rangle |t\rangle = |c_1 \cdots c_n\rangle |t \oplus c_1 c_2 \cdots c_n\rangle
$$

As a matrix it is the identity, except for a $2 \times 2$ [$X$](/gates/pauli-x) block on the last two basis states $|1{\cdots}10\rangle$ and $|1{\cdots}11\rangle$.

### Properties

- Hermitian, self-inverse, and a permutation matrix (hence orthogonal).
- Computes the logical AND of all controls into the target — the quantum analog of an $n$-input AND gate, made reversible.
- Conjugating the target with Hadamards gives the multi-controlled $Z$, which is symmetric under any permutation of its qubits.

### Decompositions

Cost grows with how many ancillas you can spare (counts from Barenco et al.):

- With $n - 2$ clean ancillas: a ladder of $2(n-2) + 1$ Toffolis (or [Margolus gates](/gates/rccx), if compute–uncompute phase cancellation applies).
- With a single borrowed ancilla: still linear in $n$, via splitting into two half-sized MCX gates.
- With no ancillas: quadratic in $n$ — ancilla-free is expensive.

### Usage

- The workhorse of oracle construction: any classical Boolean function built from AND/NOT logic compiles to MCX gates, which is how [oracles](/gates/oracle) and the [Grover diffuser](/gates/grover-diffuser) are realized in practice.
