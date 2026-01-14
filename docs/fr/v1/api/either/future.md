---
outline: [2, 3]
description: "Classe Future<T> : une promesse enrichie capable de transporter des Either et d'exposer des helpers comme Future.all."
prev:
  text: "whenIsOptionalFilled"
  link: "/fr/v1/api/either/whenIsOptionalFilled"
next:
  text: "futureSuccess"
  link: "/fr/v1/api/either/futureSuccess"
---

# future

Classe `Future<T>` : une promesse enrichie capable de transporter des `Either` et d'exposer des helpers comme `Future.all`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/future/tryout.doc.ts"
  majorVersion="v1"
  height="355px"
/>

## Syntaxe

```typescript
function future<
	GenericEither extends AnyValue
>(value: GenericEither): Future<GenericEither>;
```

## Paramètres

- `input` : Peut être un `Either`, une promesse ou n'importe quelle valeur. `Future` normalise tout pour retourner un `Either` dans un contexte async.

## Valeur de retour

Une instance de `Future`, sous-classe de `Promise`, dont `await` retourne automatiquement un `Either` (`FutureSuccess`, `FutureError`, ou tout `Either` fourni).

## Bonnes pratiques

- `Future` propage automatiquement le premier `Left` rencontré : combinez-le avec `E.rightAsyncPipe` pour vos pipelines async.
- Utilisez `Future.all([...])` pour attendre plusieurs opérations typées.
- Préférez `futureSuccess` / `futureError` pour créer des cas de base.

## Voir aussi

- [`futureSuccess`](/fr/v1/api/either/futureSuccess).
- [`futureError`](/fr/v1/api/either/futureError).
- [`rightAsyncPipe`](/fr/v1/api/either/rightAsyncPipe) – Pour chaîner des opérations async.
