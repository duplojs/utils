---
outline: [2, 3]
prev:
  text: "toTimestamp"
  link: "/fr/v1/api/date/toTimestamp"
next:
  text: "isSafeTimeValue"
  link: "/fr/v1/api/date/isSafeTimeValue"
---

# toTimeValue

La fonction **`toTimeValue()`** convertit un `TheTime` ou un `SerializedTheTime` en valeur numérique (millisecondes). Elle applique les protections de `makeSafeTimeValue` : arrondi des décimales et clamp entre `minTimeValue` et `maxTimeValue`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/toTimeValue/tryout.doc.ts"
  majorVersion="v1"
  height="208px"
/>

## Syntaxe

```typescript
function toTimeValue<
	GenericInput extends TheTime | SerializedTheTime
>(
	input: GenericInput
): number
```

## Paramètres

- `input` : Durée au format `TheTime` ou `SerializedTheTime`.

## Valeur de retour

La valeur numérique en millisecondes, sécurisée selon les bornes `minTimeValue` et `maxTimeValue`.

## Voir aussi

- [`constants`](/fr/v1/api/date/constants)
- [`isSafeTimeValue`](/fr/v1/api/date/isSafeTimeValue)
- [`createTime`](/fr/v1/api/date/createTime)
