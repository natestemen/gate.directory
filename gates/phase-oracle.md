---
layout: gate
title: Phase Oracle
symbol: O_f^\pm
arity: n
dimension: p
description: Implements a classical function as a “black-box” operation that encodes its output in the phase of quantum states.

---

A phase oracle is a variant of the ["standard" oracle](/gates/oracle) that acts on a single register $|x\rangle$, encoding the value of a classical Boolean function $f: \\{0, 1\\}^n \to \\{0, 1\\}$ as a relative phase:
$$
|x\rangle  \xmapsto{O_f^\pm} (-1)^{f(x)}|x\rangle
$$
This construction is particularly useful in algorithms like Grover's search, where interference between states allows the amplitudes of marked states to be amplified.

## References

- [`qiskit.circuit.library.PhaseOracleGate`](https://quantum.cloud.ibm.com/docs/en/api/qiskit/qiskit.circuit.library.PhaseOracleGate)
- [Microsoft: Understanding quantum oracles](https://learn.microsoft.com/en-us/azure/quantum/concepts-oracles)
- [Classiq: Quantum Oracles Workshop](https://docs.classiq.io/latest/explore/tutorials/workshops/oracle_workshop/oracles_workshop/)