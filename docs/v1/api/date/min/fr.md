---
outline: [2, 3]
prev:
  text: "max"
  link: "/v1/api/date/max/fr"
next:
  text: "round"
  link: "/v1/api/date/round/fr"
---

# min

La fonction **`min()`** retourne la date la plus ancienne d'un tuple de `TheDate`.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/date/min/examples/tryout.doc.ts"
  majorVersion="v1"
  height="240px"
/>

## Syntaxe

```typescript
function min<
  GenericInput extends AnyTuple<TheDate>
>(input: GenericInput): TheDate
```

## Paramètres

- `input` : Tuple de dates au format `TheDate`.

## Valeur de retour

La date minimale du tuple, sous forme de `TheDate`.

## Voir aussi

- [`max`](/v1/api/date/max/fr) - Retourne la date maximale
- [`sort`](/v1/api/date/sort/fr) - Trie un tableau de dates
