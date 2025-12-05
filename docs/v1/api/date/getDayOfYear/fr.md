---
outline: [2, 3]
prev:
  text: "getWeekOfYear"
  link: "/v1/api/date/getWeekOfYear/fr"
next:
  text: "getHour"
  link: "/v1/api/date/getHour/fr"
---

# getDayOfYear

La fonction **`getDayOfYear()`** retourne le jour de l'année (1–366) pour un `TheDate`, en tenant compte d'un fuseau horaire optionnel.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/date/getDayOfYear/examples/tryout.doc.ts"
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

- [`getWeekOfYear`](/v1/api/date/getWeekOfYear/fr)
- [`getDayOfMonth`](/v1/api/date/getDayOfMonth/fr)

## Sources

- [MDN Web Docs - Date](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date)
