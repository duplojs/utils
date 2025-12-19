---
outline: [2, 3]
prev:
  text: "getDayOfWeek"
  link: "/fr/v1/api/date/getDayOfWeek"
next:
  text: "getDayOfYear"
  link: "/fr/v1/api/date/getDayOfYear"
---

# getWeekOfYear

La fonction **`getWeekOfYear()`** calcule le numéro de semaine ISO 8601 (1–53) pour un `TheDate`, avec un fuseau horaire optionnel.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/getWeekOfYear/tryout.doc.ts"
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

- [`getDayOfYear`](/fr/v1/api/date/getDayOfYear)
- [`getDayOfWeek`](/fr/v1/api/date/getDayOfWeek)

## Sources

- [ISO 8601 - Week dates](https://en.wikipedia.org/wiki/ISO_8601#Week_dates)
