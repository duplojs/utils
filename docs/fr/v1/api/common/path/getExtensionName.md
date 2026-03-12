---
outline: [2, 3]
description: "La fonction getExtensionName() retourne la derniere extension d'un chemin, avec ou sans le point."
prev:
  text: "getBaseName"
  link: "/fr/v1/api/common/path/getBaseName"
next:
  text: "Path"
  link: "/fr/v1/api/common/path/"
---

# getExtensionName

La fonction **`getExtensionName()`** retourne la derniere extension d'un chemin, avec ou sans le point.

::: warning
Fonctionne uniquement avec les chemins POSIX (pas avec les chemins Windows).
:::

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/path/getExtensionName/tryout.doc.ts"
  majorVersion="v1"
  height="250px"
/>

## Syntaxe

```typescript
function getExtensionName<
	GenericPath extends string
>(
	path: GenericPath,
	params?: {
		withDot: boolean;
	}
): string | null;
```

## Paramètres

- `path` : Le chemin à analyser.
- `params` : Options de comportement facultatives.
- `params.withDot` : Quand `true`, conserve le point au début de l’extension retournée.

## Valeur de retour

Le dernier segment d’extension :
- sans le point par défaut (par exemple `txt`)
- avec le point quand `withDot` vaut `true` (par exemple `.txt`)
- `null` si aucune extension n’est trouvée

## Voir aussi

- [`getBaseName`](/fr/v1/api/common/path/getBaseName) - Retourne le dernier segment d'un chemin
- [`getParentFolderPath`](/fr/v1/api/common/path/getParentFolderPath) - Retourne le dossier parent
