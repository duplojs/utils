---
outline: [2, 3]
prev:
  text: "find"
  link: "/v1/api/array/find/fr"
next:
  text: "findIndex"
  link: "/v1/api/array/findIndex/fr"
---

# findLast

La méthode **`findLast()`** retourne le dernier élément d'un tableau qui satisfait une condition donnée.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/array/findLast/examples/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntaxe

### Signature classique

```typescript
// Type Guard
function findLast<
	GenericInput extends readonly unknown[],
	GenericOutput extends GenericInput[number]
>(
	input: GenericInput, 
	predicate: (
		element: GenericInput[number], 
		params: ArrayFindLastParams
	) => element is GenericOutput
): GenericOutput | undefined

// Boolean
function findLast<
	GenericInput extends readonly unknown[]
>(
	input: GenericInput, 
	predicate: (
		element: GenericInput[number], 
		params: ArrayFindLastParams
	) => boolean
): GenericInput[number] | undefined
```

### Signature currifiée

```typescript
// Type Guard
function findLast<
	GenericInput extends readonly unknown[],
	GenericOutput extends GenericInput[number]
>(
	predicate: (
		element: GenericInput[number], 
		params: ArrayFindLastParams
	) => element is GenericOutput
): (input: GenericInput) => GenericOutput | undefined

// Boolean
function findLast<
	GenericInput extends readonly unknown[]
>(
	predicate: (
		element: GenericInput[number], 
		params: ArrayFindLastParams
	) => boolean
): (input: GenericInput) => GenericInput[number] | undefined
```

### Paramètres auxiliaires

```typescript
interface ArrayFindLastParams {
	index: number;
}
```

## Paramètres

- `input` : Le tableau dans lequel rechercher.
- `predicate` : Fonction de prédicat qui teste chaque élément (et peut agir en type guard). Reçoit l'élément et un objet contenant l'index.
- `params.index` : Position de l'élément en cours dans le tableau.

## Valeur de retour

Le dernier élément qui satisfait la condition, ou `undefined` si aucun élément ne correspond.

## Voir aussi

- [`find`](/v1/api/array/find/fr) - Trouve le premier élément qui satisfait une condition
- [`findLastIndex`](/v1/api/array/findLastIndex/fr) - Retourne l'index au lieu de l'élément

## Sources

- [MDN Web Docs - Array.findLast()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast)
