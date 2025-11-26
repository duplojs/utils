---
outline: [2, 3]
prev:
  text: "getHour"
  link: "/v1/api/date/getHour/fr"
next:
  text: "getSecond"
  link: "/v1/api/date/getSecond/fr"
---

# getMinute

La fonction **`getMinute()`** renvoie les minutes (0–59) d'un `TheDate`, avec un fuseau IANA optionnel.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/date/getMinute/examples/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Syntaxe

```typescript
function getMinute<
	GenericInput extends TheDate
>(
	input: GenericInput,
	timezone?: Timezone
): number
```

## Paramètres

- `input` : `TheDate` cible.
- `timezone` : Fuseau horaire (optionnel).

## Valeur de retour

Minute (0–59).

## Voir aussi

- [`getHour`](/v1/api/date/getHour/fr)
- [`getSecond`](/v1/api/date/getSecond/fr)

## Sources

- [MDN Web Docs - Date.prototype.getUTCMinutes()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMinutes)
