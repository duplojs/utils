---
outline: [2, 3]
prev:
  text: "getYear"
  link: "/v1/api/date/getYear/fr"
next:
  text: "getDayOfMonth"
  link: "/v1/api/date/getDayOfMonth/fr"
---

# getMonth

La fonction **`getMonth()`** renvoie le mois (1–12) correspondant à un `TheDate`, avec prise en charge optionnelle d'un fuseau horaire IANA.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/date/getMonth/examples/tryout.doc.ts"
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

- [`getDayOfMonth`](/v1/api/date/getDayOfMonth/fr)
- [`getYear`](/v1/api/date/getYear/fr)

## Sources

- [MDN Web Docs - Date.prototype.getUTCMonth()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMonth)
