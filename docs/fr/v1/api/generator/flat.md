---
outline: [2, 3]
description: "La fonction flat() aplatit les itérables imbriqués dans un générateur unique. Par défaut, un seul niveau est déroulé, avec une profondeur configurable."
prev:
  text: "asyncConcat"
  link: "/fr/v1/api/generator/asyncConcat"
next:
  text: "asyncFlat"
  link: "/fr/v1/api/generator/asyncFlat"
---

# flat

La fonction **`flat()`** aplatit les itérables imbriqués dans un générateur unique. Par défaut, un seul niveau est déroulé, avec une profondeur configurable.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/generator/flat/tryout.doc.ts"
  majorVersion="v1"
  height="502px"
/>

## Syntaxe

```typescript
function flat<
	const GenericValue extends unknown,
	const GenericDepth extends number = 1,
>(
	iterator: Iterable<GenericValue>,
	depth?: GenericDepth,
): Generator<FlatIterator<GenericValue, GenericDepth>, void, unknown>
```

## Paramètres

- `iterator` : Itérable à aplatir.
- `depth` : Nombre de niveaux à dérouler. Par défaut `1`.

## Valeur de retour

Un `Generator` qui émet les valeurs aplaties de manière lazy. Les valeurs non itérables sont retournées telles quelles.

## Voir aussi

- [`asyncFlat`](/fr/v1/api/generator/asyncFlat) - Version asynchrone de l'aplatissement
- [`map`](/fr/v1/api/generator/map) - Transforme les éléments d'un générateur
- [`chunk`](/fr/v1/api/generator/chunk) - Regroupe les éléments en blocs
