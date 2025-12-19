---
outline: [2, 3]
prev:
  text: "chunk"
  link: "/fr/v1/api/generator/chunk"
next:
  text: "Generator"
  link: "/fr/v1/api/generator/"
---

# asyncReduce

La fonction **`asyncReduce()`** réduit un générateur à une seule valeur en appliquant une fonction d'accumulation asynchrone sur chaque élément. Version asynchrone de `reduce()`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/generator/asyncReduce/tryout.doc.ts"
  majorVersion="v1"
  height="400px"
/>

## Syntaxe

### Signature classique

```typescript
function asyncReduce<
	GenericElement extends unknown,
	GenericReduceFrom extends GeneratorEligibleReduceFromValue,
>(
	iterator: Iterable<GenericElement> | AsyncIterable<GenericElement>,
	startValue: GenericReduceFrom,
	theFunction: (
		params: GeneratorReduceFunctionParams<
			GenericElement,
			GeneratorReduceFromValue<GenericReduceFrom>
		>
	) => GeneratorReduceExitOrNext<GeneratorReduceFromValue<GenericReduceFrom>>
): Promise<GeneratorReduceFromValue<GenericReduceFrom>>
```

### Signature currifiée

```typescript
function asyncReduce<
	GenericElement extends unknown,
	GenericReduceFrom extends GeneratorEligibleReduceFromValue,
>(
	startValue: GenericReduceFrom,
	theFunction: (
		params: GeneratorReduceFunctionParams<
			GenericElement,
			GeneratorReduceFromValue<GenericReduceFrom>
		>
	) => GeneratorReduceExitOrNext<GeneratorReduceFromValue<GenericReduceFrom>>
): (
	iterator: Iterable<GenericElement> | AsyncIterable<GenericElement>
) => Promise<GeneratorReduceFromValue<GenericReduceFrom>>
```

## Paramètres

- `iterator` : Le générateur (synchrone ou asynchrone) à réduire
- `startValue` : Valeur initiale de l'accumulateur (utiliser `DGenerator.reduceFrom()` pour les objets)
- `theFunction` : Fonction asynchrone de réduction qui reçoit :
  - `element` : L'élément courant
  - `index` : L'index de l'élément
  - `lastValue` : La valeur accumulée précédente
  - `next(value)` : Continue avec une nouvelle valeur accumulée
  - `exit(value)` : Termine et retourne la valeur
  - `nextWithObject(obj1, obj2)` : Fusionne deux objets (disponible si `lastValue` est un objet)

## Valeur de retour

Une `Promise` qui résout avec la valeur finale accumulée.

## Voir aussi

- [`reduce`](/fr/v1/api/generator/reduce) - Version synchrone de asyncReduce
- [`asyncMap`](/fr/v1/api/generator/asyncMap) - Transforme avec une fonction asynchrone
- [`asyncFilter`](/fr/v1/api/generator/asyncFilter) - Filtre avec une fonction asynchrone

## Sources

- [MDN Web Docs - Async iterators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of)
