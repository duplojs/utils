---
outline: [2, 3]
prev:
  text: "toNative"
  link: "/fr/v1/api/date/toNative"
next:
  text: "getTimezoneOffset"
  link: "/fr/v1/api/date/getTimezoneOffset"
---

# toTimestamp

La fonction **`toTimestamp()`** retourne le timestamp milliseconde d'un `TheDate` ou d'un `TheTime`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/toTimestamp/tryout.doc.ts"
  majorVersion="v1"
  height="280px"
/>

## Syntaxe

```typescript
function toTimestamp<
	GenericInput extends TheDate | TheTime
>(
	input: GenericInput
): number
```

## Paramètres

- `input` : La date ou la durée à convertir.

## Valeur de retour

Le timestamp en millisecondes depuis le 1er janvier 1970 UTC.

## Voir aussi

- [`isSafeTimestamp`](/fr/v1/api/date/isSafeTimestamp)
- [`toNative`](/fr/v1/api/date/toNative)

## Sources

- [MDN Web Docs - Date.getTime()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime)
