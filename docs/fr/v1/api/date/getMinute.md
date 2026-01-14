---
outline: [2, 3]
description: "La fonction getMinute() renvoie les minutes (0–59) d'un TheDate, avec un fuseau IANA optionnel."
prev:
  text: "getHour"
  link: "/fr/v1/api/date/getHour"
next:
  text: "getSecond"
  link: "/fr/v1/api/date/getSecond"
---

# getMinute

La fonction **`getMinute()`** renvoie les minutes (0–59) d'un `TheDate`, avec un fuseau IANA optionnel.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/getMinute/tryout.doc.ts"
  majorVersion="v1"
  height="208px"
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

- [`getHour`](/fr/v1/api/date/getHour)
- [`getSecond`](/fr/v1/api/date/getSecond)

## Sources

- [MDN Web Docs - Date.prototype.getUTCMinutes()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMinutes)
