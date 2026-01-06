---
outline: [2, 3]
prev:
  text: "sortTimes"
  link: "/fr/v1/api/date/sortTimes"
next:
  text: "min"
  link: "/fr/v1/api/date/min"
---

# max

La fonction **`max()`** retourne la date la plus récente d'un tuple de `TheDate`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/max/tryout.doc.ts"
  majorVersion="v1"
  height="240px"
/>

## Syntaxe

```typescript
function max<
  GenericInput extends AnyTuple<TheDate>
>(input: GenericInput): TheDate
```

## Paramètres

- `input` : Tuple de dates au format `TheDate`.

## Valeur de retour

La date maximale du tuple, sous forme de `TheDate`.

## Voir aussi

- [`min`](/fr/v1/api/date/min) - Retourne la date minimale
- [`sort`](/fr/v1/api/date/sort) - Trie un tableau de dates
