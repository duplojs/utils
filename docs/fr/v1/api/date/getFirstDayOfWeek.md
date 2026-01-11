---
outline: [2, 3]
description: "La fonction getFirstDayOfWeek() retourne le lundi correspondant à la semaine du TheDate fourni."
prev:
  text: "getMilliseconds"
  link: "/fr/v1/api/date/getMilliseconds"
next:
  text: "getLastDayOfWeek"
  link: "/fr/v1/api/date/getLastDayOfWeek"
---

# getFirstDayOfWeek

La fonction **`getFirstDayOfWeek()`** retourne le lundi correspondant à la semaine du `TheDate` fourni.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/getFirstDayOfWeek/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntaxe

```typescript
function getFirstDayOfWeek(
	input: TheDate
): TheDate
```

## Paramètres

- `input` : Date `TheDate` dont on veut connaître le premier jour de la semaine.

## Valeur de retour

Un `TheDate` représentant le lundi de la même semaine.

## Voir aussi

- [`getLastDayOfWeek`](/fr/v1/api/date/getLastDayOfWeek)
- [`getDayOfWeek`](/fr/v1/api/date/getDayOfWeek)

## Sources

- [ISO 8601 - Week dates](https://en.wikipedia.org/wiki/ISO_8601#Week_dates)
