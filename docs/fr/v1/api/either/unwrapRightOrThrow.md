---
outline: [2, 3]
description: "Unwrap le payload d'un Right et lève une NotRightError lorsque l'entrée n'est pas Right."
prev:
  text: "whenIsRightElse"
  link: "/fr/v1/api/either/whenIsRightElse"
next:
  text: "isLeft"
  link: "/fr/v1/api/either/isLeft"
---

# unwrapRightOrThrow

Unwrap le payload d'un `Right` et lève une `NotRightError` lorsque l'entrée n'est pas `Right`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/unwrapRightOrThrow/tryout.doc.ts"
  majorVersion="v1"
  height="334px"
/>

## Syntaxe

```typescript
function unwrapRightOrThrow<
  GenericInput extends unknown
>(
  input: GenericInput
): Unwrap<Extract<GenericInput, Right>>
```

## Paramètres

- `input` : Valeur censée être un `Right`.

## Valeur de retour

Retourne le payload unwrap lorsque l'entrée est un `Right`. Sinon, la fonction lève `E.NotRightError`.

## Voir aussi

- [`isRight`](/fr/v1/api/either/isRight) – Type guard pour vérifier l'entrée avant l'unwrap.
- [`right`](/fr/v1/api/either/right) – Constructeur générique de `Right`.
- [`unwrapByInformationOrThrow`](/fr/v1/api/either/unwrapByInformationOrThrow) – Variante qui vérifie aussi l'information littérale.
