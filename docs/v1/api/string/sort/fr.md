---
outline: [2, 3]
prev:
  text: "betweenThan"
  link: "/v1/api/string/trimEnd/fr"
next:
  text: "concat"
  link: "/v1/api/string/concat/fr"
---

# sort

La fonction **`sort()`** trie un tableau de chaînes en ordre croissant (`ASC`) ou décroissant (`DSC`) et retourne un nouveau tableau.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/string/sort/examples/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
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

- [`concat`](/v1/api/string/concat/fr) - Concatène plusieurs chaînes
- [`split`](/v1/api/string/split/fr) - Découpe une chaîne en tableau
