---
outline: [2, 3]
prev:
  text: "toNative"
  link: "/v1/api/date/toNative/fr"
next:
  text: "toISOString"
  link: "/v1/api/date/toISOString/fr"
---

# toTimestamp

La fonction **`toTimestamp()`** retourne le timestamp milliseconde d'un `TheDate`. Elle lève `InvalidTheDateError` si la valeur est incohérente.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/date/toTimestamp/examples/tryout.doc.ts"
  majorVersion="v1"
  height="280px"
/>

## Syntaxe

```typescript
function toTimestamp<
	GenericInput extends TheDate
>(
	input: GenericInput
): number
```

## Paramètres

- `input` : La date à convertir.

## Valeur de retour

Le timestamp en millisecondes depuis le 1er janvier 1970 UTC.

## Voir aussi

- [`isSafeTimestamp`](/v1/api/date/isSafeTimestamp/fr)
- [`toNative`](/v1/api/date/toNative/fr)

## Sources

- [MDN Web Docs - Date.getTime()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime)
