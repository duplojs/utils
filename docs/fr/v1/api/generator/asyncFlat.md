---
outline: [2, 3]
description: "La fonction asyncFlat() aplatit des itérables synchrones ou asynchrones imbriqués dans un générateur asynchrone unique. La profondeur d'aplatissement est configurable."
prev:
  text: "flat"
  link: "/fr/v1/api/generator/flat"
next:
  text: "filter"
  link: "/fr/v1/api/generator/filter"
---

# asyncFlat

La fonction **`asyncFlat()`** aplatit des itérables synchrones ou asynchrones imbriqués dans un générateur asynchrone unique. La profondeur d'aplatissement est configurable.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/generator/asyncFlat/tryout.doc.ts"
  majorVersion="v1"
  height="502px"
/>

## Syntaxe

```typescript
function asyncFlat<
	const GenericValue extends unknown,
	const GenericDepth extends number = 1,
>(
	iterator: AsyncIterable<GenericValue> | Iterable<GenericValue>,
	depth?: GenericDepth,
): AsyncGenerator<FlatAsyncIterator<GenericValue, GenericDepth>, void, unknown>
```

## Paramètres

- `iterator` : Itérable synchrone ou asynchrone à aplatir.
- `depth` : Nombre de niveaux à dérouler. Par défaut `1`.

## Valeur de retour

Un `AsyncGenerator` qui émet les valeurs aplaties de manière lazy. Les itérables synchrones imbriqués dans une source asynchrone sont aussi pris en charge.

## Voir aussi

- [`flat`](/fr/v1/api/generator/flat) - Version synchrone de l'aplatissement
- [`asyncMap`](/fr/v1/api/generator/asyncMap) - Transforme un générateur avec une fonction asynchrone
- [`asyncFilter`](/fr/v1/api/generator/asyncFilter) - Filtre un générateur avec un prédicat asynchrone
