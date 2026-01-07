---
outline: [2, 3]
prev:
  text: "sort"
  link: "/fr/v1/api/date/sort"
next:
  text: "max"
  link: "/fr/v1/api/date/max"
---

# sortTimes

La fonction **`sortTimes()`** trie un tableau de `TheTime` selon l'ordre souhaité (`ASC` ou `DSC`) et retourne un nouveau tableau trié.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/sortTimes/tryout.doc.ts"
  majorVersion="v1"
  height="280px"
/>

## Syntaxe

### Signature classique

```typescript
function sortTimes<
  GenericArray extends readonly TheTime[],
>(
  array: GenericArray,
  type: SortType,
): TheTime[]
```

### Signature currifiée

```typescript
function sortTimes<
  GenericArray extends readonly TheTime[],
>(
  type: SortType,
): (array: GenericArray) => TheTime[]
```

## Paramètres

- `array` : Tableau de durées au format `TheTime`.
- `type` : Ordre de tri, `"ASC"` pour croissant, `"DSC"` pour décroissant.

## Valeur de retour

Un nouveau tableau contenant les mêmes durées triées. Le tableau d'origine reste inchangé.

## Voir aussi

- [`sort`](/fr/v1/api/date/sort) - Trie des dates
- [`max`](/fr/v1/api/date/max) - Retourne la date maximale d'un tuple
