---
outline: [2, 3]
prev:
  text: "getMonth"
  link: "/v1/api/date/getMonth/fr"
next:
  text: "getDayOfWeek"
  link: "/v1/api/date/getDayOfWeek/fr"
---

# getDayOfMonth

La fonction **`getDayOfMonth()`** renvoie le jour du mois (1–31) pour un `TheDate` et un fuseau optionnel.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/date/getDayOfMonth/examples/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Syntaxe

```typescript
function getDayOfMonth<
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

Jour du mois (1–31) dans le fuseau fourni.

## Voir aussi

- [`getDayOfWeek`](/v1/api/date/getDayOfWeek/fr)
- [`getFirstDayOfMonth`](/v1/api/date/getFirstDayOfMonth/fr)

## Sources

- [MDN Web Docs - Date.prototype.getUTCDate()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDate)
