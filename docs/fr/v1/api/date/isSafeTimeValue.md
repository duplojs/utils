---
outline: [2, 3]
prev:
  text: "toTimeValue"
  link: "/fr/v1/api/date/toTimeValue"
next:
  text: "getTimezoneOffset"
  link: "/fr/v1/api/date/getTimezoneOffset"
---

# isSafeTimeValue

La fonction **`isSafeTimeValue()`** vérifie qu'une valeur de temps est un entier sûr compris strictement entre `minTimeValue` et `maxTimeValue`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/isSafeTimeValue/tryout.doc.ts"
  majorVersion="v1"
  height="240px"
/>

## Syntaxe

```typescript
function isSafeTimeValue(
	input: number
): boolean
```

## Paramètres

- `input` : Valeur numérique à valider.

## Valeur de retour

`true` si la valeur est un entier sûr et dans l'intervalle autorisé, sinon `false`.

## Voir aussi

- [`constants`](/fr/v1/api/date/constants)
- [`toTimeValue`](/fr/v1/api/date/toTimeValue)
