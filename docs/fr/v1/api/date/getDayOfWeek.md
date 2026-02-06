---
outline: [2, 3]
description: "La fonction getDayOfWeek() retourne le jour de la semaine (0 = dimanche, 6 = samedi) pour un TheDate ou un SerializedTheDate."
prev:
  text: "getDayOfMonth"
  link: "/fr/v1/api/date/getDayOfMonth"
next:
  text: "getWeekOfYear"
  link: "/fr/v1/api/date/getWeekOfYear"
---

# getDayOfWeek

La fonction **`getDayOfWeek()`** retourne le jour de la semaine (0 = dimanche, 6 = samedi) pour un `TheDate` ou un `SerializedTheDate`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/getDayOfWeek/tryout.doc.ts"
  majorVersion="v1"
  height="208px"
/>

## Syntaxe

```typescript
function getDayOfWeek<
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

Un entier de 0 à 6 (`0` = dimanche, `1` = lundi, ..., `6` = samedi).

## Voir aussi

- [`getWeekOfYear`](/fr/v1/api/date/getWeekOfYear)
- [`getFirstDayOfWeek`](/fr/v1/api/date/getFirstDayOfWeek)

## Sources

- [ISO 8601 - Jour de la semaine](https://en.wikipedia.org/wiki/ISO_8601#Week_dates)
