---
outline: [2, 3]
description: "La fonction toNative() convertit des valeurs TheDate/TheTime vers Date/number natifs JavaScript."
prev:
  text: "tomorrow"
  link: "/fr/v1/api/date/tomorrow"
next:
  text: "toTimestamp"
  link: "/fr/v1/api/date/toTimestamp"
---

# toNative

La fonction **`toNative()`** convertit des valeurs date/temps vers leur représentation JavaScript native.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/toNative/tryout.doc.ts"
  majorVersion="v1"
  height="271px"
/>

## Syntaxe

```typescript
function toNative<
	GenericInput extends TheDate | SerializedTheDate
>(
	input: GenericInput
): Date

function toNative<
	GenericInput extends TheTime | SerializedTheTime
>(
	input: GenericInput
): number
```

## Paramètres

- `input` : Une valeur parmi `TheDate`, `SerializedTheDate`, `TheTime` ou `SerializedTheTime`.

## Valeur de retour

- `Date` pour les entrées date.
- `number` pour les entrées temps.

## Voir aussi

- [`toTimestamp`](/fr/v1/api/date/toTimestamp)
- [`toTimeValue`](/fr/v1/api/date/toTimeValue)
- [`toISOString`](/fr/v1/api/date/toISOString)

## Sources

- [MDN Web Docs - Date](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date)
