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

`sort()` trie un tableau de primitives wrappées (`String`, `Number`, `Date`, `Time`) en `"ASC"` ou `"DSC"`. Supporte la version currifiée pour s'intégrer facilement dans un pipeline.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/operators/sort/tryout.doc.ts"
  majorVersion="v1"
  height="420px"
/>

## Syntaxe

### Signature classique

```typescript
function sort(
	input: readonly (String | Number | Date | Time | string | number | TheDate | TheTime)[], 
	type: SortType
): any[]
```

### Signature currifiée

```typescript
function sort(
	type: SortType
): (
	input: readonly (String | Number | Date | Time | string | number | TheDate | TheTime)[]
) => any[]
```

## Paramètres

- `input` : tableau de primitives (wrappées ou brutes).
- `type` : `"ASC"` ou `"DSC"`.

## Valeur de retour

Un nouveau tableau trié, dont les éléments sont **wrappés**.
