---
outline: [2, 3]
description: "La fonction concat() concatène plusieurs itérables dans un seul générateur, en conservant l'ordre des entrées."
prev:
  text: "asyncMap"
  link: "/fr/v1/api/generator/asyncMap"
next:
  text: "asyncConcat"
  link: "/fr/v1/api/generator/asyncConcat"
---

# concat

La fonction **`concat()`** concatène plusieurs itérables dans un seul générateur, en conservant l'ordre des entrées.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/generator/concat/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntaxe

```typescript
function concat<
	const GenericElement extends unknown,
>(
	elements: Iterable<GenericElement>,
): (
	iterator: Iterable<GenericElement>
) => Generator<GenericElement, unknown, unknown>;

function concat<
	const GenericElement extends unknown,
>(
	iterator: Iterable<GenericElement>,
	elements: Iterable<GenericElement>,
	...elementsRest: Iterable<GenericElement>[]
): Generator<GenericElement, unknown, unknown>;
```

## Paramètres

- `iterator` : Itérable source (style classique uniquement).
- `elements` : Itérable ajouté à la fin.
- `elementsRest` : Itérables supplémentaires ajoutés dans l'ordre.

## Valeur de retour

Un `Generator` lazy qui émet les valeurs de `iterator`, puis `elements`, puis `elementsRest` dans l'ordre.

## Voir aussi

- [`asyncConcat`](/fr/v1/api/generator/asyncConcat) - Version asynchrone compatible `AsyncIterable`
- [`flat`](/fr/v1/api/generator/flat) - Aplatit des itérables imbriqués
- [`map`](/fr/v1/api/generator/map) - Transforme chaque valeur émise
