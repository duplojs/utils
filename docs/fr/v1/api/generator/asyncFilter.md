---
outline: [2, 3]
prev:
  text: "filter"
  link: "/fr/v1/api/generator/filter"
next:
  text: "chunk"
  link: "/fr/v1/api/generator/chunk"
---

# asyncFilter

La fonction **`asyncFilter()`** filtre les éléments d'un générateur selon un prédicat asynchrone. Retourne un générateur asynchrone contenant uniquement les éléments qui satisfont la condition.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/generator/asyncFilter/tryout.doc.ts"
  majorVersion="v1"
  height="450px"
/>

## Syntaxe

### Signature classique avec type guard

```typescript
function asyncFilter<
	GenericElement extends unknown,
	GenericOutput extends GenericElement,
>(
	iterator: Iterable<GenericElement> | AsyncIterable<GenericElement>,
	predicate: (
		item: GenericElement, 
		params: AsyncGeneratorFilterParams
	) => item is GenericOutput
): AsyncGenerator<GenericOutput, unknown, unknown>
```

### Signature classique avec boolean

```typescript
function asyncFilter<
	GenericElement extends unknown,
>(
	iterator: Iterable<GenericElement> | AsyncIterable<GenericElement>,
	predicate: (
		item: GenericElement, 
		params: AsyncGeneratorFilterParams
	) => boolean
): AsyncGenerator<GenericElement, unknown, unknown>
```

### Signature currifiée

```typescript
function asyncFilter<
	GenericElement extends unknown,
>(
	predicate: (
		item: GenericElement, 
		params: AsyncGeneratorFilterParams
	) => boolean
): (
	iterator: Iterable<GenericElement> | AsyncIterable<GenericElement>
) => AsyncGenerator<GenericElement, unknown, unknown>
```

## Paramètres

- `iterator` : Le générateur (synchrone ou asynchrone) à filtrer
- `predicate` : Fonction asynchrone de filtrage qui reçoit :
  - `item` : L'élément courant
  - `params.index` : L'index de l'élément

## Valeur de retour

Un `AsyncGenerator` contenant les éléments filtrés.

## Voir aussi

- [`filter`](/fr/v1/api/generator/filter) - Version synchrone de asyncFilter
- [`asyncMap`](/fr/v1/api/generator/asyncMap) - Transforme avec une fonction asynchrone
- [`asyncReduce`](/fr/v1/api/generator/asyncReduce) - Réduit avec une fonction asynchrone

## Sources

- [MDN Web Docs - Async iterators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of)
