---
outline: [2, 3]
prev:
  text: "whenIsOptionalFilled"
  link: "/v1/api/either/whenIsOptionalFilled/fr"
next:
  text: "futureSuccess"
  link: "/v1/api/either/futureSuccess/fr"
---

# future

Classe `Future<T>` : une promesse enrichie capable de transporter des `Either` et d'exposer des helpers comme `Future.all`.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/either/future/examples/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Syntaxe

```ts
function future<
	GenericEither extends AnyValue
>(value: GenericEither): Future<GenericEither>;
```

## Paramètres

- `value` : Peut être un `Either`, une promesse ou n'importe quelle valeur. `Future` normalise tout pour retourner un `Either` dans un contexte async.

## Valeur de retour

Une instance de `Future`, sous-classe de `Promise`, dont `await` retourne automatiquement un `Either` (`FutureSuccess`, `FutureError`, ou tout `Either` fourni).

## Bonnes pratiques

- `Future` propage automatiquement le premier `Left` rencontré : combinez-le avec `E.rightAsyncPipe` pour vos pipelines async.
- Utilisez `Future.all([...])` pour attendre plusieurs opérations typées.
- Préférez `futureSuccess` / `futureError` pour créer des cas de base.

## Voir aussi

- [`futureSuccess`](/v1/api/either/futureSuccess/fr).
- [`futureError`](/v1/api/either/futureError/fr).
- [`rightAsyncPipe`](/v1/api/either/rightAsyncPipe/fr) – Pour chaîner des opérations async.
