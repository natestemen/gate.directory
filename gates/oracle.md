---
layout: gate
title: Oracle
symbol: O_f
arity: n
dimension: p
description: Implements a classical function as a reversible "black-box" operation that can be queried coherently by quantum algorithms.

---

An oracle is a quantum operation that implements a classical function $f: \\{0, 1\\}^n \to \\{0, 1\\}^m$ as a reversible, unitary operation. Given an input register $|x\rangle$ and output register $|y\rangle$ the gate acts as
$$
|x\rangle \otimes |y\rangle \xmapsto{O_f} |x\rangle \otimes |b \oplus f(x)\rangle.
$$
where $\oplus$ denotes bitwise XOR. By coherently evaluating $f$ on superpositions of inputs, oracles allow quantum algorithms to achieve speedups for search, decision, and hidden-structure problems, while treating the function as a "black box."

## References

- [`qiskit.circuit.library.BitFlipOracleGate`](https://quantum.cloud.ibm.com/docs/en/api/qiskit/qiskit.circuit.library.BitFlipOracleGate)
- [Microsoft: Understanding quantum oracles](https://learn.microsoft.com/en-us/azure/quantum/concepts-oracles)
- [Classiq: Quantum Oracles Workshop](https://docs.classiq.io/latest/explore/tutorials/workshops/oracle_workshop/oracles_workshop/)