---
outline: [2, 3]
description: "La méthode mapTuple() transforme chaque élément d'un tableau tout en préservant la longueur d'un tuple au niveau du typage."
prev:
  text: "map"
  link: "/fr/v1/api/array/map"
next:
  text: "filter"
  link: "/fr/v1/api/array/filter"
---

# mapTuple

La méthode **`mapTuple()`** transforme chaque élément d'un tableau tout en préservant la longueur d'un tuple au niveau du typage.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/array/mapTuple/tryout.doc.ts"
  majorVersion="v1"
  height="481px"
/>

## Syntaxe

### Signature classique

```typescript
function mapTuple<
	GenericInput extends readonly unknown[],
	GenericOutput extends unknown
>(
	input: GenericInput,
	theFunction: (
		element: GenericInput[number],
		params: ArrayMapTupleParams<GenericInput>
	) => GenericOutput
): MapTuple<GenericInput, GenericOutput>
```

### Signature currifiée

```typescript
function mapTuple<
	GenericInput extends readonly unknown[],
	GenericOutput extends unknown
>(
	theFunction: (
		element: GenericInput[number],
		params: ArrayMapTupleParams<GenericInput>
	) => GenericOutput
): (input: GenericInput) => MapTuple<GenericInput, GenericOutput>
```

### Paramètres auxiliaires

```typescript
interface ArrayMapTupleParams<
	GenericInputTuple extends readonly unknown[]
> {
	index: number;
	self: GenericInputTuple;
}
```

## Paramètres

- `input` : Tableau ou tuple à transformer.
- `theFunction` : Fonction de mapping recevant l'élément courant, son index et le tableau source.

## Valeur de retour

Un nouveau tableau transformé. Si `input` est un tuple, la sortie garde la même longueur de tuple.

## Voir aussi

- [`map`](/fr/v1/api/array/map) - Transforme les valeurs d'un tableau générique
- [`filter`](/fr/v1/api/array/filter) - Filtre les valeurs selon un prédicat

## Sources

- [MDN Web Docs - Array.prototype.map()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
