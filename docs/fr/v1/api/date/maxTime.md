---
outline: [2, 3]
prev:
  text: "max"
  link: "/fr/v1/api/date/max"
next:
  text: "minTime"
  link: "/fr/v1/api/date/minTime"
---

# maxTime

La fonction **`maxTime()`** retourne la plus grande durée d'un tuple de `TheTime`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/maxTime/tryout.doc.ts"
  majorVersion="v1"
  height="208px"
/>

## Syntaxe

```typescript
function maxTime<
  GenericInput extends AnyTuple<TheTime | SerializedTheTime>
>(input: GenericInput): TheTime
```

## Paramètres

- `input` : Tuple de `TheTime` ou `SerializedTheTime`.

## Valeur de retour

La durée maximale du tuple, sous forme de `TheTime`.

## Voir aussi

- [`minTime`](/fr/v1/api/date/minTime)
