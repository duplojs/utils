---
outline: [2, 3]
description: "La fonction toTimestamp() retourne le timestamp milliseconde d'un TheDate. Elle lève InvalidTheDateError si la valeur est incohérente."
prev:
  text: "toNative"
  link: "/fr/v1/api/date/toNative"
next:
  text: "toTimeValue"
  link: "/fr/v1/api/date/toTimeValue"
---

# toTimestamp

La fonction **`toTimestamp()`** retourne le timestamp milliseconde d'un `TheDate`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/toTimestamp/tryout.doc.ts"
  majorVersion="v1"
  height="145px"
/>

## Syntaxe

```typescript
function toTimestamp<
	GenericInput extends TheDate | SerializedTheDate
>(
	input: GenericInput
): number
```

## Paramètres

- `input` : Le `TheDate` à convertir.

## Valeur de retour

Le timestamp en millisecondes depuis le 1er janvier 1970 UTC.

## Voir aussi

- [`isSafeTimestamp`](/fr/v1/api/date/isSafeTimestamp)
- [`toNative`](/fr/v1/api/date/toNative)

## Sources

- [MDN Web Docs - Date.getTime()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime)
