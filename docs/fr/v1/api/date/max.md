---
outline: [2, 3]
description: "La fonction max() retourne la date la plus récente d'un tuple de TheDate."
prev:
  text: "sortTimes"
  link: "/fr/v1/api/date/sortTimes"
next:
  text: "maxTime"
  link: "/fr/v1/api/date/maxTime"
---

# max

La fonction **`max()`** retourne la date la plus récente d'un tuple de `TheDate`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/max/tryout.doc.ts"
  majorVersion="v1"
  height="271px"
/>

## Syntaxe

```typescript
function max<
  GenericInput extends AnyTuple<TheDate | SerializedTheDate>
>(input: GenericInput): TheDate
```

## Paramètres

- `input` : Tuple de `TheDate` ou `SerializedTheDate`.

## Valeur de retour

La date maximale du tuple, sous forme de `TheDate`.

## Voir aussi

- [`min`](/fr/v1/api/date/min) - Retourne la date minimale
- [`sort`](/fr/v1/api/date/sort) - Trie un tableau de dates
