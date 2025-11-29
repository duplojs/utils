---
outline: [2, 3]
prev:
  text: "unshift"
  link: "/v1/api/array/unshift/fr"
next:
  text: "concat"
  link: "/v1/api/array/concat/fr"
---

# shift

La fonction **`shift()`** retire le premier élément d'un tableau et renvoie une copie raccourcie. Pour les tuples, le type est mis à jour exactement grâce à `ShiftTuple`.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/array/shift/examples/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
/>

## Syntaxe

```typescript
function shift<const GenericArray extends readonly unknown[]>(
	array: GenericArray
): GenericArray extends AnyTuple ? ShiftTuple<GenericArray> : GenericArray
```

## Paramètres

- `array` : Tableau dont on veut retirer le premier élément.

## Valeur de retour

Un nouveau tableau sans son premier élément.

## Voir aussi

- [`unshift`](/v1/api/array/unshift/fr) - Ajoute des éléments en tête
- [`pop`](/v1/api/array/pop/fr) - Retire l'élément final

## Sources

- [MDN Web Docs - Array.prototype.shift()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)
