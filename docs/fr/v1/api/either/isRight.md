---
outline: [2, 3]
description: "Type guard qui vérifie si une valeur est un EitherRight. Permet d'accéder au payload sans conversion explicite."
prev:
  text: "fail"
  link: "/fr/v1/api/either/fail"
next:
  text: "whenIsRight"
  link: "/fr/v1/api/either/whenIsRight"
---

# isRight

Type guard qui vérifie si une valeur est un `EitherRight`. Permet d'accéder au payload sans conversion explicite.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/isRight/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntaxe

```typescript
function isRight<
	GenericInput extends unknown
>(
  input: GenericInput
): input is Extract<GenericInput, EitherRight>
```

## Paramètres

- `input` : Valeur potentiellement `Either`. Le type peut être une union.

## Valeur de retour

`true` si l'entrée est un `EitherRight`, `false` sinon. Grâce au type guard, TypeScript raffine automatiquement le type dans chaque branche.

## Bonnes pratiques

- Combinez `isRight` avec `E.hasInformation` pour cibler un succès précis.
- Utilisez-le comme première garde pour sécuriser un `unwrap`.
- Dans un flux fonctionnel, `isRight` peut être passé à `whenElse` ou `filter` pour séparer les succès des erreurs.

## Voir aussi

- [`whenIsRight`](/fr/v1/api/either/whenIsRight) – Exécute un callback uniquement lorsque l'entrée est `Right`.
- [`isLeft`](/fr/v1/api/either/isLeft) – Pendant côté `Left`.
