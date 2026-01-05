---
outline: [2, 3]
description: "La fonction getYear() retourne l'année correspondant à un TheDate. Un fuseau horaire IANA peut être fourni pour ajuster le résultat."
prev:
  text: "isTime"
  link: "/fr/v1/api/date/isTime"
next:
  text: "getMonth"
  link: "/fr/v1/api/date/getMonth"
---

# getYear

La fonction **`getYear()`** retourne l'année correspondant à un `TheDate`. Un fuseau horaire IANA peut être fourni pour ajuster le résultat.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/getYear/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Syntaxe

```typescript
function getYear<
	GenericInput extends TheDate
>(
	input: GenericInput,
	timezone?: Timezone
): number
```

## Paramètres

- `input` : Date immuable `TheDate`.
- `timezone` : (Optionnel) Fuseau horaire IANA (voir `date/types/timezone`).

## Valeur de retour

L'année (entier) correspondant à la date dans le fuseau demandé.

## Voir aussi

- [`getMonth`](/fr/v1/api/date/getMonth)
- [`getDayOfMonth`](/fr/v1/api/date/getDayOfMonth)

## Sources

- [MDN Web Docs - Date.prototype.getUTCFullYear()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear)
