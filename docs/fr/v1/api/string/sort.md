---
outline: [2, 3]
description: "La fonction sort() trie un tableau de chaînes en ordre croissant (ASC) ou décroissant (DSC) et retourne un nouveau tableau."
prev:
  text: "betweenThan"
  link: "/fr/v1/api/string/trimEnd"
next:
  text: "sortCompare"
  link: "/fr/v1/api/string/sortCompare"
---

# sort

La fonction **`sort()`** trie un tableau de chaînes en ordre croissant (`ASC`) ou décroissant (`DSC`) et retourne un nouveau tableau.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/string/sort/tryout.doc.ts"
  majorVersion="v1"
  height="145px"
/>

## Syntaxe

### Signature classique

```typescript
function sort<
  GenericArray extends readonly string[],
>(
  array: GenericArray,
  type: SortType,
): string[]
```

### Signature currifiée

```typescript
function sort<
  GenericArray extends readonly string[],
>(
  type: SortType,
): (array: GenericArray) => string[]
```

## Paramètres

- `array` : Tableau de chaînes à trier.
- `type` : Ordre de tri, `"ASC"` (croissant) ou `"DSC"` (décroissant).

## Valeur de retour

Un nouveau tableau de chaînes triées. Le tableau d'origine reste inchangé.

## Voir aussi

- [`concat`](/fr/v1/api/string/concat) - Concatène plusieurs chaînes
- [`split`](/fr/v1/api/string/split) - Découpe une chaîne en tableau
