---
outline: [2, 3]
description: "La fonction getMilliseconds() renvoie les millisecondes (0–999) d'un TheDate."
prev:
  text: "getSecond"
  link: "/fr/v1/api/date/getSecond"
next:
  text: "getFirstDayOfWeek"
  link: "/fr/v1/api/date/getFirstDayOfWeek"
---

# getMilliseconds

La fonction **`getMilliseconds()`** renvoie les millisecondes (0–999) d'un `TheDate`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/getMilliseconds/tryout.doc.ts"
  majorVersion="v1"
  height="250px"
/>

## Syntaxe

```typescript
function getMilliseconds<
	GenericInput extends TheDate | SerializedTheDate
>(
	input: GenericInput
): number
```

## Paramètres

- `input` : `TheDate` ou `SerializedTheDate`.

## Valeur de retour

Millisecondes de la date (0–999).

## Voir aussi

- [`getSecond`](/fr/v1/api/date/getSecond)
- [`toTimestamp`](/fr/v1/api/date/toTimestamp)

## Sources

- [MDN Web Docs - Date.prototype.getUTCMilliseconds()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMilliseconds)
