---
outline: [2, 3]
description: "La fonction findAndSpliceDelete() recherche le premier élément qui satisfait un prédicat, puis supprime deleteCount éléments à partir de cet index."
prev:
  text: "findAndReplace"
  link: "/fr/v1/api/array/findAndReplace"
next:
  text: "findAndSpliceInsert"
  link: "/fr/v1/api/array/findAndSpliceInsert"
---

# findAndSpliceDelete

La fonction **`findAndSpliceDelete()`** recherche le premier élément qui satisfait un prédicat, puis supprime `deleteCount` éléments à partir de cet index.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/array/findAndSpliceDelete/tryout.doc.ts"
  majorVersion="v1"
  height="355px"
  :foldLines="[2]"
/>

## Syntaxe

### Signature classique

```typescript
function findAndSpliceDelete<
	GenericElement extends unknown
>(
	input: readonly GenericElement[],
	predicate: (
		element: GenericElement,
		params: { index: number }
	) => boolean,
	deleteCount: number
): GenericElement[] | undefined
```

### Signature currifiée

```typescript
function findAndSpliceDelete<
	GenericElement extends unknown
>(
	predicate: (
		element: GenericElement,
		params: { index: number }
	) => boolean,
	deleteCount: number
): (input: readonly GenericElement[]) => GenericElement[] | undefined
```

## Paramètres

- `input` : Tableau à parcourir.
- `predicate` : Fonction qui identifie l'élément à supprimer. Reçoit l'élément et son index.
- `deleteCount` : Nombre d'éléments à retirer à partir de l'élément trouvé.

## Valeur de retour

Un nouveau tableau avec les éléments supprimés ou `undefined` si aucun élément ne satisfait le prédicat.

## Voir aussi

- [`findAndSpliceInsert`](/fr/v1/api/array/findAndSpliceInsert)
- [`findAndSpliceReplace`](/fr/v1/api/array/findAndSpliceReplace)

## Sources

- [MDN Web Docs - Array.prototype.find()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- [MDN Web Docs - Array.prototype.splice()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
