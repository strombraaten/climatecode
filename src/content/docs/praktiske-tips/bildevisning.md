---
title: Hvorfor vise mer enn det som er nødvendig?
description: Hvordan og hvorfor du bør bruke lazy loading for bilder på nettsiden din
---
## Hva er lazy loading?

Tenk deg at du er på et museum med mange bilder. Når du går inn i museet, ser du bare bildene i rommet du er i, og du fokuserer bare på ett bilde av gangen - ikke alle bildene i _hele_ museet på en gang.

Det som kalles "lazy loading" fungerer på samme måte på nettsider. I stedet for å laste ned alle bildene med en gang du åpner siden, venter nettsiden med å laste ned bildene til du faktisk skal se på dem. Akkurat som når du ser på bildene i museet - du ser på ett og ett bilde om gangen.

Dette er smart fordi:
- Det sparer strøm (akkurat som når du skrur av lyset i rom du ikke bruker)
- Nettsiden blir raskere å åpne (du slipper å vente på at alle bildene skal lastes ned)
- Det bruker mindre data på mobilen din (du laster bare ned det du faktisk ser på)

### Hvordan implementere lazy loading for bilder

Lazy loading implementerer du enkelt og greit ved å legge til attributten loading="lazy" i img-taggen:

```html
<img src="bilde.jpg" loading="lazy" alt="Beskrivelse" />
```
