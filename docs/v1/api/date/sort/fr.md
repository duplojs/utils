---
outline: [2, 3]
prev:
  text: "betweenThan"
  link: "/v1/api/date/betweenThan/fr"
next:
  text: "max"
  link: "/v1/api/date/max/fr"
---

# sort

La fonction **`sort()`** trie un tableau de `TheDate` selon l'ordre souhaité (`ASC` ou `DSC`) et retourne un nouveau tableau trié.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/date/sort/examples/tryout.doc.ts"
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

- [`max`](/v1/api/date/max/fr) - Retourne la date maximale d'un tuple
- [`min`](/v1/api/date/min/fr) - Retourne la date minimale d'un tuple
- [`between`](/v1/api/date/between/fr) - Vérifie l'appartenance à un intervalle
