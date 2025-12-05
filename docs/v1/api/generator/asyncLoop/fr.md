---
outline: [2, 3]
prev:
  text: "loop"
  link: "/v1/api/generator/loop/fr"
next:
  text: "map"
  link: "/v1/api/generator/map/fr"
---

# asyncLoop

La fonction **`asyncLoop()`** crée un générateur asynchrone personnalisé en utilisant une fonction de boucle asynchrone. Permet de générer des séquences de valeurs de manière lazy avec des opérations asynchrones.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/generator/asyncLoop/examples/tryout.doc.ts"
  majorVersion="v1"
  height="400px"
/>

## Syntaxe

```typescript
async function asyncLoop<
	GenericRawExitOutput extends any = undefined,
	GenericRawNextOutput extends any = undefined,
>(
	loop: (params: GeneratorLoopParams<GenericRawNextOutput>) => Promise<
		| LoopOutputNextResult<GenericRawNextOutput>
		| LoopOutputNextResult<undefined>
		| LoopOutputExistResult<GenericRawExitOutput>
		| LoopOutputExistResult<undefined>
	>
): AsyncGenerator<
	Exclude<GenericRawExitOutput | GenericRawNextOutput, undefined>,
	unknown,
	unknown
>
```

## Paramètres

- `loop` : Fonction asynchrone appelée à chaque itération qui reçoit :
  - `count` : Index de l'itération courante
  - `previousOutput` : Valeur retournée par l'itération précédente
  - `next(value?)` : Continue la boucle et émet une valeur
  - `exit(value?)` : Termine la boucle et émet une valeur finale optionnelle

## Valeur de retour

Un `AsyncGenerator` qui émet les valeurs passées à `next()` et `exit()`.

## Voir aussi

- [`loop`](/v1/api/generator/loop/fr) - Version synchrone de asyncLoop
- [`asyncMap`](/v1/api/generator/asyncMap/fr) - Transforme les éléments avec une fonction asynchrone
- [`execute`](/v1/api/generator/execute/fr) - Consomme un générateur

## Sources

- [MDN Web Docs - Async iterators and generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator)
