---
outline: [2, 3]
prev:
  text: "innerPipe"
  link: "/v1/api/common/innerPipe/fr"
next:
  text: "asyncInnerPipe"
  link: "/v1/api/common/asyncInnerPipe/fr"
---

# asyncPipe

La méthode **`asyncPipe()`** enchaîne des fonctions asynchrones (promesses ou `FutureEither`) en série. Chaque étape attend la résolution de la précédente et la dernière valeur est retournée dans une promesse.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/common/asyncPipe/examples/tryout.doc.ts"
  majorVersion="v1"
  height="500px"
/>

## Syntaxe

```typescript
function asyncPipe<Input, Output1>(
	input: PromiseLike<Input> | Input,
	pipe1: (input: Awaited<Input>) => PromiseLike<Output1> | Output1
): Promise<Awaited<Output1>>

function asyncPipe<Input, Output1, Output2>(
	input: PromiseLike<Input> | Input,
	pipe1: (input: Awaited<Input>) => PromiseLike<Output1> | Output1,
	pipe2: (input: Awaited<Output1>) => PromiseLike<Output2> | Output2
): Promise<Awaited<Output2>>

// ... surcharges supplémentaires (jusqu'à 15 fonctions)
```

## Paramètres

- `input` : Une valeur ou promesse de valeur initiale.
- `pipe1, pipe2, ...` : Fonctions pouvant retourner une valeur ou une promesse. Chaque étape attend la précédente.

## Valeur de retour

Une promesse résolue avec la valeur finale du pipeline, en conservant les types intermédiaires.

## Voir aussi

- [`pipe`](/v1/api/common/pipe/fr) - Variante synchrone
- [`asyncInnerPipe`](/v1/api/common/asyncInnerPipe/fr) - Version currifiée asynchrone
