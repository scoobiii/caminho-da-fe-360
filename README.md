# Caminho da Fé 360 🚴‍♂️📍

Projeto público da expedição de bicicleta pelo **Caminho da Fé**, com foco em rota, acompanhamento ao vivo, conteúdo 360° e registro da jornada.

## Objetivos

- Mapear a expedição em etapas de aproximadamente 20–50 km.
- Publicar pontos de apoio para romeiros, alimentação, hospedagem e suporte.
- Disponibilizar acompanhamento de posição durante a jornada.
- Organizar vídeos e fotos 360° para publicação no Google Street View.
- Integrar automações do VUA, GitHub e Bluesky.

## Arquitetura

```
Câmera 360 → celular/internet → Live + GPS
                         ↘ dados públicos → GitHub Pages
Vídeo 360 → Google Street View Studio → Street View → portal
```

## Estrutura

- `data/` — rota, pontos de apoio e estado da transmissão.
- `docs/` — arquitetura e operação.
- `live/` — componentes de acompanhamento ao vivo.
- `streetview-360/` — organização dos conteúdos 360°.
- `sponsors/` — parceiros e patrocinadores.
- `.github/workflows/` — publicação do site.

## Status

🚧 Em construção — planejamento, rota e infraestrutura sendo consolidados.
