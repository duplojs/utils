---
outline: [2, 3]
description: "La fonction select() a un rôle proche de [filter](/fr/v1/api/array/filter), mais permet en plus de transformer les éléments conservés. Elle est particulièrement utile pour obtenir une discrimination de type côté sortie, sans devoir écrire un type guard explicite (la sortie est inférée à partir des valeurs passées à select())."
prev:
  text: "filter"
  link: "/fr/v1/api/array/filter"
next:
  text: "slice"
  link: "/fr/v1/api/array/slice"
---

# select

La fonction **`select()`** a un rôle proche de [`filter`](/fr/v1/api/array/filter), mais permet en plus de **transformer** les éléments conservés. Elle est particulièrement utile pour obtenir une **discrimination de type** côté sortie, sans devoir écrire un *type guard* explicite (la sortie est inférée à partir des valeurs passées à `select()`).

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/array/select/tryout.doc.ts"
  majorVersion="v1"
  height="985px"
  :foldLines="[8]"
/>

## Syntaxe

### Signature classique

```typescript
function select<
	GenericInput extends readonly unknown[],
	GenericSelect extends ArraySelectSelect,
>(
	input: GenericInput,
	theFunction: (
		params: ArraySelectParams<GenericInput>
	) => GenericSelect | ArraySelectSkip,
): GenericSelect["-select"][]
```

### Signature currifiée

```typescript
function select<
	GenericInput extends readonly unknown[],
	GenericSelect extends ArraySelectSelect,
>(
	theFunction: (
		params: ArraySelectParams<GenericInput>
	) => GenericSelect | ArraySelectSkip,
): (input: GenericInput) => GenericSelect["-select"][]
```

### Paramètres auxiliaires

```typescript
interface ArraySelectParams<
	GenericInputArray extends readonly unknown[],
> {
	element: GenericInputArray[number];
	index: number;
	self: GenericInputArray;
	skip(): ArraySelectSkip;
	select<GenericOutput extends unknown = unknown>(
		output: GenericOutput
	): ArraySelectSelect<GenericOutput>;
}
```

## Paramètres

- `input` : Le tableau à parcourir.
- `theFunction` : Fonction appelée pour chaque élément.
- `params.element` : L'élément courant.
- `params.index` : Index de l'élément courant.
- `params.self` : Le tableau complet.
- `params.skip()` : Ignore l'élément (n'ajoute rien au résultat).
- `params.select(output)` : Conserve l'élément en ajoutant `output` au résultat.

## Valeur de retour

Un nouveau tableau contenant uniquement les valeurs passées à `select()`, dans le même ordre que l'itération. Le typage de sortie est inféré comme une union des valeurs sélectionnées.

## Voir aussi

- [`filter`](/fr/v1/api/array/filter) - Conserve des éléments (sans transformation)
- [`map`](/fr/v1/api/array/map) - Transforme chaque élément (sans filtrage)
- [`flatMap`](/fr/v1/api/array/flatMap) - Transforme puis aplatit le résultat

