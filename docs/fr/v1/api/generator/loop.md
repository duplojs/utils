---
outline: [2, 3]
description: "La fonction loop() crée un générateur personnalisé en utilisant une fonction de boucle. Permet de générer des séquences de valeurs de manière lazy."
prev:
  text: "execute"
  link: "/fr/v1/api/generator/execute"
next:
  text: "asyncLoop"
  link: "/fr/v1/api/generator/asyncLoop"
---

# loop

La fonction **`loop()`** crée un générateur personnalisé en utilisant une fonction de boucle. Permet de générer des séquences de valeurs de manière lazy.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/generator/loop/tryout.doc.ts"
  majorVersion="v1"
  height="400px"
/>

## Syntaxe

```typescript
function loop<
	GenericRawExitOutput extends any = undefined,
	GenericRawNextOutput extends any = undefined,
>(
	loop: (params: GeneratorLoopParams<GenericRawNextOutput>) =>
		| LoopOutputNextResult<GenericRawNextOutput>
		| LoopOutputNextResult<undefined>
		| LoopOutputExistResult<GenericRawExitOutput>
		| LoopOutputExistResult<undefined>
): Generator<
	Exclude<GenericRawExitOutput | GenericRawNextOutput, undefined>,
	unknown,
	unknown
>
```

## Paramètres

- `loop` : Fonction appelée à chaque itération qui reçoit :
  - `count` : Index de l'itération courante
  - `previousOutput` : Valeur retournée par l'itération précédente
  - `next(value?)` : Continue la boucle et émet une valeur
  - `exit(value?)` : Termine la boucle et émet une valeur finale optionnelle

## Valeur de retour

Un `Generator` qui émet les valeurs passées à `next()` et `exit()`.

## Voir aussi

- [`asyncLoop`](/fr/v1/api/generator/asyncLoop) - Version asynchrone de loop
- [`execute`](/fr/v1/api/generator/execute) - Consomme un générateur
- [`map`](/fr/v1/api/generator/map) - Transforme les éléments d'un générateur

## Sources

- [MDN Web Docs - Iterators and generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)
