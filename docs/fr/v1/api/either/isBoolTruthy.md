---
outline: [2, 3]
prev:
  text: "boolFalsy"
  link: "/fr/v1/api/either/boolFalsy"
next:
  text: "whenIsBoolTruthy"
  link: "/fr/v1/api/either/whenIsBoolTruthy"
---

# isBoolTruthy

Type guard qui vérifie si un `Either` issu des helpers booléens est truthy.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/isBoolTruthy/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
/>

## Syntaxe

```typescript
function isBoolTruthy<
	GenericInput extends unknown
>(
  input: GenericInput
): input is Extract<GenericInput, EitherBoolTruthy>;
```

## Paramètres

- `input` : Résultat de `E.bool`, `boolTruthy`, etc.

## Valeur de retour

`true` si la valeur est un `EitherBoolTruthy`. Permet de raffiner le type avant de manipuler la valeur.

## Voir aussi

- [`whenIsBoolTruthy`](/fr/v1/api/either/whenIsBoolTruthy) – Version fonctionnelle.
- [`isBoolFalsy`](/fr/v1/api/either/isBoolFalsy) – Pendant falsy.
