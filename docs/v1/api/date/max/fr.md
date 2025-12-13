---
outline: [2, 3]
prev:
  text: "sort"
  link: "/v1/api/date/sort/fr"
next:
  text: "min"
  link: "/v1/api/date/min/fr"
---

# max

La fonction **`max()`** retourne la date la plus récente d'un tuple de `TheDate`.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/date/max/examples/tryout.doc.ts"
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

- [`min`](/v1/api/date/min/fr) - Retourne la date minimale
- [`sort`](/v1/api/date/sort/fr) - Trie un tableau de dates
