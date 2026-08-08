---
layout: group
title: Diagonal Group
---

The diagonal group contains the gates that are diagonal in the computational basis: they never change *which* basis state you are in, only attach a phase to each one. Unitarity forces every diagonal entry onto the unit circle.

$$\mathsf{D}(n) := \left\\{ \mathrm{diag}(\mathrm{e}^{i\theta_1}, \ldots, \mathrm{e}^{i\theta_n}) \mid \theta_j \in \mathbb{R} \right\\} \subset \mathsf{U}(n)$$

As a group it is the $n$-torus $\mathsf{U}(1)^n$, and it is a *maximal* abelian subgroup of the unitary group (a maximal torus): you cannot enlarge it without adding gates that fail to commute.

### Properties

- Action on basis states: $|x\rangle \mapsto \mathrm{e}^{i\theta_x}|x\rangle$. A [phase oracle](/gates/phase-oracle) is nothing but a diagonal gate with $\pm 1$ entries.
- Abelian: diagonal gates all commute, so they can be freely reordered, merged, and canceled — this is what compiler "phase folding" passes exploit.
- Closed under adding controls: controlling a diagonal gate gives another diagonal gate. This generates the ladder [$Z$](/gates/pauli-z) → [$\mathrm{C}Z$](/gates/cz) → [$\mathrm{CC}Z$](/gates/ccz), and likewise [$S$](/gates/s) → [$\mathrm{C}S$](/gates/cs), [$P(\phi)$](/gates/phase) → [$\mathrm{C}P(\phi)$](/gates/controlled-phase).
- Invisible to final measurements: diagonal gates commute with computational-basis projectors, so one applied just before measurement changes nothing and can be deleted.
- The diagonal gates at each level of the Clifford hierarchy form the sequence [$Z$](/gates/pauli-z), [$S$](/gates/s), [$T$](/gates/t), ... — each the square root of the previous.

### Hardware

Diagonal $z$-axis rotations are special on most platforms: [$R_z$](/gates/rz) is implemented *virtually*, as a bookkeeping change to the phase of subsequent pulses, taking zero time and introducing zero error. Compilers therefore work hard to push phases into diagonal form.
