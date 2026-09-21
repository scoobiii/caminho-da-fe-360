# Estratégia de testes

## Cobertura

A meta de 100% aplica-se ao código JavaScript/TypeScript que o projeto realmente possuir. Arquivos estáticos JSON/HTML não são artificialmente inflados para produzir uma métrica.

## Anti-mock

O CI deve falhar se código de produção introduzir padrões proibidos de mock/stub/fake. Fixtures declarativas de teste podem ser permitidas em diretório de testes.

## k6

k6 é teste de carga/performance; ele não substitui cobertura unitária. Thresholds determinam condições de sucesso/falha da execução. citeturn0search11
