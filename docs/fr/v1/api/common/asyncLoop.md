---
outline: [2, 3]
description: "La fonction asyncLoop() est la variante asynchrone de loop. Chaque itération peut retourner une promesse avant de décider de continuer (next) ou de sortir (exit)."
prev:
  text: "loop"
  link: "/fr/v1/api/common/loop"
next:
  text: "externalPromise"
  link: "/fr/v1/api/common/externalPromise"
---

# asyncLoop

La fonction **`asyncLoop()`** est la variante asynchrone de `loop`. Chaque itération peut retourner une promesse avant de décider de continuer (`next`) ou de sortir (`exit`).

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/asyncLoop/tryout.doc.ts"
  majorVersion="v1"
  height="376px"
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

function asyncLoop<
	GenericRawExitOutput extends AnyValue = undefined,
	GenericRawNextOutput extends AnyValue = undefined
>(
	loop: (
		params: LoopParams<GenericRawNextOutput>
	) => Promise<
		LoopOutputNextResult<GenericRawNextOutput | undefined> |
		LoopOutputExistResult<GenericRawExitOutput>
	>
): Promise<GenericRawExitOutput>;
```

## Paramètres

- `loop` : Fonction async appelée à chaque itération. Elle reçoit `params` (`count`, `previousOutput`, `next`, `exit`) et retourne une promesse de `next(...)` ou `exit(...)`.

## Valeur de retour

Une promesse résolue avec la valeur passée à `exit(...)` (ou `undefined` par défaut) lorsque la boucle se termine.

## Voir aussi

- [`loop`](/fr/v1/api/common/loop) - Version synchrone
