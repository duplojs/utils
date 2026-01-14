---
outline: [2, 3]
description: "Type guard qui détecte un EitherBoolFalsy."
prev:
  text: "whenIsBoolTruthy"
  link: "/fr/v1/api/either/whenIsBoolTruthy"
next:
  text: "whenIsBoolFalsy"
  link: "/fr/v1/api/either/whenIsBoolFalsy"
---

# isBoolFalsy

Type guard qui détecte un `EitherBoolFalsy`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/isBoolFalsy/tryout.doc.ts"
  majorVersion="v1"
  height="271px"
/>

## Syntaxe

```typescript
function isBoolFalsy<
	GenericInput extends unknown>
(
  input: GenericInput
): input is Extract<GenericInput, EitherBoolFalsy>;
```

## Paramètres

- `input` : Valeur issue des helpers booléens.

## Valeur de retour

`true` si la valeur est falsy (`Left`).

## Voir aussi

- [`whenIsBoolFalsy`](/fr/v1/api/either/whenIsBoolFalsy).
- [`isBoolTruthy`](/fr/v1/api/either/isBoolTruthy).
