# Pipeline Street View

## O que é automático

O vídeo 360 pode carregar metadados GPS; o Street View Studio usa os dados de localização para georreferenciar e posicionar a gravação. Vídeos externos podem ser convertidos em Street View após publicação. citeturn0search0

## O que NÃO deve ser prometido como tempo real

Street View não deve ser tratado como o canal de live da expedição. O próprio Google informa que o processamento pode levar vários dias e que as conexões entre fotos 360 podem aparecer quatro dias ou mais depois da publicação. citeturn0search0

## Arquitetura

```
Câmera 360
   ├── vídeo 360 + GPS
   │       ↓
   │   Street View Studio
   │       ↓
   │   Street View
   │
   └── live/arquivo local
           ↓
        portal CF360

GPS do celular
   ↓
live.json/API
   ↓
mapa público
   ↓
waypoints + pontos turísticos + paradas

VUA
   ↓
GitHub / Bluesky / eventos
```

## Automatização de rota e pontos

O sistema próprio pode associar cada posição GPS a waypoints versionados em `data/stops.json`, por exemplo:

- ponto turístico;
- ponto de água;
- alimentação;
- hospedagem;
- mecânica;
- apoio;
- chegada/saída de etapa.

Quando o GPS entra em um raio definido, o backend pode gerar um evento. Esse evento pode atualizar o portal e preparar uma publicação social.

Isso é uma automação do **projeto CF360**, não uma funcionalidade nativa de publicação automática em tempo real do Street View.
