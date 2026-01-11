---
outline: [2, 3]
description: "La méthode every() vérifie si tous les éléments d'un tableau satisfont une condition donnée."
prev:
  text: "findLastIndex"
  link: "/fr/v1/api/array/findLastIndex"
next:
  text: "some"
  link: "/fr/v1/api/array/some"
---

# every

La méthode **`every()`** vérifie si tous les éléments d'un tableau satisfont une condition donnée.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/array/every/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntaxe

### Signature classique

```typescript
function every<
	GenericInput extends readonly unknown[]
>(
	input: GenericInput, 
	predicate: (
		element: GenericInput[number], 
		params: ArrayEveryParams<GenericInput>
	) => boolean
): boolean
```

### Signature currifiée

```typescript
function every<
	GenericInput extends readonly unknown[]
>(
predicate: (
	element: GenericInput[number], 
	params: ArrayEveryParams<GenericInput>
) => boolean
): (input: GenericInput) => boolean
```

### Paramètres auxiliaires

```typescript
interface ArrayEveryParams<
	GenericInputArray extends readonly unknown[]
> {
	index: number;
	self: GenericInputArray;
}
```

## Paramètres

- `input` : Le tableau à tester.
- `predicate` : Fonction de prédicat qui teste chaque élément. Reçoit l'élément, son index et le tableau complet.
- `params.index` : Position de l'élément courant.
- `params.self` : Le tableau complet (pratique pour comparer ou consulter un voisin).

## Valeur de retour

`true` si tous les éléments satisfont la condition, `false` sinon.

## Voir aussi

- [`some`](/fr/v1/api/array/some) - Vérifie si au moins un élément satisfait une condition
- [`find`](/fr/v1/api/array/find) - Trouve le premier élément qui satisfait une condition

## Sources

- [MDN Web Docs - Array.every()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
