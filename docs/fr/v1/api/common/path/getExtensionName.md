---
outline: [2, 3]
description: "La fonction getExtensionName() retourne la derniere extension d'un chemin, sans le point."
prev:
  text: "getBaseName"
  link: "/fr/v1/api/common/path/getBaseName"
next:
  text: "Path"
  link: "/fr/v1/api/common/path/"
---

# getExtensionName

La fonction **`getExtensionName()`** retourne la derniere extension d'un chemin, sans le point.

::: warning
Fonctionne uniquement avec les chemins POSIX (pas avec les chemins Windows).
:::

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
): string | null;
```

## Paramètres

- `path` : Le chemin à analyser.

## Valeur de retour

L'extension sans le point (ex: `txt`) ou `null` si elle n'existe pas.

## Voir aussi

- [`getBaseName`](/fr/v1/api/common/path/getBaseName) - Retourne le dernier segment d'un chemin
- [`getParentFolderPath`](/fr/v1/api/common/path/getParentFolderPath) - Retourne le dossier parent
