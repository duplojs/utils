---
outline: [2, 3]
description: "La fonction getFirstDayOfWeek() retourne le lundi de la semaine pour un TheDate ou un SerializedTheDate."
prev:
  text: "getMilliseconds"
  link: "/fr/v1/api/date/getMilliseconds"
next:
  text: "getLastDayOfWeek"
  link: "/fr/v1/api/date/getLastDayOfWeek"
---

# getFirstDayOfWeek

La fonction **`getFirstDayOfWeek()`** retourne le lundi correspondant à la semaine du `TheDate` ou `SerializedTheDate` fourni.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/getFirstDayOfWeek/tryout.doc.ts"
  majorVersion="v1"
  height="145px"
/>

## Syntaxe

```typescript
function getFirstDayOfWeek<
	GenericInput extends TheDate | SerializedTheDate
>(
	input: GenericInput
): TheDate
```

## Paramètres

- `input` : `TheDate` ou `SerializedTheDate`.

## Valeur de retour

Un `TheDate` représentant le lundi de la même semaine, normalisé à `00:00:00.000` en UTC.

## Voir aussi

- [`getLastDayOfWeek`](/fr/v1/api/date/getLastDayOfWeek)
- [`getDayOfWeek`](/fr/v1/api/date/getDayOfWeek)

## Sources

- [ISO 8601 - Week dates](https://en.wikipedia.org/wiki/ISO_8601#Week_dates)
