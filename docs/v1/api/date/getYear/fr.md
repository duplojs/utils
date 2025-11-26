---
outline: [2, 3]
prev:
  text: "isSafeTimestamp"
  link: "/v1/api/date/isSafeTimestamp/fr"
next:
  text: "getMonth"
  link: "/v1/api/date/getMonth/fr"
---

# getYear

La fonction **`getYear()`** retourne l'année correspondant à un `TheDate`. Un fuseau horaire IANA peut être fourni pour ajuster le résultat.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/date/getYear/examples/tryout.doc.ts"
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

- [`getMonth`](/v1/api/date/getMonth/fr)
- [`getDayOfMonth`](/v1/api/date/getDayOfMonth/fr)

## Sources

- [MDN Web Docs - Date.prototype.getUTCFullYear()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear)
