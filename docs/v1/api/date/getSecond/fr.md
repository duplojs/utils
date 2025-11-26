---
outline: [2, 3]
prev:
  text: "getMinute"
  link: "/v1/api/date/getMinute/fr"
next:
  text: "getMilliseconds"
  link: "/v1/api/date/getMilliseconds/fr"
---

# getSecond

La fonction **`getSecond()`** renvoie les secondes (0–59) d'un `TheDate`, ajustées par un fuseau horaire optionnel.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/date/getSecond/examples/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Syntaxe

```typescript
function getSecond<GenericInput extends TheDate>(
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

- [`getMinute`](/v1/api/date/getMinute/fr)
- [`getMilliseconds`](/v1/api/date/getMilliseconds/fr)

## Sources

- [MDN Web Docs - Date.prototype.getUTCSeconds()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCSeconds)
