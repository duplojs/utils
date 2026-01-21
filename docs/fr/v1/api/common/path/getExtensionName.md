---
outline: [2, 3]
description: "La fonction getExtensionName() retourne l'extension d'un chemin, avec le point."
prev:
  text: "getBaseName"
  link: "/fr/v1/api/common/path/getBaseName"
next:
  text: "Path"
  link: "/fr/v1/api/common/path/"
---

# getExtensionName

La fonction **`getExtensionName()`** retourne l'extension d'un chemin, avec le point.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/path/getExtensionName/tryout.doc.ts"
  majorVersion="v1"
  height="208px"
/>

## Syntaxe

```typescript
function getExtensionName<
	GenericPath extends string
>(
	path: GenericPath
): string;
```

## Paramètres

- `path` : Le chemin à analyser.

## Valeur de retour

L'extension avec le point (ex: `.txt`) ou une chaîne vide si elle n'existe pas.

## Voir aussi

- [`getBaseName`](/fr/v1/api/common/path/getBaseName) - Retourne le dernier segment d'un chemin
- [`getParentFolderPath`](/fr/v1/api/common/path/getParentFolderPath) - Retourne le dossier parent
