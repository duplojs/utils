---
outline: [2, 3]
description: "La fonction getHour() renvoie l'heure (0–23) d'un TheDate, ajustée selon un fuseau horaire optionnel."
prev:
  text: "getDayOfYear"
  link: "/fr/v1/api/date/getDayOfYear"
next:
  text: "getMinute"
  link: "/fr/v1/api/date/getMinute"
---

# getHour

La fonction **`getHour()`** renvoie l'heure (0–23) d'un `TheDate`, ajustée selon un fuseau horaire optionnel.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/getHour/tryout.doc.ts"
  majorVersion="v1"
  height="208px"
/>

## Syntaxe

```typescript
function getHour<
	GenericInput extends TheDate | SerializedTheDate
>(
	input: GenericInput,
	timezone: Timezone = "UTC"
): number
```

## Paramètres

- `input` : `TheDate` ou `SerializedTheDate`.
- `timezone` : Fuseau horaire IANA. Par défaut : `"UTC"`.

## Valeur de retour

Un entier entre 0 et 23.

## Voir aussi

- [`getMinute`](/fr/v1/api/date/getMinute)
- [`getSecond`](/fr/v1/api/date/getSecond)

## Sources

- [MDN Web Docs - Date.prototype.getUTCHours()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCHours)
