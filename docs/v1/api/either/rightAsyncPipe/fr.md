---
outline: [2, 3]
prev:
  text: "rightPipe"
  link: "/v1/api/either/rightPipe/fr"
next:
  text: "group"
  link: "/v1/api/either/group/fr"
---

# rightAsyncPipe

Version asynchrone de `rightPipe`. Gère automatiquement les promesses, `Future` et `Either`, et court-circuite sur le premier `Left`.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/either/rightAsyncPipe/examples/tryout.doc.ts"
  majorVersion="v1"
  height="550px"
/>

## Syntaxe

```typescript
function rightAsyncPipe<
	GenericInput extends MaybeFutureEither<AnyValue>, 
	GenericOutputPipe1 extends MaybeFutureEither<AnyValue>
>(
  input: GenericInput,
  pipe1: EitherRightAsyncPipeFunction<GenericInput, GenericOutputPipe1>
): Future<EitherRightAsyncPipeResult<GenericInput | GenericOutputPipe1, GenericOutputPipe1>>;
// ... overloads jusqu'à 15 steps
```

`EitherRightAsyncPipeFunction` reçoit la valeur unwrap d'un `Right` (après `await`) et peut retourner une valeur brute, un `Either` ou une promesse/Future de ces valeurs.

## Paramètres

- `input` : `Either`, promesse ou `Future` de départ.
- `pipeX` : Fonctions async ou sync exécutées séquentiellement. Le pipeline stoppe sur le premier `Left`.

## Valeur de retour

Une `Future` résolue avec le dernier `Right` si tout réussit, ou le `Left` qui a interrompu le pipeline.

## Bonnes pratiques

- Préfixez vos informations avec un namespace clair (`"user.fetch"`, `"user.validate"`) pour suivre l'avancement.
- Combinez `rightAsyncPipe` et `rightPipe` selon que vos étapes soient sync/async.
- En cas de mix `Promise`/`Future`, laissez `rightAsyncPipe` gérer l'uniformisation.

## Voir aussi

- [`rightPipe`](/v1/api/either/rightPipe/fr).
- [`future`](/v1/api/either/future/fr) – Pour créer des `Future` à chaîner.
