---
outline: [2, 3]
description: "Alias pratique pour créer un Left avec l'information figée à \"error\". Utile pour signaler une erreur générique sans avoir à fournir manuellement l'information."
prev:
  text: "left"
  link: "/fr/v1/api/either/left"
next:
  text: "fail"
  link: "/fr/v1/api/either/fail"
---

# error

Alias pratique pour créer un `Left` avec l'information figée à `"error"`. Utile pour signaler une erreur générique sans avoir à fournir manuellement l'information.

::: tip
`error` équivaut à `left("error", value)`. Pour comprendre les mécaniques complètes (information personnalisée, pattern matching), référez-vous à la page [`left`](/fr/v1/api/either/left).
:::

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/error/tryout.doc.ts"
  majorVersion="v1"
  height="439px"
/>

## Syntaxe

```typescript
function error<
	const GenericInput extends unknown
>(
  input: GenericInput
): Error<GenericInput>
```

## Paramètres

- `input` : Donnée à attacher à l'erreur (message, objet, contexte...)

## Valeur de retour

Un `Left<"error", GenericInput>` que vous pouvez consommer avec `E.isLeft`, `E.whenHasInformation` ou `E.hasInformation(result, "error")`.

## Cas d'usage

- Signaler une erreur générique lorsque vous n'avez pas besoin d'une information spécialisée.
- Harmoniser vos retours avec `E.success` lorsqu'il n'existe qu'un seul type de succès.

## Voir aussi

- [`left`](/fr/v1/api/either/left) – Version générique avec information personnalisée.
- [`fail`](/fr/v1/api/either/fail) – Erreur sans payload (`left("fail")`).
- [`success`](/fr/v1/api/either/success) – Pendant côté `Right` avec l'information `"success"`.
