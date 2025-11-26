---
outline: [2, 3]
prev:
  text: "getDayOfWeek"
  link: "/v1/api/date/getDayOfWeek/fr"
next:
  text: "getDayOfYear"
  link: "/v1/api/date/getDayOfYear/fr"
---

# getWeekOfYear

La fonction **`getWeekOfYear()`** calcule le numéro de semaine ISO 8601 (1–53) pour un `TheDate`, avec un fuseau horaire optionnel.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/date/getWeekOfYear/examples/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Syntaxe

```typescript
function getWeekOfYear<
	GenericInput extends TheDate
>(
	input: GenericInput,
	timezone?: Timezone
): number
```

## Paramètres

- `input` : `TheDate` ciblé.
- `timezone` : (Optionnel) fuseau IANA.

## Valeur de retour

Un entier entre 1 et 53 correspondant à la semaine ISO.

## Voir aussi

- [`getDayOfYear`](/v1/api/date/getDayOfYear/fr)
- [`getDayOfWeek`](/v1/api/date/getDayOfWeek/fr)

## Sources

- [ISO 8601 - Week dates](https://en.wikipedia.org/wiki/ISO_8601#Week_dates)
