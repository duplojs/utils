---
outline: [2, 3]
description: "La méthode some() vérifie si au moins un élément d'un tableau satisfait une condition donnée."
prev:
  text: "every"
  link: "/fr/v1/api/array/every"
next:
  text: "is"
  link: "/fr/v1/api/array/is"
---

# some

La méthode **`some()`** vérifie si au moins un élément d'un tableau satisfait une condition donnée.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/array/some/tryout.doc.ts"
  majorVersion="v1"
  height="313px"
/>

## Syntaxe

### Signature classique

```typescript
function some<
	GenericInput extends readonly unknown[]
>(
	input: GenericInput, 
	predicate: (
		element: GenericInput[number], 
		params: ArraySomeParams<GenericInput>
	) => boolean
): boolean
```

### Signature currifiée

```typescript
function some<
	GenericInput extends readonly unknown[]
>(
predicate: (
	element: GenericInput[number], 
	params: ArraySomeParams<GenericInput>
) => boolean
): (array: GenericInput) => boolean
```

### Paramètres auxiliaires

```typescript
interface ArraySomeParams<
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
- `params.self` : Le tableau complet (utile pour comparer la position ou accéder à un voisin).

## Valeur de retour

`true` si au moins un élément satisfait la condition, `false` sinon.

## Voir aussi

- [`every`](/fr/v1/api/array/every) - Vérifie si tous les éléments satisfont une condition
- [`find`](/fr/v1/api/array/find) - Trouve le premier élément qui satisfait une condition

## Sources

- [MDN Web Docs - Array.some()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
