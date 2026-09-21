# Automação de redes sociais

Eventos do projeto:

- início da etapa;
- saída de ponto;
- chegada a ponto de apoio;
- ponto turístico;
- marcos de quilometragem;
- pausa;
- incidente;
- chegada;
- conclusão da etapa.

Cada evento deve possuir:
- timestamp;
- GPS;
- etapa;
- tipo;
- texto-base;
- evidência.

O VUA pode consumir o evento e publicar no canal social configurado. Para Bluesky, o fluxo deve ser:

```
evento validado → VUA → revisão/regra → publicação → URL/post_id
```

A URL/post_id deve voltar para a linha do tempo como evidência.
