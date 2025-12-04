---
outline: [2, 3]
prev:
  text: "futureSuccess"
  link: "/v1/api/either/futureSuccess/fr"
next:
  text: "Either"
  link: "/v1/api/either/fr"
---

# futureError

Crée un `Future` résolu avec un `EitherLeft<"future">`, idéal pour propager un rejet standardisé.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/either/futureError/examples/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
/>

## Syntaxe

```typescript
function futureError(value: unknown): Future<EitherFutureError>;
```

## Paramètres

- `input` : Information d'erreur à exposer.

## Valeur de retour

Une `Future` qui se résout immédiatement avec un `EitherLeft<"future">`.

## Voir aussi

- [`futureSuccess`](/v1/api/either/futureSuccess/fr).
- [`future`](/v1/api/either/future/fr).
