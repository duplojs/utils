---
outline: [2, 3]
description: "La fonction getDayOfYear() retourne le jour de l'année (1–366) pour un TheDate, en tenant compte d'un fuseau horaire optionnel."
prev:
  text: "getWeekOfYear"
  link: "/fr/v1/api/date/getWeekOfYear"
next:
  text: "getHour"
  link: "/fr/v1/api/date/getHour"
---

# getDayOfYear

La fonction **`getDayOfYear()`** retourne le jour de l'année (1–366) pour un `TheDate`, en tenant compte d'un fuseau horaire optionnel.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/getDayOfYear/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Syntaxe

```typescript
function getDayOfYear<
	GenericInput extends TheDate
>(
	input: GenericInput,
	timezone?: Timezone
): number
```

## Paramètres

- `input` : `TheDate` cible.
- `timezone` : Fuseau horaire (optionnel).

## Valeur de retour

Un entier entre 1 et 366.

## Voir aussi

- [`getWeekOfYear`](/fr/v1/api/date/getWeekOfYear)
- [`getDayOfMonth`](/fr/v1/api/date/getDayOfMonth)

## Sources

- [MDN Web Docs - Date](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date)
