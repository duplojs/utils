---
outline: [2, 3]
prev:
  text: "dateMax"
  link: "/v1/api/clean/dateMax/fr"
next:
  text: "Clean"
  link: "/v1/api/clean/fr"
---

# sort

`sort()` trie un tableau de primitives wrappées (`String`, `Number`, `Date`) en `"ASC"` ou `"DSC"`. Supporte la version currifiée pour s'intégrer facilement dans un pipeline.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/clean/sort/examples/tryout.doc.ts"
  majorVersion="v1"
  height="420px"
/>

## Syntaxe

### Signature classique

```typescript
function sort(
	input: readonly (String | Number | Date | string | number | TheDate)[], 
	type: SortType
): any[]
```

### Signature currifiée

```typescript
function sort(
	type: SortType
): (
	input: readonly (String | Number | Date | string | number | TheDate)[]
) => any[]
```

## Paramètres

- `input` : tableau de primitives (wrappées ou brutes).
- `type` : `"ASC"` ou `"DSC"`.

## Valeur de retour

Un nouveau tableau trié, dont les éléments sont **wrappés**.

## Voir aussi

- [`primitives`](/v1/api/clean/primitives/fr)
