---
outline: [2, 3]
prev:
  text: "instanceOf"
  link: "/v1/api/common/instanceOf/fr"
next:
  text: "asyncLoop"
  link: "/v1/api/common/asyncLoop/fr"
---

# loop

La fonction **`loop()`** exécute une boucle contrôlée via les callbacks `next` et `exit`. Chaque itération reçoit le compteur et la sortie précédente pour piloter le flux.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/common/loop/examples/tryout.doc.ts"
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
	next<GenericValue extends GenericRawNextOutput | undefined = undefined>(
		output?: GenericValue
	): LoopOutputNextResult<GenericValue>;
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

- [`asyncLoop`](/v1/api/common/asyncLoop/fr) - Version asynchrone acceptant des promesses
