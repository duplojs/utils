---
outline: [2, 3]
prev:
  text: "future"
  link: "/v1/api/either/future/fr"
next:
  text: "futureError"
  link: "/v1/api/either/futureError/fr"
---

# futureSuccess

Crée un `Future` résolu avec un `EitherRight<"future">`.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/either/futureSuccess/examples/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
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

- [`futureError`](/v1/api/either/futureError/fr).
- [`future`](/v1/api/either/future/fr).
