---
outline: [2, 3]
prev:
  text: "getFirstDayOfWeek"
  link: "/v1/api/date/getFirstDayOfWeek/fr"
next:
  text: "getFirstDayOfMonth"
  link: "/v1/api/date/getFirstDayOfMonth/fr"
---

# getLastDayOfWeek

La fonction **`getLastDayOfWeek()`** retourne le dimanche correspondant à la semaine du `TheDate` fourni.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/date/getLastDayOfWeek/examples/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
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

- [`getFirstDayOfWeek`](/v1/api/date/getFirstDayOfWeek/fr)
- [`getDayOfWeek`](/v1/api/date/getDayOfWeek/fr)

## Sources

- [ISO 8601 - Week dates](https://en.wikipedia.org/wiki/ISO_8601#Week_dates)
