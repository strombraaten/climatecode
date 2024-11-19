---
title: Bilder
description: Hvordan du kan redusere bilderelaterte utslipp
---

## Optimaliser bilder

Bilder utgjør ofte en stor del av en nettsides dataoverføring. Her er noen tips for å optimalisere dem:

### Komprimer bilder

- Bruk verktøy som [ImageOptim](https://imageoptim.com/) eller [TinyPNG](https://tinypng.com/) for å redusere filstørrelsen uten å miste for mye kvalitet.

### Formatet

Bruk moderne formater som WebP for bedre komprimering og redusert dataoverføring:

#### Hvorfor WebP?

- WebP gir betydelig mindre filstørrelser sammenlignet med tradisjonelle formater som JPEG og PNG, ofte med 25-35% reduksjon.
- Mindre filstørrelser betyr mindre dataoverføring, som igjen fører til redusert energiforbruk og CO2-utslipp.
- For best praksis, tilby WebP-bilder med fallback til JPEG/PNG for eldre nettlesere:
  ```html
  <picture>
    <source srcset="bilde.webp" type="image/webp" />
    <img src="bilde.jpg" alt="Beskrivelse" />
  </picture>
  ```
- Bruk verktøy som cwebp eller online-konverterere for å konvertere eksisterende bilder til WebP-format.
