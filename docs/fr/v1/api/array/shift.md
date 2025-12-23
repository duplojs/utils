---
outline: [2, 3]
prev:
  text: "unshift"
  link: "/fr/v1/api/array/unshift"
next:
  text: "concat"
  link: "/fr/v1/api/array/concat"
---

# shift

La fonction **`shift()`** retire le premier élément d'un tableau et renvoie une copie raccourcie. Pour les tuples, le type est mis à jour exactement grâce à `ShiftTuple`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/array/shift/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
/>

## Syntaxe

```typescript
function shift<
	const GenericInput extends readonly unknown[]
>(
	input: GenericInput
): GenericInput extends AnyTuple ? ShiftTuple<GenericInput> : GenericInput
```

## Paramètres

- `input` : Tableau dont on veut retirer le premier élément.

## Valeur de retour

Un nouveau tableau sans son premier élément.

## Voir aussi

- [`unshift`](/fr/v1/api/array/unshift) - Ajoute des éléments en tête
- [`pop`](/fr/v1/api/array/pop) - Retire l'élément final

## Sources

- [MDN Web Docs - Array.prototype.shift()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)
