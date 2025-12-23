---
outline: [2, 3]
prev:
  text: "chunk"
  link: "/fr/v1/api/generator/chunk"
next:
  text: "asyncReduce"
  link: "/fr/v1/api/generator/asyncReduce"
---

# reduce

La fonction **`reduce()`** réduit un générateur à une seule valeur en appliquant une fonction d'accumulation sur chaque élément. Permet aussi de sortir prématurément avec `exit()`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/generator/reduce/tryout.doc.ts"
  majorVersion="v1"
  height="400px"
/>

## Syntaxe

### Signature classique

```typescript
function reduce<
	GenericElement extends unknown,
	GenericReduceFrom extends GeneratorEligibleReduceFromValue,
>(
	iterator: Iterable<GenericElement>,
	startValue: GenericReduceFrom,
	theFunction: (
		params: GeneratorReduceFunctionParams<
			GenericElement,
			GeneratorReduceFromValue<GenericReduceFrom>
		>
	) => GeneratorReduceExitOrNext<GeneratorReduceFromValue<GenericReduceFrom>>
): GeneratorReduceFromValue<GenericReduceFrom>
```

### Signature currifiée

```typescript
function reduce<
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
): (iterator: Iterable<GenericElement>) => GeneratorReduceFromValue<GenericReduceFrom>
```

## Paramètres

- `iterator` : Le générateur à réduire
- `startValue` : Valeur initiale de l'accumulateur (utiliser `DGenerator.reduceFrom()` pour les objets)
- `theFunction` : Fonction de réduction qui reçoit :
  - `element` : L'élément courant
  - `index` : L'index de l'élément
  - `lastValue` : La valeur accumulée précédente
  - `next(value)` : Continue avec une nouvelle valeur accumulée
  - `exit(value)` : Termine et retourne la valeur
  - `nextWithObject(obj1, obj2)` : Fusionne deux objets (disponible si `lastValue` est un objet)

## Valeur de retour

La valeur finale accumulée.

## Voir aussi

- [`asyncReduce`](/fr/v1/api/generator/asyncReduce) - Version asynchrone de reduce
- [`map`](/fr/v1/api/generator/map) - Transforme les éléments d'un générateur
- [`filter`](/fr/v1/api/generator/filter) - Filtre les éléments d'un générateur

## Sources

- [MDN Web Docs - Array.prototype.reduce()](https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
