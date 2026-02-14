---
outline: [2, 3]
description: "La méthode is() vérifie si une valeur est un tableau (type guard)."
prev:
  text: "some"
  link: "/fr/v1/api/array/some"
next:
  text: "map"
  link: "/fr/v1/api/array/map"
---

# is

La méthode **`is()`** vérifie si une valeur est un tableau (type guard).

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/array/is/tryout.doc.ts"
  majorVersion="v1"
  height="271px"
/>

## Syntaxe

```typescript
function is<
	GenericInput extends unknown
>(
	input: GenericInput
): input is Extract<GenericValue, readonly any[]>
```

## Paramètres

- `input` : La valeur à tester.

## Valeur de retour

`true` si la valeur est un tableau, `false` sinon. Affine le type en tableau si `true`.

## Voir aussi

- [`from`](/fr/v1/api/array/from) - Crée un tableau à partir d'un itérable

## Sources

- [MDN Web Docs - Array.isArray()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
