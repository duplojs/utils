---
outline: [2, 3]
prev:
  text: "toISOString"
  link: "/fr/v1/api/date/toISOString"
next:
  text: "is"
  link: "/fr/v1/api/date/is"
---

# isSafeTimestamp

La fonction **`isSafeTimestamp()`** vérifie qu'un timestamp est compris entre `minTimestamp` et `maxTimestamp`, limites imposées par le moteur JavaScript.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/isSafeTimestamp/tryout.doc.ts"
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

- [`constants`](/fr/v1/api/date/constants)
- [`createOrThrow`](/fr/v1/api/date/createOrThrow)

## Sources

- [MDN Web Docs - Date](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date)
