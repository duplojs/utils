---
outline: [2, 3]
description: "La fonction getParentFolderPath() retourne le dossier parent d'un chemin POSIX."
prev:
  text: "resolveFrom"
  link: "/fr/v1/api/common/path/resolveFrom"
next:
  text: "getBaseName"
  link: "/fr/v1/api/common/path/getBaseName"
---

# getParentFolderPath

La fonction **`getParentFolderPath()`** retourne le dossier parent d'un chemin POSIX.

::: warning
Fonctionne uniquement avec les chemins POSIX (pas avec les chemins Windows).
:::

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
): string | null;
```

## Parametres

- `path` : Le chemin a analyser.

## Valeur de retour

Le dossier parent du chemin, ou `null` si aucun parent n'est trouve (y compris quand le chemin n'a pas de `/`).

## Voir aussi

- [`getBaseName`](/fr/v1/api/common/path/getBaseName) - Retourne le dernier segment d'un chemin
- [`getExtensionName`](/fr/v1/api/common/path/getExtensionName) - Retourne l'extension d'un chemin
