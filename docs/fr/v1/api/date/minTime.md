---
outline: [2, 3]
prev:
  text: "maxTime"
  link: "/fr/v1/api/date/maxTime"
next:
  text: "min"
  link: "/fr/v1/api/date/min"
---

# minTime

La fonction **`minTime()`** retourne la plus petite durée d'un tuple de `TheTime`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/minTime/tryout.doc.ts"
  majorVersion="v1"
  height="208px"
/>

## Syntaxe

```typescript
function minTime<
  GenericInput extends AnyTuple<TheTime | SerializedTheTime>
>(input: GenericInput): TheTime
```

## Paramètres

- `input` : Tuple de `TheTime` ou `SerializedTheTime`.

## Valeur de retour

La durée minimale du tuple, sous forme de `TheTime`.

## Voir aussi

- [`maxTime`](/fr/v1/api/date/maxTime)
