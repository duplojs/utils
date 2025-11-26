---
outline: [2, 3]
prev:
  text: "getMilliseconds"
  link: "/v1/api/date/getMilliseconds/fr"
next:
  text: "getLastDayOfWeek"
  link: "/v1/api/date/getLastDayOfWeek/fr"
---

# getFirstDayOfWeek

La fonction **`getFirstDayOfWeek()`** retourne le lundi correspondant à la semaine du `TheDate` fourni.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/date/getFirstDayOfWeek/examples/tryout.doc.ts"
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

- [`getLastDayOfWeek`](/v1/api/date/getLastDayOfWeek/fr)
- [`getDayOfWeek`](/v1/api/date/getDayOfWeek/fr)

## Sources

- [ISO 8601 - Week dates](https://en.wikipedia.org/wiki/ISO_8601#Week_dates)
