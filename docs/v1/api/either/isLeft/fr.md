---
outline: [2, 3]
prev:
  text: "whenIsRight"
  link: "/v1/api/either/whenIsRight/fr"
next:
  text: "whenIsLeft"
  link: "/v1/api/either/whenIsLeft/fr"
---

# isLeft

Type guard qui vérifie si une valeur est un `EitherLeft`. Idéal pour sécuriser un `unwrap` ou déclencher une branche d'erreur.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/either/isLeft/examples/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Syntaxe

```ts
function isLeft<
	GenericInput extends unknown
>(
  input: GenericInput
): input is Extract<GenericInput, EitherLeft>
```

## Paramètres

- `input` : Valeur potentiellement `Either`. Peut être une union `Left | Right`.

## Valeur de retour

`true` lorsque l'entrée est un `EitherLeft`. Le type est alors raffiné pour n'inclure que la partie `Left`.

## Bonnes pratiques

- Utilisez `isLeft` avant de lire la valeur encapsulée côté erreur.
- Combinez-le avec `E.hasInformation` pour cibler une erreur métier précise.
- Dans des pipelines, `isLeft` peut être passé à `whenElse` pour court-circuiter sur la première erreur.

## Voir aussi

- [`isRight`](/v1/api/either/isRight/fr) – Pendant côté succès.
- [`whenIsLeft`](/v1/api/either/whenIsLeft/fr) – Version fonctionnelle avec callback.
