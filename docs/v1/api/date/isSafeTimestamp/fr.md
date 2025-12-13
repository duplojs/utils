---
outline: [2, 3]
prev:
  text: "toISOString"
  link: "/v1/api/date/toISOString/fr"
next:
  text: "is"
  link: "/v1/api/date/is/fr"
---

# isSafeTimestamp

La fonction **`isSafeTimestamp()`** vérifie qu'un timestamp est compris entre `minTimestamp` et `maxTimestamp`, limites imposées par le moteur JavaScript.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/date/isSafeTimestamp/examples/tryout.doc.ts"
  majorVersion="v1"
  height="280px"
/>

## Syntaxe

```typescript
function isSafeTimestamp(
	input: number
): boolean
```

## Paramètres

- `input` : Timestamp en millisecondes.

## Valeur de retour

`true` si la valeur est exploitable par `Date`, sinon `false`.

## Voir aussi

- [`constants`](/v1/api/date/constants/fr)
- [`createOrThrow`](/v1/api/date/createOrThrow/fr)

## Sources

- [MDN Web Docs - Date](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date)
