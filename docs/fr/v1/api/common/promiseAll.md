---
outline: [2, 3]
description: "La fonction promiseAll() résout toutes les valeurs d'un tuple ou d'un iterable, avec un typage précis sur les tuples."
prev:
  text: "callThen"
  link: "/fr/v1/api/common/callThen"
next:
  text: "promiseObject"
  link: "/fr/v1/api/common/promiseObject"
---

# promiseAll

La fonction **`promiseAll()`** résout toutes les valeurs d'un tuple ou d'un iterable, en conservant un typage précis pour les tuples.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/promiseAll/tryout.doc.ts"
  majorVersion="v1"
  height="607px"
/>

## Syntaxe

```typescript
function promiseAll<
	const GenericInput extends AnyTuple | Iterable<unknown>
>(
	input: GenericInput,
): GenericInput extends AnyTuple
	? Promise<{ -readonly [Prop in keyof GenericInput]: Awaited<GenericInput[Prop]>; }>
	: GenericInput extends Iterable<infer InferredValue>
		? Promise<Awaited<InferredValue>>[]
		: never;
```

## Paramètres

- `input` : Tuple ou iterable contenant des promesses, des valeurs directes, ou un mélange des deux.

## Valeur de retour

- Si `input` est un tuple, retourne une `Promise` d'un tuple résolu avec conservation de la structure.
- Si `input` est un iterable, retourne le résultat résolu de `Promise.all(...)` typé à partir des éléments itérables.

## Voir aussi

- [`callThen`](/fr/v1/api/common/callThen) - Applique un callback sur une valeur sync ou async
- [`promiseObject`](/fr/v1/api/common/promiseObject) - Résout un objet de promesses
- [`asyncPipe`](/fr/v1/api/common/asyncPipe) - Chaîne des transformations asynchrones
