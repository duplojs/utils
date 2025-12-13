---
outline: [2, 3]
prev:
  text: "isLastIndex"
  link: "/v1/api/array/isLastIndex/fr"
next:
  text: "findLast"
  link: "/v1/api/array/findLast/fr"
---

# find

La méthode **`find()`** retourne le premier élément d'un tableau qui satisfait une condition donnée.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/array/find/examples/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntaxe

### Signature classique

```typescript
// Type Guard
function find<
	GenericInput extends readonly unknown[],
	GenericOutput extends GenericInput[number]
>(
	input: GenericInput, 
	predicate: (
		element: GenericInput[number], 
		params: ArrayFindParams
	) => element is GenericOutput
): GenericOutput | undefined

// Boolean
function find<
	GenericInput extends readonly unknown[]
>(
	input: GenericInput, 
	predicate: (
		element: GenericInput[number], 
		params: ArrayFindParams
	) => boolean
): GenericInput[number] | undefined
```

### Signature currifiée

```typescript
// Type Guard
function find<
	GenericInput extends readonly unknown[],
	GenericOutput extends GenericInput[number]
>(
	predicate: (
		element: GenericInput[number], 
		params: ArrayFindParams
	) => element is GenericOutput
): (input: GenericInput) => GenericOutput | undefined

// Boolean
function find<
	GenericInput extends readonly unknown[]
>(
	predicate: (
		element: GenericInput[number], 
		params: ArrayFindParams
	) => boolean
): (input: GenericInput) => GenericInput[number] | undefined
```

### Paramètres auxiliaires

```typescript
interface ArrayFindParams {
	index: number;
}
```

## Paramètres

- `input` : Le tableau dans lequel rechercher.
- `predicate` : Fonction de prédicat qui teste chaque élément (et peut servir de type guard). Reçoit l'élément et un objet contenant l'index.
- `params.index` : Position de l'élément en cours dans le tableau.

## Valeur de retour

Le premier élément qui satisfait la condition, ou `undefined` si aucun élément ne correspond.

## Voir aussi

- [`findLast`](/v1/api/array/findLast/fr) - Trouve le dernier élément qui satisfait une condition
- [`findIndex`](/v1/api/array/findIndex/fr) - Retourne l'index au lieu de l'élément

## Sources

- [MDN Web Docs - Array.find()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
