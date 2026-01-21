---
outline: [2, 3]
description: "Utilitaires Path pour résoudre et analyser des chemins POSIX."
prev:
  text: "Common"
  link: "/fr/v1/api/common/"
next:
  text: "isAbsolute"
  link: "/fr/v1/api/common/path/isAbsolute"
---

# Path

Utilitaires Path pour résoudre et analyser des chemins POSIX.

## Comment faire les imports ?

Les fonctions Path sont exposées via l'entrée principale ou en import direct (tree-shaking friendly).

```typescript
import { Path } from "@duplojs/utils";
import * as Path from "@duplojs/utils/common/path";
```

## Vérifications

### [isAbsolute](/fr/v1/api/common/path/isAbsolute)
Vérifie si un chemin est absolu.

## Résolution

### [resolveRelative](/fr/v1/api/common/path/resolveRelative)
Résout plusieurs segments en un seul chemin.

### [resolveFrom](/fr/v1/api/common/path/resolveFrom)
Résout une liste de segments à partir d'une origine.

## Extraction

### [getParentFolderPath](/fr/v1/api/common/path/getParentFolderPath)
Retourne le dossier parent d'un chemin.

### [getBaseName](/fr/v1/api/common/path/getBaseName)
Retourne le dernier segment d'un chemin, avec option d'extension.

### [getExtensionName](/fr/v1/api/common/path/getExtensionName)
Retourne l'extension d'un chemin, avec le point.
