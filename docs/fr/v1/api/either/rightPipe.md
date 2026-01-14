---
outline: [2, 3]
description: "Chaîne des transformations synchrones sur un Either tant qu'il reste Right. Le pipeline s'arrête dès qu'un Left est retourné."
prev:
  text: "futureError"
  link: "/fr/v1/api/either/futureError"
next:
  text: "rightAsyncPipe"
  link: "/fr/v1/api/either/rightAsyncPipe"
---

# rightPipe

Chaîne des transformations synchrones sur un `Either` tant qu'il reste `Right`. Le pipeline s'arrête dès qu'un `Left` est retourné.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/rightPipe/tryout.doc.ts"
  majorVersion="v1"
  height="481px"
/>

## Syntaxe

```typescript
function rightPipe<
	GenericInput extends AnyValue, GenericOutputPipe1 extends AnyValue
>(
  input: GenericInput,
  pipe1: EitherRightPipeFunction<GenericInput, GenericOutputPipe1>
): EitherRightPipeResult<GenericInput | GenericOutputPipe1, GenericOutputPipe1>;
// ... overloads jusqu'à 15 steps
```

`EitherRightPipeFunction` reçoit soit la valeur unwrap d'un `Right`, soit la valeur si elle n'est pas un `Either`, et peut retourner un `Either` ou une valeur brute.

## Paramètres

- `input` : Valeur initiale (peut déjà être un `Either`).
- `pipeX` : Fonctions à exécuter en séquence. Chaque fonction peut renvoyer un `Either` ou une valeur simple.

## Valeur de retour

- Si toutes les étapes restent `Right`, le dernier résultat est wrapé en `EitherSuccess`.
- Dès qu'un `Left` est retourné, le pipeline s'arrête et ce `Left` est propagé.

## Bonnes pratiques

- Utilisez des littéraux d'information distincts (`"step.1"`, `"step.2"`) pour faciliter le débogage.
- Combinez `rightPipe` avec `E.hasInformation` pour brancher vos contrôles.
- En cas de logique async, préférez [`rightAsyncPipe`](/fr/v1/api/either/rightAsyncPipe).
