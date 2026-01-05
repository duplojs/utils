---
outline: [2, 3]
description: "La méthode findIndex() retourne l'index du premier élément d'un tableau qui satisfait une condition donnée."
prev:
  text: "findLast"
  link: "/fr/v1/api/array/findLast"
next:
  text: "findLastIndex"
  link: "/fr/v1/api/array/findLastIndex"
---

# findIndex

La méthode **`findIndex()`** retourne l'index du premier élément d'un tableau qui satisfait une condition donnée.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/array/findIndex/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntaxe

### Signature classique

```typescript
function findIndex<
	GenericInput extends readonly unknown[]
>(
	input: GenericInput, 
	predicate: (
		element: GenericInput[number], 
		params: ArrayFindIndexParams
	) => boolean
): number | undefined
```

### Signature currifiée

```typescript
function findIndex<
	GenericInput extends readonly unknown[]
>(
	predicate: (
		element: GenericInput[number], 
		params: ArrayFindIndexParams
	) => boolean
): (input: GenericInput) => number | undefined
```

### Paramètres auxiliaires

```typescript
interface ArrayFindIndexParams {
	index: number;
}
```

## Paramètres

- `input` : Le tableau dans lequel rechercher.
- `predicate` : Fonction de prédicat qui teste chaque élément. Reçoit l'élément et un objet contenant l'index.
- `params.index` : Position de l'élément en cours dans le tableau.

## Valeur de retour

L'index du premier élément qui satisfait la condition, ou `undefined` si aucun élément ne correspond.

## Voir aussi

- [`find`](/fr/v1/api/array/find) - Retourne l'élément au lieu de l'index
- [`findLastIndex`](/fr/v1/api/array/findLastIndex) - Trouve l'index du dernier élément

## Sources

- [MDN Web Docs - Array.findIndex()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
