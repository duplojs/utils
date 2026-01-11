---
outline: [2, 3]
description: "Les helpers useAsyncRetry() et createAsyncRetry() relancent une fonction asynchrone tant qu'un critère de retry est vrai, avec options pour le nombre d'essais, le délai et le logging."
prev:
  text: "promiseObject"
  link: "/fr/v1/api/common/promiseObject"
next:
  text: "sleep"
  link: "/fr/v1/api/common/sleep"
---

# asyncRetry

Les helpers **`useAsyncRetry()`** et **`createAsyncRetry()`** relancent une fonction asynchrone tant qu'un critère de retry est vrai, avec options pour le nombre d'essais, le délai et le logging.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/asyncRetry/tryout.doc.ts"
  majorVersion="v1"
  height="600px"
  :foldLines="[12, 28]"
/>

## Syntaxe

```typescript
interface CreateAsyncRetryOptions {
	maxRetry: number;
	timeToSleep?: number;
	log?: boolean;
}

function useAsyncRetry<
	GenericOutput extends unknown
>(
	retryFunction: () => Promise<GenericOutput>,
	shouldRetry: (result: GenericOutput) => boolean,
	options: CreateAsyncRetryOptions
): Promise<GenericOutput>;

function createAsyncRetry<
	GenericAnyFunction extends ((...args: any[]) => Promise<any>)
>(
	retryFunction: GenericAnyFunction,
	checkFunction: (result: Awaited<ReturnType<GenericAnyFunction>>) => boolean,
	options: CreateAsyncRetryOptions
): GenericAnyFunction;
```

## Paramètres

- `retryFunction` : Fonction asynchrone à réessayer.
- `shouldRetry` / `checkFunction` : Décide si un nouvel essai est nécessaire à partir du résultat précédent.
- `options` : Options de retry (`maxRetry`, `timeToSleep`, `log`).

## Valeur de retour

- `useAsyncRetry` : Une promesse résolue avec le dernier résultat (après succès ou épuisement des retries).
- `createAsyncRetry` : Une fonction décorée qui applique la logique de retry à chaque appel.

## Voir aussi

- [`sleep`](/fr/v1/api/common/sleep) - Pause asynchrone utilisée dans certains scénarios de retry
