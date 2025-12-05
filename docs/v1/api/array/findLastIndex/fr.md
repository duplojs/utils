---
outline: [2, 3]
prev:
  text: "findIndex"
  link: "/v1/api/array/findIndex/fr"
next:
  text: "every"
  link: "/v1/api/array/every/fr"
---

# findLastIndex

La méthode **`findLastIndex()`** retourne l'index du dernier élément d'un tableau qui satisfait une condition donnée.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/array/findLastIndex/examples/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntaxe

### Signature classique

```typescript
function findLastIndex<
	GenericInput extends readonly unknown[]
>(
	input: GenericInput, 
	predicate: (
		element: GenericInput[number], 
		params: ArrayFindLastIndexParams
	) => boolean
): number | undefined
```

### Signature currifiée

```typescript
function findLastIndex<
	GenericInput extends readonly unknown[]
>(
	predicate: (
		element: GenericInput[number], 
		params: ArrayFindLastIndexParams
	) => boolean
): (input: GenericInput) => number | undefined
```

### Paramètres auxiliaires

```typescript
interface ArrayFindLastIndexParams {
	index: number;
}
```

## Paramètres

- `input` : Le tableau dans lequel rechercher.
- `predicate` : Fonction de prédicat qui teste chaque élément. Reçoit l'élément et un objet contenant l'index.
- `params.index` : Position de l'élément en cours dans le tableau.

## Valeur de retour

L'index du dernier élément qui satisfait la condition, ou `undefined` si aucun élément ne correspond.

## Voir aussi

- [`findLast`](/v1/api/array/findLast/fr) - Retourne l'élément au lieu de l'index
- [`findIndex`](/v1/api/array/findIndex/fr) - Trouve l'index du premier élément

## Sources

- [MDN Web Docs - Array.findLastIndex()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex)
