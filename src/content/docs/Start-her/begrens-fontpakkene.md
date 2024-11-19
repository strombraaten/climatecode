---
title: Begrens fontpakkene
description: Hvordan redusere størrelsen på fontpakker for bedre ytelse
---

## Optimaliser fontpakker

Fontfiler kan være overraskende store og påvirke både lastetid og energiforbruk. Faktisk så kan en "full fontpakke" være opp mot 2-3 MB, mens en mer optimalisert versjon kan være så liten som 100 KB eller mindre. Her er hvordan du kan optimalisere dem:

### Fjern unødvendige tegnsett

- Mange fontpakker inkluderer tegnsett for flere språk som kinesisk, japansk og kyrillisk
- Hvis nettsiden din kun bruker latin-baserte tegn, kan du fjerne andre tegnsett
- Dette kan redusere fontstørrelsen med opptil 90%

### Implementer subset av fonter

```html
<link
  rel="preload"
  href="din-font.woff2?subset=latin"
  as="font"
  type="font/woff2"
  crossorigin
/>
```

### Konklusjon

Ved å optimalisere fontpakker kan du:

- Redusere tiden det tar å laste inn siden
- Mindre dataoverføring = mindre energiforbruk
- Bedre ytelse, spesielt på mobile enheter
