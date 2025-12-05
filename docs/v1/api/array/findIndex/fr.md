---
outline: [2, 3]
prev:
  text: "findLast"
  link: "/v1/api/array/findLast/fr"
next:
  text: "findLastIndex"
  link: "/v1/api/array/findLastIndex/fr"
---

# findIndex

La méthode **`findIndex()`** retourne l'index du premier élément d'un tableau qui satisfait une condition donnée.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/array/findIndex/examples/tryout.doc.ts"
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

- [`find`](/v1/api/array/find/fr) - Retourne l'élément au lieu de l'index
- [`findLastIndex`](/v1/api/array/findLastIndex/fr) - Trouve l'index du dernier élément

## Sources

- [MDN Web Docs - Array.findIndex()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
