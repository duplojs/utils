---
outline: [2, 3]
prev:
  text: "Array"
  link: "/v1/api/array/fr"
next:
  text: "toTuple"
  link: "/v1/api/array/toTuple/fr"
---

# from

La méthode **`from()`** crée un tableau à partir d'un itérable, d'un objet array-like ou d'un itérable asynchrone.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/array/from/examples/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntaxe

```typescript
function from<
	const GenericArray extends (ArrayLike<unknown> | Iterable<unknown> | AsyncIterable<unknown>)
>(
	input: GenericArray
): GenericArray extends AsyncIterable<infer InferredValue> 
	? Promise<InferredValue[]> 
	: GenericArray extends Iterable<infer InferredValue> 
		? InferredValue[] 
		: GenericArray extends ArrayLike<infer InferredValue> 
			? InferredValue[] 
			: never
```

## Paramètres

- `input` : Un itérable, un objet array-like ou un itérable asynchrone à convertir en tableau.

## Valeur de retour

Un tableau contenant tous les éléments de l'itérable. Si l'entrée est un itérable asynchrone, retourne une Promise qui se résout en tableau.

## Voir aussi

- [`toTuple`](/v1/api/array/toTuple/fr) - Convertit un tableau en tuple avec typage strict

## Sources

- [MDN Web Docs - Array.from()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
