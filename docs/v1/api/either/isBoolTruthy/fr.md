---
outline: [2, 3]
prev:
  text: "boolFalsy"
  link: "/v1/api/either/boolFalsy/fr"
next:
  text: "whenIsBoolTruthy"
  link: "/v1/api/either/whenIsBoolTruthy/fr"
---

# isBoolTruthy

Type guard qui vérifie si un `Either` issu des helpers booléens est truthy.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/either/isBoolTruthy/examples/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
/>

## Syntaxe

```ts
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

- [`whenIsBoolTruthy`](/v1/api/either/whenIsBoolTruthy/fr) – Version fonctionnelle.
- [`isBoolFalsy`](/v1/api/either/isBoolFalsy/fr) – Pendant falsy.
