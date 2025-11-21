---
outline: [2, 3]
prev:
  text: "some"
  link: "/v1/api/array/some/fr"
next:
  text: "map"
  link: "/v1/api/array/map/fr"
---

# is

La méthode **`is()`** vérifie si une valeur est un tableau (type guard).

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/array/is/examples/tryout.doc.ts"
  majorVersion="v1"
  height="400px"
/>

## Syntaxe

```typescript
function is<GenericValue extends unknown>(
	arg: GenericValue
): arg is GenericValue extends any[] ? GenericValue : never
```

## Paramètres

- `arg` : La valeur à tester.

## Valeur de retour

`true` si la valeur est un tableau, `false` sinon. Affine le type en tableau si `true`.

## Voir aussi

- [`from`](/v1/api/array/from/fr) - Crée un tableau à partir d'un itérable

## Sources

- [MDN Web Docs - Array.isArray()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
