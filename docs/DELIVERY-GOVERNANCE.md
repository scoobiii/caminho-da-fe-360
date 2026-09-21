# Governança de entrega

## Regra de integração

Toda alteração de produto deve seguir:

1. Issue/backlog.
2. Branch de trabalho.
3. Pull Request.
4. CI obrigatório.
5. Testes funcionais.
6. Cobertura de código: 100% nos componentes JavaScript/TypeScript cobertos pelo projeto.
7. Anti-mock: detectar mocks/stubs/fakes proibidos no código de produção.
8. k6: teste de carga/smoke com thresholds.
9. Review.
10. Merge em `main`.
11. Atualização automática/manual do backlog e da linha do tempo.
12. Registro do entregável no changelog/linha do tempo.

A branch `main` deve ser protegida com PR e checks obrigatórios. O GitHub permite exigir reviews e status checks antes do merge. citeturn0search3turn0search4

## Critério de pronto

Um entregável só é considerado DONE quando:

- código/documentação está no PR;
- CI está verde;
- cobertura requerida está verde;
- anti-mock está verde;
- k6 está verde quando aplicável;
- PR foi mergeado;
- backlog atualizado;
- linha do tempo atualizada.
