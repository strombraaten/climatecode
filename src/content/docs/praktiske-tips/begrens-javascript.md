---
title: Begrens JavaScript
description: Hvorfor og hvordan du bør redusere mengden JavaScript på nettsiden din
---

## Hvorfor begrense JavaScript?

JavaScript er en av de mest ressurskrevende delene av en nettside. Når nettleseren mottar JavaScript må den:

1. Laste ned koden
2. Tolke ("parse") koden
3. Kompilere koden
4. Kjøre koden

Dette krever betydelig mer prosessorkraft og strøm enn HTML og CSS.

### Konkrete tiltak

Her er hvordan du kan redusere JavaScript-bruken:

- Bruk native HTML/CSS løsninger der det er mulig
- Last inn JavaScript kun når det trengs (ved å bruke"lazy loading")
- Vurder om du faktisk trenger et rammeverk
- Fjern ubrukte avhengigheter fra package.json-filen

Du kan også bruke såkalt "tree shaking" for å fjerne ubrukt kode

```javascript
// I stedet for dette
import { everything } from 'huge-library'

// Gjør dette
import { onlyWhatYouNeed } from 'huge-library'
```

### Fordeler

Ved å redusere JavaScript-bruken oppnår du:

- Raskere lasting av nettsiden
- Redusert datamengde som må lastes ned
- Mindre prosessorbruk = mindre strømforbruk
- Bedre ytelse og bedre brukeropplevelse
