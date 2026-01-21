---
outline: [2, 3]
description: "La fonction getBaseName() retourne le dernier segment d'un chemin, avec option d'extension."
prev:
  text: "getParentFolderPath"
  link: "/fr/v1/api/common/path/getParentFolderPath"
next:
  text: "getExtensionName"
  link: "/fr/v1/api/common/path/getExtensionName"
---

# getBaseName

La fonction **`getBaseName()`** retourne le dernier segment d'un chemin, avec option d'extension.

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
		extension?: string;
	}
): string;
```

## Paramètres

- `path` : Le chemin à analyser.
- `params.extension` : Extension à retirer si elle est présente.

## Valeur de retour

Le dernier segment, avec l'extension retirée si elle correspond.

## Voir aussi

- [`getExtensionName`](/fr/v1/api/common/path/getExtensionName) - Retourne l'extension d'un chemin
- [`getParentFolderPath`](/fr/v1/api/common/path/getParentFolderPath) - Retourne le dossier parent
