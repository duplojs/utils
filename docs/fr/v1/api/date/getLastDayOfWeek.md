---
outline: [2, 3]
description: "La fonction getLastDayOfWeek() retourne le dimanche correspondant à la semaine du TheDate fourni."
prev:
  text: "getFirstDayOfWeek"
  link: "/fr/v1/api/date/getFirstDayOfWeek"
next:
  text: "getFirstDayOfMonth"
  link: "/fr/v1/api/date/getFirstDayOfMonth"
---

# getLastDayOfWeek

La fonction **`getLastDayOfWeek()`** retourne le dimanche correspondant à la semaine du `TheDate` fourni.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/getLastDayOfWeek/tryout.doc.ts"
  majorVersion="v1"
  height="145px"
/>

## Syntaxe

```typescript
function getLastDayOfWeek(
	input: TheDate
): TheDate
```

## Paramètres

- `input` : Date `TheDate` cible.

## Valeur de retour

Un `TheDate` représentant le dimanche de la même semaine.

## Voir aussi

- [`getFirstDayOfWeek`](/fr/v1/api/date/getFirstDayOfWeek)
- [`getDayOfWeek`](/fr/v1/api/date/getDayOfWeek)

## Sources

- [ISO 8601 - Week dates](https://en.wikipedia.org/wiki/ISO_8601#Week_dates)
