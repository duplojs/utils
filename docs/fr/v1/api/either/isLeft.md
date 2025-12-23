---
outline: [2, 3]
prev:
  text: "whenIsRight"
  link: "/fr/v1/api/either/whenIsRight"
next:
  text: "whenIsLeft"
  link: "/fr/v1/api/either/whenIsLeft"
---

# isLeft

Type guard qui vérifie si une valeur est un `EitherLeft`. Idéal pour sécuriser un `unwrap` ou déclencher une branche d'erreur.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/isLeft/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Syntaxe

```typescript
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

- [`isRight`](/fr/v1/api/either/isRight) – Pendant côté succès.
- [`whenIsLeft`](/fr/v1/api/either/whenIsLeft) – Version fonctionnelle avec callback.
