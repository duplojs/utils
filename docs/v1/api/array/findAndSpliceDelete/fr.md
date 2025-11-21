---
outline: [2, 3]
prev:
  text: "spliceReplace"
  link: "/v1/api/array/spliceReplace/fr"
next:
  text: "findAndSpliceInsert"
  link: "/v1/api/array/findAndSpliceInsert/fr"
---

# findAndSpliceDelete

La fonction **`findAndSpliceDelete()`** recherche le premier élément qui satisfait un prédicat, puis supprime `deleteCount` éléments à partir de cet index.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/array/findAndSpliceDelete/examples/tryout.doc.ts"
  majorVersion="v1"
  height="700px"
/>

## Syntaxe

### Signature classique

```typescript
function findAndSpliceDelete<GenericElement>(
	array: readonly GenericElement[],
	predicate: (
		element: GenericElement,
		params: { index: number }
	) => boolean,
	deleteCount: number
): GenericElement[] | undefined
```

### Signature currifiée

```typescript
function findAndSpliceDelete<GenericElement>(
	predicate: (
		element: GenericElement,
		params: { index: number }
	) => boolean,
	deleteCount: number
): (array: readonly GenericElement[]) => GenericElement[] | undefined
```

## Paramètres

- `array` : Tableau à parcourir.
- `predicate` : Fonction qui identifie l'élément à supprimer. Reçoit l'élément et son index.
- `deleteCount` : Nombre d'éléments à retirer à partir de l'élément trouvé.

## Valeur de retour

Un nouveau tableau avec les éléments supprimés ou `undefined` si aucun élément ne satisfait le prédicat.

## Voir aussi

- [`findAndSpliceInsert`](/v1/api/array/findAndSpliceInsert/fr)
- [`findAndSpliceReplace`](/v1/api/array/findAndSpliceReplace/fr)

## Sources

- [MDN Web Docs - Array.prototype.find()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- [MDN Web Docs - Array.prototype.splice()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
