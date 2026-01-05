---
outline: [2, 3]
description: "La fonction loop() exécute une boucle contrôlée via les callbacks next et exit. Chaque itération reçoit le compteur et la sortie précédente pour piloter le flux."
prev:
  text: "falsy"
  link: "/fr/v1/api/common/falsy"
next:
  text: "asyncLoop"
  link: "/fr/v1/api/common/asyncLoop"
---

# loop

La fonction **`loop()`** exécute une boucle contrôlée via les callbacks `next` et `exit`. Chaque itération reçoit le compteur et la sortie précédente pour piloter le flux.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/loop/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntaxe

```typescript
export interface LoopParams<
	GenericRawNextOutput extends any
> {
	count: number;
	previousOutput: GenericRawNextOutput | undefined;
	next<GenericInput extends GenericRawNextOutput | undefined = undefined>(
		output?: GenericInput
	): LoopOutputNextResult<GenericInput>;
	exit<GenericOutput extends AnyValue = undefined>(
		output?: GenericOutput
	): LoopOutputExistResult<GenericOutput>;
}

function loop<
	GenericRawExitOutput extends AnyValue = undefined,
	GenericRawNextOutput extends AnyValue = undefined
>(
	loop: (
		params: LoopParams<GenericRawNextOutput>
	) => LoopOutputNextResult<GenericRawNextOutput> | LoopOutputExistResult<GenericRawExitOutput>
): GenericRawExitOutput;
```

## Paramètres

- `loop` : Fonction appelée à chaque itération. Elle reçoit `params` (`count`, `previousOutput`, `next`, `exit`) et doit retourner `next(...)` ou `exit(...)`.

## Valeur de retour

La valeur passée à `exit(...)` (ou `undefined` par défaut) une fois la boucle terminée.

## Voir aussi

- [`asyncLoop`](/fr/v1/api/common/asyncLoop) - Version asynchrone acceptant des promesses
