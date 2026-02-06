---
outline: [2, 3]
prev:
  text: "timeMax"
  link: "/fr/v1/api/clean/primitives/operators/timeMax"
next:
  text: "Clean"
  link: "/fr/v1/api/clean/"
---

# sort

`sort()` trie un tableau de primitives (`String`, `Number`, `Date` ou `Time`) en `"ASC"` ou `"DSC"`. Le tableau doit rester homogène par famille de primitive, mais peut mixer version wrappée et brute. Supporte la version currifiée pour s'intégrer facilement dans un pipeline.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/operators/sort/tryout.doc.ts"
  majorVersion="v1"
  height="420px"
/>

## Syntaxe

### Signature classique

```typescript
function sort<
	GenericInput extends Primitives
>(
	input: GenericInput, 
	type: SortType
): ToWrappedValue<GenericInput[number]>[]
```

`GenericInput` représente un tableau homogène de l'une des familles suivantes : `Date | TheDate`, `Time | TheTime`, `Number | number`, `String | string`.

### Signature currifiée

```typescript
function sort<
	GenericInput extends Primitives
>(
	type: SortType
): (
	input: GenericInput
) => ToWrappedValue<GenericInput[number]>[]
```

## Paramètres

- `input` : tableau homogène de primitives (wrappées ou brutes) d'une même famille.
- `type` : `"ASC"` ou `"DSC"`.

## Valeur de retour

Un nouveau tableau trié, dont les éléments sont **wrappés**.
