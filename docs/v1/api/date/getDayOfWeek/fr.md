---
outline: [2, 3]
prev:
  text: "getDayOfMonth"
  link: "/v1/api/date/getDayOfMonth/fr"
next:
  text: "getWeekOfYear"
  link: "/v1/api/date/getWeekOfYear/fr"
---

# getDayOfWeek

La fonction **`getDayOfWeek()`** retourne le jour de la semaine d'un `TheDate` (1 = lundi, 7 = dimanche) en tenant compte d'un fuseau horaire optionnel.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/date/getDayOfWeek/examples/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Syntaxe

```typescript
function getDayOfWeek<GenericInput extends TheDate>(
	input: GenericInput,
	timezone?: Timezone
): number
```

## Paramètres

- `input` : `TheDate` cible.
- `timezone` : Fuseau horaire (optionnel).

## Valeur de retour

Un entier de 1 à 7 représentant le jour ISO.

## Voir aussi

- [`getWeekOfYear`](/v1/api/date/getWeekOfYear/fr)
- [`getFirstDayOfWeek`](/v1/api/date/getFirstDayOfWeek/fr)

## Sources

- [ISO 8601 - Jour de la semaine](https://en.wikipedia.org/wiki/ISO_8601#Week_dates)
