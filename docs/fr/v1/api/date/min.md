---
outline: [2, 3]
description: "La fonction min() retourne la date la plus ancienne d'un tuple de TheDate."
prev:
  text: "minTime"
  link: "/fr/v1/api/date/minTime"
next:
  text: "round"
  link: "/fr/v1/api/date/round"
---

# min

La fonction **`min()`** retourne la date la plus ancienne d'un tuple de `TheDate`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/min/tryout.doc.ts"
  majorVersion="v1"
  height="271px"
/>

## Syntaxe

```typescript
function min<
  GenericInput extends AnyTuple<TheDate | SerializedTheDate>
>(input: GenericInput): TheDate
```

## Paramètres

- `input` : Tuple de `TheDate` ou `SerializedTheDate`.

## Valeur de retour

La date minimale du tuple, sous forme de `TheDate`.

## Voir aussi

- [`max`](/fr/v1/api/date/max) - Retourne la date maximale
- [`sort`](/fr/v1/api/date/sort) - Trie un tableau de dates
