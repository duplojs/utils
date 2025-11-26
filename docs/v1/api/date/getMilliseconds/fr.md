---
outline: [2, 3]
prev:
  text: "getSecond"
  link: "/v1/api/date/getSecond/fr"
next:
  text: "getFirstDayOfWeek"
  link: "/v1/api/date/getFirstDayOfWeek/fr"
---

# getMilliseconds

La fonction **`getMilliseconds()`** renvoie les millisecondes (0–999) d'un `TheDate`.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/date/getMilliseconds/examples/tryout.doc.ts"
  majorVersion="v1"
  height="280px"
/>

## Syntaxe

```typescript
function getMilliseconds<
	GenericInput extends TheDate
>(
	input: GenericInput
): number
```

## Paramètres

- `input` : Date `TheDate`.

## Valeur de retour

Millisecondes de la date (0–999).

## Voir aussi

- [`getSecond`](/v1/api/date/getSecond/fr)
- [`toTimestamp`](/v1/api/date/toTimestamp/fr)

## Sources

- [MDN Web Docs - Date.prototype.getUTCMilliseconds()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMilliseconds)
