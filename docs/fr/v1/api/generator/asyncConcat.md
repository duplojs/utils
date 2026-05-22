---
outline: [2, 3]
description: "La fonction asyncConcat() concatène des itérables synchrones ou asynchrones dans un générateur asynchrone unique, dans l'ordre des entrées."
prev:
  text: "concat"
  link: "/fr/v1/api/generator/concat"
next:
  text: "flat"
  link: "/fr/v1/api/generator/flat"
---

# asyncConcat

La fonction **`asyncConcat()`** concatène des itérables synchrones ou asynchrones dans un générateur asynchrone unique, dans l'ordre des entrées.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/generator/asyncConcat/tryout.doc.ts"
  majorVersion="v1"
  height="380px"
/>

## Syntaxe

```typescript
function asyncConcat<
	const GenericElement extends unknown,
>(
	elements: AsyncIterable<GenericElement> | Iterable<GenericElement>,
): (
	iterator: AsyncIterable<GenericElement> | Iterable<GenericElement>
) => AsyncGenerator<GenericElement, void, unknown>;

function asyncConcat<
	const GenericElement extends unknown,
>(
	iterator: AsyncIterable<GenericElement> | Iterable<GenericElement>,
	elements: AsyncIterable<GenericElement> | Iterable<GenericElement>,
	...elementsRest: (AsyncIterable<GenericElement> | Iterable<GenericElement>)[]
): AsyncGenerator<GenericElement, void, unknown>;
```

## Paramètres

- `iterator` : Itérable source (synchrone ou asynchrone, style classique uniquement).
- `elements` : Itérable (synchrone ou asynchrone) ajouté à la fin.
- `elementsRest` : Itérables supplémentaires (synchrones ou asynchrones) ajoutés dans l'ordre.

## Valeur de retour

Un `AsyncGenerator` lazy qui émet les valeurs de toutes les entrées dans l'ordre.

## Voir aussi

- [`concat`](/fr/v1/api/generator/concat) - Version synchrone
- [`asyncFlat`](/fr/v1/api/generator/asyncFlat) - Aplatit des itérables imbriqués sync/async
- [`asyncMap`](/fr/v1/api/generator/asyncMap) - Transforme les valeurs de façon asynchrone
