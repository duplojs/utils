---
outline: [2, 3]
prev:
  text: "left"
  link: "/v1/api/either/left/fr"
next:
  text: "fail"
  link: "/v1/api/either/fail/fr"
---

# error

Alias pratique pour créer un `EitherLeft` avec l'information figée à `"error"`. Utile pour signaler une erreur générique sans avoir à fournir manuellement l'information.

::: tip
`error` équivaut à `left("error", value)`. Pour comprendre les mécaniques complètes (information personnalisée, pattern matching), référez-vous à la page [`left`](/v1/api/either/left/fr).
:::

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/either/error/examples/tryout.doc.ts"
  majorVersion="v1"
  height="420px"
/>

## Syntaxe

```typescript
function error<
	const GenericInput extends unknown
>(
  input: GenericInput
): EitherError<GenericInput>
```

## Paramètres

- `input` : Donnée à attacher à l'erreur (message, objet, contexte...)

## Valeur de retour

Un `EitherLeft<"error", GenericInput>` que vous pouvez consommer avec `E.isLeft`, `E.whenHasInformation` ou `E.hasInformation(result, "error")`.

## Cas d'usage

- Signaler une erreur générique lorsque vous n'avez pas besoin d'une information spécialisée.
- Harmoniser vos retours avec `E.success` lorsqu'il n'existe qu'un seul type de succès.

## Voir aussi

- [`left`](/v1/api/either/left/fr) – Version générique avec information personnalisée.
- [`fail`](/v1/api/either/fail/fr) – Erreur sans payload (`left("fail")`).
- [`success`](/v1/api/either/success/fr) – Pendant côté `Right` avec l'information `"success"`.
