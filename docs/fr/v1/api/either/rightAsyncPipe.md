---
outline: [2, 3]
description: "Version asynchrone de rightPipe. Gère automatiquement les promesses et Either, et court-circuite sur le premier Left."
prev:
  text: "rightPipe"
  link: "/fr/v1/api/either/rightPipe"
next:
  text: "group"
  link: "/fr/v1/api/either/group"
---

# rightAsyncPipe

Version asynchrone de `rightPipe`. Gère automatiquement les promesses et `Either`, et court-circuite sur le premier `Left`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/rightAsyncPipe/tryout.doc.ts"
  majorVersion="v1"
  height="523px"
/>

## Syntaxe

```typescript
function rightAsyncPipe<
	const GenericInput extends unknown,
	const GenericOutputPipe1 extends unknown
>(
  input: GenericInput,
  pipe1: RightAsyncPipeFunction<GenericInput, GenericOutputPipe1>
): Promise<
  Extract<
    RightAsyncPipeResult<GenericInput | GenericOutputPipe1, GenericOutputPipe1>,
    any
  >
>;
// ... overloads jusqu'à 15 steps
```

`RightAsyncPipeFunction` reçoit la valeur unwrap d'un `Right` (après `await`) et peut retourner une valeur brute, un `Either` ou une promesse de ces valeurs.

## Paramètres

- `input` : Valeur, `Either` ou promesse de départ.
- `pipeX` : Fonctions async ou sync exécutées séquentiellement. Le pipeline stoppe sur le premier `Left`.

## Valeur de retour

Une `Promise` résolue avec le dernier `Right` si tout réussit, ou le `Left` qui a interrompu le pipeline.

## Bonnes pratiques

- Préfixez vos informations avec un namespace clair (`"user.fetch"`, `"user.validate"`) pour suivre l'avancement.
- Combinez `rightAsyncPipe` et `rightPipe` selon que vos étapes soient sync/async.
- Laissez `rightAsyncPipe` attendre chaque étape plutôt que d'unwrap les promesses intermédiaires à la main.

## Voir aussi

- [`rightPipe`](/fr/v1/api/either/rightPipe).
- [`safeCallback`](/fr/v1/api/either/safeCallback) – Pour convertir les erreurs levées en valeurs `Either`.
