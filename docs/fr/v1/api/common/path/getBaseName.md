---
outline: [2, 3]
description: "La fonction getBaseName() retourne le dernier segment d'un chemin (apres le dernier slash), avec option de retrait d'extension."
prev:
  text: "getParentFolderPath"
  link: "/fr/v1/api/common/path/getParentFolderPath"
next:
  text: "getExtensionName"
  link: "/fr/v1/api/common/path/getExtensionName"
---

# getBaseName

La fonction **`getBaseName()`** retourne le dernier segment d'un chemin (apres le dernier slash), avec option de retrait d'extension.

::: warning
Fonctionne uniquement avec les chemins POSIX (pas avec les chemins Windows).
:::

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/path/getBaseName/tryout.doc.ts"
  majorVersion="v1"
  height="208px"
/>

## Syntaxe

```typescript
function getBaseName<
	GenericPath extends string
>(
	path: GenericPath,
	params?: {
		removeExtension?: boolean;
	}
): string | null;
```

## Parametres

- `path` : Le chemin a analyser.
- `params.removeExtension` : Si `true`, retire l'extension du segment final.

## Valeur de retour

Le dernier segment du chemin (apres le dernier `/`), avec l'extension retiree si demande, ou `null` si aucun segment n'est trouve (y compris quand le chemin n'a pas de `/`).

## Voir aussi

- [`getExtensionName`](/fr/v1/api/common/path/getExtensionName) - Retourne l'extension d'un chemin
- [`getParentFolderPath`](/fr/v1/api/common/path/getParentFolderPath) - Retourne le dossier parent
