---
outline: [2, 3]
description: "La méthode map() applique une fonction de transformation sur chaque élément d'un tableau et retourne un nouveau tableau contenant les résultats, sans modifier l'entrée."
prev:
  text: "is"
  link: "/fr/v1/api/array/is"
next:
  text: "filter"
  link: "/fr/v1/api/array/filter"
---

# map

La méthode **`map()`** applique une fonction de transformation sur chaque élément d'un tableau et retourne un nouveau tableau contenant les résultats, sans modifier l'entrée.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/array/map/tryout.doc.ts"
  majorVersion="v1"
  height="229px"
/>

## Syntaxe

### Signature classique

```typescript
function map<
	GenericInput extends readonly unknown[],
	GenericOutput extends unknown
>(
	input: GenericInput,
	theFunction: (
		element: GenericInput[number],
		params: ArrayMapParams<GenericInput>
	) => GenericOutput
): GenericOutput[]
```

### Signature currifiée

```typescript
function map<
	GenericInput extends readonly unknown[],
	GenericOutput extends unknown
>(
	theFunction: (
		element: GenericInput[number],
		params: ArrayMapParams<GenericInput>
	) => GenericOutput
): (input: GenericInput) => GenericOutput[]
```

### Paramètres auxiliaires

```typescript
interface ArrayMapParams<
	GenericInputArray extends readonly unknown[]
> {
	index: number;
	self: GenericInputArray;
}
```

## Paramètres

- `input` : Le tableau à transformer.
- `theFunction` : Fonction appliquée à chaque élément. Elle reçoit l'élément courant et un objet fournissant l'index et le tableau complet.
- `params.index` : Position de l'élément en cours dans le tableau source.
- `params.self` : Le tableau complet (pratique pour comparer la position courante ou accéder aux voisins).

## Valeur de retour

Un nouveau tableau contenant les valeurs retournées par la fonction de transformation. Le tableau original n'est jamais modifié.

## Voir aussi

- [`filter`](/fr/v1/api/array/filter) - Filtre les éléments selon une condition
- [`flatMap`](/fr/v1/api/array/flatMap) - Transforme puis aplatit le résultat d'un niveau

## Sources

- [MDN Web Docs - Array.prototype.map()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
