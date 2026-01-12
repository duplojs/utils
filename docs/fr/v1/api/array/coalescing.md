---
outline: [2, 3]
description: "La fonction coalescing() prend une valeur ou un tableau et le normalise en tableau. Si la valeur n'est pas déjà un tableau, elle est enveloppée dans un tableau."
prev:
  text: "findAndSpliceReplace"
  link: "/fr/v1/api/array/findAndSpliceReplace"
next:
  text: "Array"
  link: "/fr/v1/api/array/"
---

# coalescing

La fonction **`coalescing()`** prend une valeur ou un tableau et le normalise en tableau. Si la valeur n'est pas déjà un tableau, elle est enveloppée dans un tableau.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/array/coalescing/tryout.doc.ts"
  majorVersion="v1"
  height="400px"
/>

## Syntaxe
```typescript
function coalescing<
	GenericInput extends AnyValue
>(
	input: GenericInput
): ArrayCoalescing<GenericInput>
```

`ArrayCoalescing` retourne un tableau si l'entrée n'en est pas une, ou conserve le tableau d'entrée. Cela permet de garantir que le résultat est toujours un tableau.

## Paramètres

- `input` : Une valeur ou un tableau de valeurs.

## Valeur de retour

Un tableau. Si `input` est déjà un tableau, il est retourné tel quel. Sinon, la valeur est enveloppée dans un tableau.

## Voir aussi

- [`find`](/fr/v1/api/array/find) - Localise un élément répondant à un prédicat
- [`coalesce` (Number)](/fr/v1/api/number/) - Pour d'autres types scalaires

## Sources

- [MDN Web Docs - Nullish coalescing operator](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)