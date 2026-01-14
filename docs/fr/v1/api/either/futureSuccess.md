---
outline: [2, 3]
description: "Crée un Future résolu avec un EitherRight<\"future\">."
prev:
  text: "future"
  link: "/fr/v1/api/either/future"
next:
  text: "futureError"
  link: "/fr/v1/api/either/futureError"
---

# futureSuccess

Crée un `Future` résolu avec un `EitherRight<"future">`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/futureSuccess/tryout.doc.ts"
  majorVersion="v1"
  height="229px"
/>

## Syntaxe

```typescript
function futureSuccess<
	const GenericInput extends unknown
>(
  input: GenericInput
): Future<EitherFutureSuccess<GenericInput>>;
```

## Paramètres

- `input` : Valeur à exposer dans le futur.

## Valeur de retour

Une `Future` qui se résout instantanément avec `EitherRight<"future">` contenant la valeur.

## Voir aussi

- [`futureError`](/fr/v1/api/either/futureError).
- [`future`](/fr/v1/api/either/future).
