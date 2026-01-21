---
outline: [2, 3]
description: "Utilitaires Path pour normaliser, joindre et analyser des chemins multi-plateformes."
prev:
  text: "Common"
  link: "/fr/v1/api/common/"
next:
  text: "isAbsolute"
  link: "/fr/v1/api/common/path/isAbsolute"
---

# Path

Utilitaires Path pour normaliser, joindre et analyser des chemins multi-plateformes.

## Comment faire les imports ?

Les fonctions Path sont exposées via l'entrée principale ou en import direct (tree-shaking friendly).

```typescript
import { Path } from "@duplojs/utils";
import * as Path from "@duplojs/utils/common/path";
```

## Vérifications

### [isAbsolute](/fr/v1/api/common/path/isAbsolute)
Vérifie si un chemin est absolu (POSIX, UNC, ou lecteur Windows).

### [isUnixPath](/fr/v1/api/common/path/isUnixPath)
Vérifie si un chemin utilise uniquement des séparateurs Unix.

## Normalisation et composition

### [normalize](/fr/v1/api/common/path/normalize)
Normalise un chemin en résolvant les segments et les séparateurs.

### [join](/fr/v1/api/common/path/join)
Joint des segments de chemin et normalise le résultat.

### [resolveFrom](/fr/v1/api/common/path/resolveFrom)
Résout une liste de segments à partir d'une origine.

## Extraction

### [getParentFolderPath](/fr/v1/api/common/path/getParentFolderPath)
Retourne le dossier parent d'un chemin.

### [getBaseName](/fr/v1/api/common/path/getBaseName)
Retourne le dernier segment d'un chemin, avec option d'extension.

### [getExtensionName](/fr/v1/api/common/path/getExtensionName)
Retourne l'extension d'un chemin, avec le point.
