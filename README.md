# Caminho da Fé 360 🚴‍♂️📍

## A promessa de 2013

O **Caminho da Fé 360** é uma expedição de bicicleta que retoma uma história iniciada em **2013**.

Naquele ano, durante um negócio envolvendo cozinha profissional e um fogão wok para a implantação da operação da XCMG em Minas Gerais, surgiu uma situação que levou o autor do projeto a viajar de bicicleta até Minas para resolver a negociação.

O negócio foi resolvido. A chuva veio. A capa de chuva não foi encontrada. A bicicleta voltou de ônibus.

Ficou a promessa: **um dia fazer o caminho de bicicleta até Aparecida.**

Em 2026, a promessa volta a ser projeto.

> **2013: fui de bicicleta até Minas para resolver um negócio.**  
> **2026: volto de bicicleta para cumprir a promessa.**

O projeto preserva essa memória e transforma a nova jornada em documentação pública: rota, diário, GPS, vídeo, 360°, pontos de apoio e publicação no Google Street View.

## Percurso

- **Origem:** Ouro Fino/MG
- **Destino:** Aparecida/SP
- **Passagem planejada:** Campos do Jordão
- **Etapas:** aproximadamente 20–50 km, ajustadas às condições reais da rota.

## Objetivos

- Registrar a história de 2013 e sua continuação.
- Mapear a expedição em etapas.
- Publicar pontos de apoio para romeiros e ciclistas.
- Disponibilizar acompanhamento de posição durante a jornada.
- Produzir conteúdo 360° georreferenciado.
- Publicar os trechos elegíveis no Google Street View.
- Integrar automações do VUA, GitHub e Bluesky.
- Criar um arquivo digital permanente da jornada.

## Arquitetura

```
História 2013
     ↓
Expedição 2026
     ↓
GPS ───────────────→ Live + mapa público
     ↓
Câmera 360 ────────→ vídeo 360 + GPS
     ↓
Street View Studio → Google Street View
     ↓
Portal + diário + arquivo
     ↓
VUA → GitHub / Bluesky / eventos
```

## Estrutura

- `data/` — rota, pontos de apoio e estado da transmissão.
- `docs/` — arquitetura, história e operação.
- `live/` — componentes de acompanhamento ao vivo.
- `streetview-360/` — organização dos conteúdos 360°.
- `sponsors/` — parceiros e patrocinadores.
- `.github/workflows/` — publicação e CI.

## Status

🚧 Em construção — a narrativa histórica de 2013 foi incorporada ao projeto; rota operacional, testes de captura 360° e logística da expedição seguem em consolidação.
