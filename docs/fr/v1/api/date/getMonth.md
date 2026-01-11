---
outline: [2, 3]
description: "La fonction getMonth() renvoie le mois (1–12) correspondant à un TheDate, avec prise en charge optionnelle d'un fuseau horaire IANA."
prev:
  text: "getYear"
  link: "/fr/v1/api/date/getYear"
next:
  text: "getDayOfMonth"
  link: "/fr/v1/api/date/getDayOfMonth"
---

# getMonth

La fonction **`getMonth()`** renvoie le mois (1–12) correspondant à un `TheDate`, avec prise en charge optionnelle d'un fuseau horaire IANA.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/getMonth/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Syntaxe

```typescript
function getMonth<
	GenericInput extends TheDate
>(
	input: GenericInput,
	timezone?: Timezone
): number
```

## Paramètres

- `input` : `TheDate` à analyser.
- `timezone` : (Optionnel) fuseau IANA.

## Valeur de retour

Un entier compris entre 1 et 12 (janvier = 1).

## Voir aussi

- [`getDayOfMonth`](/fr/v1/api/date/getDayOfMonth)
- [`getYear`](/fr/v1/api/date/getYear)

## Sources

- [MDN Web Docs - Date.prototype.getUTCMonth()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMonth)
