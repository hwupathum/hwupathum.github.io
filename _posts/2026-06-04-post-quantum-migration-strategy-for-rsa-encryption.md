---
title: Post-Quantum Migration Strategy for RSA Encryption
excerpt: >-
  A phased path from RSA-OAEP to quantum-resistant encryption in JWE, SAML and
  OIDC, using a composite RSA-KEM + ML-KEM mechanism inside HPKE. Preprint on
  IACR ePrint, with Ashen De Silva.
topic: Paper
tags: [post-quantum-cryptography, identity, hpke, ml-kem]
link: https://eprint.iacr.org/2026/1172
---

Preprint co-authored with Ashen De Silva (WSO2, Northeastern University), published on the IACR Cryptology ePrint Archive (2026/1172).

Identity protocols such as JWE, SAML and OIDC still rely on RSA-OAEP for encryption. The paper proposes a phased migration to post-quantum encryption that uses a composite key encapsulation mechanism, combining RSA-KEM with ML-KEM, as an intermediate stage. It formalizes the construction, proves IND-CCA2 security through a split-key PRF combiner, and integrates it into the HPKE framework.

Experiments show that the composite scheme adds quantum resistance while keeping existing RSA infrastructure in place, with performance costs that affect deployment timelines. The paper closes with practical guidance for teams migrating RSA-dependent identity and access management systems.

[Read the PDF](https://eprint.iacr.org/2026/1172.pdf)
