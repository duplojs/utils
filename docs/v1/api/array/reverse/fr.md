---
outline: [2, 3]
prev:
  text: "flatMap"
  link: "/v1/api/array/flatMap/fr"
next:
  text: "sort"
  link: "/v1/api/array/sort/fr"
---

# reverse

La méthode **`reverse()`** renvoie une copie d'un tableau avec les éléments dans l'ordre inverse, tout en laissant le tableau initial intact. Les tuples conservent un typage exact grâce à `ReverseTuple`.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/array/reverse/examples/tryout.doc.ts"
  majorVersion="v1"
  height="250px"
/>

## Syntaxe

```typescript
function reverse<
	GenericInput extends readonly unknown[]
>(
	input: GenericInput
): GenericInput extends AnyTuple ? ReverseTuple<GenericInput> : GenericInput
```

## Paramètres

- `input` : Le tableau dont on souhaite inverser l'ordre.

## Valeur de retour

Un nouveau tableau contenant les mêmes éléments mais en ordre inverse. Lorsque l'entrée est un tuple, le résultat reflète exactement la nouvelle disposition des éléments.

## Voir aussi

- [`sort`](/v1/api/array/sort/fr) - Trie un tableau via une fonction de comparaison
- [`map`](/v1/api/array/map/fr) - Transforme chaque élément indépendamment

## Sources

- [MDN Web Docs - Array.prototype.reverse()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
