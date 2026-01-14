---
outline: [2, 3]
description: "La fonction getSecond() renvoie les secondes (0–59) d'un TheDate, ajustées par un fuseau horaire optionnel."
prev:
  text: "getMinute"
  link: "/fr/v1/api/date/getMinute"
next:
  text: "getMilliseconds"
  link: "/fr/v1/api/date/getMilliseconds"
---

# getSecond

La fonction **`getSecond()`** renvoie les secondes (0–59) d'un `TheDate`, ajustées par un fuseau horaire optionnel.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/getSecond/tryout.doc.ts"
  majorVersion="v1"
  height="208px"
/>

## Syntaxe

```typescript
function getSecond<
	GenericInput extends TheDate
>(
	input: GenericInput,
	timezone?: Timezone
): number
```

## Paramètres

- `input` : `TheDate` cible.
- `timezone` : Fuseau IANA (optionnel).

## Valeur de retour

Secondes entre 0 et 59.

## Voir aussi

- [`getMinute`](/fr/v1/api/date/getMinute)
- [`getMilliseconds`](/fr/v1/api/date/getMilliseconds)

## Sources

- [MDN Web Docs - Date.prototype.getUTCSeconds()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCSeconds)
