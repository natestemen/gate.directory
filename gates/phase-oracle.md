---
layout: gate
title: Phase Oracle
symbol: O_f^\pm
notations:
  - U_f^\pm
  - \mathcal{O}_f^\pm
arity: n
dimension: p
description: Encodes a Boolean function as phases on computational basis states.
---

A phase oracle is a variant of the [standard oracle](/gates/oracle) that acts on a single register $|x\rangle$, encoding the value of a classical Boolean function $f: \\{0, 1\\}^n \to \\{0, 1\\}$ as a relative phase:
$$
|x\rangle  \xmapsto{O_f^\pm} (-1)^{f(x)}|x\rangle
$$
This construction is particularly useful in algorithms like Grover's search, where interference between states allows the amplitudes of marked states to be amplified.

### Properties

- Diagonal in the computational basis; unitary and Hermitian for Boolean $f$.
- Can be implemented from a standard oracle via phase kickback.

### Usage

- Grover search and amplitude amplification.
- Encoding classical predicates into quantum phases.

## References

- [`qiskit.circuit.library.PhaseOracleGate`](https://quantum.cloud.ibm.com/docs/en/api/qiskit/qiskit.circuit.library.PhaseOracleGate)
- [Microsoft: Understanding quantum oracles](https://learn.microsoft.com/en-us/azure/quantum/concepts-oracles)
- [Classiq: Quantum Oracles Workshop](https://docs.classiq.io/latest/explore/tutorials/workshops/oracle_workshop/oracles_workshop/)