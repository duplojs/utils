---
outline: [2, 3]
description: "La fonction getDayOfMonth() renvoie le jour du mois (1–31) pour un TheDate et un fuseau optionnel."
prev:
  text: "getMonth"
  link: "/fr/v1/api/date/getMonth"
next:
  text: "getDayOfWeek"
  link: "/fr/v1/api/date/getDayOfWeek"
---

# getDayOfMonth

La fonction **`getDayOfMonth()`** renvoie le jour du mois (1–31) pour un `TheDate` et un fuseau optionnel.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/getDayOfMonth/tryout.doc.ts"
  majorVersion="v1"
  height="208px"
/>

## Syntaxe

```typescript
function getDayOfMonth<
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

Jour du mois (1–31) dans le fuseau fourni.

## Voir aussi

- [`getDayOfWeek`](/fr/v1/api/date/getDayOfWeek)
- [`getFirstDayOfMonth`](/fr/v1/api/date/getFirstDayOfMonth)

## Sources

- [MDN Web Docs - Date.prototype.getUTCDate()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDate)
