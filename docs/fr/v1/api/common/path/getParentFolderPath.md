---
outline: [2, 3]
description: "La fonction getParentFolderPath() retourne le dossier parent d'un chemin."
prev:
  text: "resolveFrom"
  link: "/fr/v1/api/common/path/resolveFrom"
next:
  text: "getBaseName"
  link: "/fr/v1/api/common/path/getBaseName"
---

# getParentFolderPath

La fonction **`getParentFolderPath()`** retourne le dossier parent d'un chemin.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/path/getParentFolderPath/tryout.doc.ts"
  majorVersion="v1"
  height="208px"
/>

## Syntaxe

```typescript
function getParentFolderPath<
	GenericPath extends string
>(
	path: GenericPath
): string;
```

## Paramètres

- `path` : Le chemin à analyser.

## Valeur de retour

Le dossier parent, ou `"/"` si le chemin est absolu sans parent, sinon `"."`.

## Voir aussi

- [`getBaseName`](/fr/v1/api/common/path/getBaseName) - Retourne le dernier segment d'un chemin
- [`getExtensionName`](/fr/v1/api/common/path/getExtensionName) - Retourne l'extension d'un chemin
