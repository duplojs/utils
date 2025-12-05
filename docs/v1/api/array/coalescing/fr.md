---
outline: [2, 3]
prev:
  text: "findAndSpliceReplace"
  link: "/v1/api/array/findAndSpliceReplace/fr"
next:
  text: "Array"
  link: "/v1/api/array/fr"
---

# coalescing

La fonction **`coalescing()`** prend une valeur ou un tableau et le normalise en tableau. Si la valeur n'est pas déjà un tableau, elle est enveloppée dans un tableau.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/array/coalescing/examples/tryout.doc.ts"
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

- [`find`](/v1/api/array/find/fr) - Localise un élément répondant à un prédicat
- [`coalesce` (Number)](/v1/api/number/fr) - Pour d'autres types scalaires

## Sources

- [MDN Web Docs - Nullish coalescing operator](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)