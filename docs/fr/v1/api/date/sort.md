---
outline: [2, 3]
prev:
  text: "betweenThanTime"
  link: "/fr/v1/api/date/betweenThanTime"
next:
  text: "sortTimes"
  link: "/fr/v1/api/date/sortTimes"
---

# sort

La fonction **`sort()`** trie un tableau de `TheDate` selon l'ordre souhaité (`ASC` ou `DSC`) et retourne un nouveau tableau trié.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/sort/tryout.doc.ts"
  majorVersion="v1"
  height="280px"
/>

## Syntaxe

### Signature classique

```typescript
function sort<
  GenericArray extends readonly TheDate[],
>(
  array: GenericArray,
  type: SortType,
): TheDate[]
```

### Signature currifiée

```typescript
function sort<
  GenericArray extends readonly TheDate[],
>(
  type: SortType,
): (array: GenericArray) => TheDate[]
```

## Paramètres

- `array` : Tableau de dates au format `TheDate`.
- `type` : Ordre de tri, `"ASC"` pour croissant, `"DSC"` pour décroissant.

## Valeur de retour

Un nouveau tableau contenant les mêmes dates triées. Le tableau d'origine reste inchangé.

## Voir aussi

- [`max`](/fr/v1/api/date/max) - Retourne la date maximale d'un tuple
- [`min`](/fr/v1/api/date/min) - Retourne la date minimale d'un tuple
- [`between`](/fr/v1/api/date/between) - Vérifie l'appartenance à un intervalle
