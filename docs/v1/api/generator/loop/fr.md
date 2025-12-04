---
outline: [2, 3]
prev:
  text: "execute"
  link: "/v1/api/generator/execute/fr"
next:
  text: "asyncLoop"
  link: "/v1/api/generator/asyncLoop/fr"
---

# loop

La fonction **`loop()`** crée un générateur personnalisé en utilisant une fonction de boucle. Permet de générer des séquences de valeurs de manière lazy.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/generator/loop/examples/tryout.doc.ts"
  majorVersion="v1"
  height="450px"
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

- [`asyncLoop`](/v1/api/generator/asyncLoop/fr) - Version asynchrone de loop
- [`execute`](/v1/api/generator/execute/fr) - Consomme un générateur
- [`map`](/v1/api/generator/map/fr) - Transforme les éléments d'un générateur

## Sources

- [MDN Web Docs - Iterators and generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)
