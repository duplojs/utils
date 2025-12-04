---
outline: [2, 3]
prev:
  text: "loop"
  link: "/v1/api/common/loop/fr"
next:
  text: "externalPromise"
  link: "/v1/api/common/externalPromise/fr"
---

# asyncLoop

La fonction **`asyncLoop()`** est la variante asynchrone de `loop`. Chaque itération peut retourner une promesse avant de décider de continuer (`next`) ou de sortir (`exit`).

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/common/asyncLoop/examples/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
/>

## Syntaxe

```typescript
export interface LoopParams<
	GenericRawNextOutput extends any
> {
	count: number;
	previousOutput: GenericRawNextOutput | undefined;
	next<GenericValue extends GenericRawNextOutput | undefined = undefined>(
		output?: GenericValue
	): LoopOutputNextResult<GenericValue>;
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

- [`loop`](/v1/api/common/loop/fr) - Version synchrone
