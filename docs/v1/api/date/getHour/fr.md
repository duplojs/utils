---
outline: [2, 3]
prev:
  text: "getDayOfYear"
  link: "/v1/api/date/getDayOfYear/fr"
next:
  text: "getMinute"
  link: "/v1/api/date/getMinute/fr"
---

# getHour

La fonction **`getHour()`** renvoie l'heure (0–23) d'un `TheDate`, ajustée selon un fuseau horaire optionnel.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/date/getHour/examples/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Syntaxe

```typescript
function getHour<
	GenericInput extends TheDate
>(
	input: GenericInput,
	timezone?: Timezone
): number
```

## Paramètres

- `input` : Date `TheDate`.
- `timezone` : Fuseau horaire (optionnel).

## Valeur de retour

Un entier entre 0 et 23.

## Voir aussi

- [`getMinute`](/v1/api/date/getMinute/fr)
- [`getSecond`](/v1/api/date/getSecond/fr)

## Sources

- [MDN Web Docs - Date.prototype.getUTCHours()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCHours)
