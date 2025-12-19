---
outline: [2, 3]
prev:
  text: "futureSuccess"
  link: "/fr/v1/api/either/futureSuccess"
next:
  text: "Either"
  link: "/fr/v1/api/either/"
---

# futureError

Crée un `Future` résolu avec un `EitherLeft<"future">`, idéal pour propager un rejet standardisé.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/futureError/tryout.doc.ts"
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

- [`futureSuccess`](/fr/v1/api/either/futureSuccess).
- [`future`](/fr/v1/api/either/future).
