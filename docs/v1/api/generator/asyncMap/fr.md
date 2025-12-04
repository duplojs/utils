---
outline: [2, 3]
prev:
  text: "map"
  link: "/v1/api/generator/map/fr"
next:
  text: "filter"
  link: "/v1/api/generator/filter/fr"
---

# asyncMap

La fonction **`asyncMap()`** transforme chaque élément d'un générateur en appliquant une fonction de transformation asynchrone. Retourne un générateur asynchrone avec les valeurs transformées.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/generator/asyncMap/examples/tryout.doc.ts"
  majorVersion="v1"
  height="400px"
/>

## Syntaxe

### Signature classique

```typescript
function asyncMap<
	const GenericInput extends unknown,
	const GenericOutput extends unknown,
>(
	iterator: AsyncIterable<GenericInput> | Iterable<GenericInput>,
	theFunction: (arg: GenericInput, params: AsyncGeneratorMapParams) => Promise<GenericOutput>
): AsyncGenerator<GenericOutput, unknown, unknown>
```

### Signature currifiée

```typescript
function asyncMap<
	const GenericInput extends unknown,
	const GenericOutput extends unknown,
>(
	theFunction: (arg: GenericInput, params: AsyncGeneratorMapParams) => Promise<GenericOutput>
): (iterator: AsyncIterable<GenericInput> | Iterable<GenericInput>) => AsyncGenerator<GenericOutput, unknown, unknown>
```

## Paramètres

- `iterator` : Le générateur (synchrone ou asynchrone) à transformer
- `theFunction` : Fonction asynchrone de transformation qui reçoit :
  - `arg` : L'élément courant
  - `params.index` : L'index de l'élément

## Valeur de retour

Un `AsyncGenerator` émettant les valeurs transformées.

## Voir aussi

- [`map`](/v1/api/generator/map/fr) - Version synchrone de asyncMap
- [`asyncFilter`](/v1/api/generator/asyncFilter/fr) - Filtre avec une fonction asynchrone
- [`asyncReduce`](/v1/api/generator/asyncReduce/fr) - Réduit avec une fonction asynchrone

## Sources

- [MDN Web Docs - Async iterators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of)
