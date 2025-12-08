---
outline: [2, 3]
prev:
  text: "Date"
  link: "/v1/api/date/fr"
next:
  text: "Référence API"
  link: "/v1/api/fr"
---

# Clean

Briques essentielles de la Clean Architecture : création d'entités métier, types métier (`NewType`), cas d'usage, repositories, et plus encore. Facilite la structuration de votre code selon les principes de la Clean Architecture pour une meilleure maintenabilité et testabilité.

## Comment faire les imports ?

La bibliothèque expose les namespaces `DClean` et `C` depuis l'entrée principale **ou** en import direct (tree-shaking friendly), ce qui permet de ne charger que ce dont vous avez besoin.

```typescript
import { DClean, C } from "@duplojs/utils";
import * as DClean from "@duplojs/utils/clean";
import * as C from "@duplojs/utils/clean";
```

TODO