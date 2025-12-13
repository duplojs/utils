---
outline: [2, 3]
prev:
  text: "flat"
  link: "/v1/api/array/flat/fr"
next:
  text: "chunk"
  link: "/v1/api/array/chunk/fr"
---

# flatMap

La méthode **`flatMap()`** applique une fonction de transformation sur chaque élément puis aplati automatiquement le résultat d'un niveau. Elle combine donc `map()` et `flat(1)` en une seule étape.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/array/flatMap/examples/tryout.doc.ts"
  majorVersion="v1"
  height="550px"
  :foldLines="[2]"
/>

## Syntaxe

### Signature classique

```typescript
function flatMap<
	GenericInput extends readonly unknown[],
	GenericOutput extends unknown
>(
	input:  GenericInput,
	theFunction: (
		element: GenericInput[number],
		params: ArrayFlatMapParams<GenericInput>
	) => GenericOutput
): FlatArray<GenericOutput, 1>[]
```

### Signature currifiée

```typescript
function flatMap<
	GenericInput extends readonly unknown[],
	GenericOutput extends unknown
>(
	theFunction: (
		element: GenericInput[number],
		params: ArrayFlatMapParams<GenericInput>
	) => GenericOutput
): (input: GenericInput) => FlatArray<GenericOutput, 1>[]
```

### Paramètres auxiliaires

```typescript
interface ArrayFlatMapParams<
	GenericInputArray extends readonly unknown[]
> {
	index: number;
	self: GenericInputArray;
}
```

## Paramètres

- `input` : Le tableau source.
- `theFunction` : Fonction appliquée sur chaque élément. Elle retourne un tableau (ou une valeur) qui sera aplati d'un niveau.
- `params.index` : Position de l'élément courant.
- `params.self` : Le tableau complet (pratique pour comparer la longueur ou accéder aux voisins pendant la transformation).

## Valeur de retour

Un nouveau tableau avec les valeurs transformées et aplaties sur un niveau. Les tuples d'entrée conservent un typage précis grâce à `FlatArray`.

## Voir aussi

- [`map`](/v1/api/array/map/fr) - Applique une fonction à chaque élément
- [`flat`](/v1/api/array/flat/fr) - Aplati un tableau imbriqué

## Sources

- [MDN Web Docs - Array.prototype.flatMap()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)
