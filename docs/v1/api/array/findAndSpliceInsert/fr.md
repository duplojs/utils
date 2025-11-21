---
outline: [2, 3]
prev:
  text: "findAndSpliceDelete"
  link: "/v1/api/array/findAndSpliceDelete/fr"
next:
  text: "findAndSpliceReplace"
  link: "/v1/api/array/findAndSpliceReplace/fr"
---

# findAndSpliceInsert

La fonction **`findAndSpliceInsert()`** cherche le premier élément qui satisfait un prédicat et insère un tableau d'éléments à cet endroit sans supprimer l'élément trouvé.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/array/findAndSpliceInsert/examples/tryout.doc.ts"
  majorVersion="v1"
  height="330px"
/>

## Syntaxe

### Signature classique

```typescript
function findAndSpliceInsert<GenericElement>(
	array: readonly GenericElement[],
	predicate: (
		element: GenericElement,
		params: { index: number }
	) => boolean,
	elements: GenericElement[]
): GenericElement[] | undefined
```

### Signature currifiée

```typescript
function findAndSpliceInsert<GenericElement>(
	predicate: (
		element: GenericElement,
		params: { index: number }
	) => boolean,
	elements: GenericElement[]
): (array: readonly GenericElement[]) => GenericElement[] | undefined
```

## Paramètres

- `array` : Tableau d'origine.
- `predicate` : Fonction déterminant où insérer.
- `elements` : Tableau d'éléments à insérer avant l'élément trouvé.

## Valeur de retour

Un nouveau tableau avec les éléments insérés ou `undefined` si la condition n'est jamais satisfaite.

## Voir aussi

- [`findAndSpliceDelete`](/v1/api/array/findAndSpliceDelete/fr)
- [`findAndSpliceReplace`](/v1/api/array/findAndSpliceReplace/fr)

## Sources

- [MDN Web Docs - Array.prototype.find()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- [MDN Web Docs - Array.prototype.splice()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
