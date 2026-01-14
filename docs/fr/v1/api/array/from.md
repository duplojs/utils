---
outline: [2, 3]
description: "La méthode from() crée un tableau à partir d'un itérable, d'un objet array-like ou d'un itérable asynchrone."
prev:
  text: "Array"
  link: "/fr/v1/api/array/"
next:
  text: "toTuple"
  link: "/fr/v1/api/array/toTuple"
---

# from

La méthode **`from()`** crée un tableau à partir d'un itérable, d'un objet array-like ou d'un itérable asynchrone.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/array/from/tryout.doc.ts"
  majorVersion="v1"
  height="544px"
  :foldLines="[5,14,28]"
/>

## Syntaxe

```typescript
function from<
	const GenericInput extends (ArrayLike<unknown> | Iterable<unknown> | AsyncIterable<unknown>)
>(
	input: GenericInput
): GenericInput extends AsyncIterable<infer InferredValue> 
	? Promise<InferredValue[]> 
	: GenericInput extends Iterable<infer InferredValue> 
		? InferredValue[] 
		: GenericInput extends ArrayLike<infer InferredValue> 
			? InferredValue[] 
			: never
```

## Paramètres

- `input` : Un itérable, un objet array-like ou un itérable asynchrone à convertir en tableau.

## Valeur de retour

Un tableau contenant tous les éléments de l'itérable. Si l'entrée est un itérable asynchrone, retourne une Promise qui se résout en tableau.

## Voir aussi

- [`toTuple`](/fr/v1/api/array/toTuple) - Convertit un tableau en tuple avec typage strict

## Sources

- [MDN Web Docs - Array.from()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
