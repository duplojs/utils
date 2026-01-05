---
outline: [2, 3]
description: "Convertit n'importe quelle valeur en monade booléenne (EitherBoolTruthy ou EitherBoolFalsy). Pratique pour conserver la trace du test tout en bénéficiant des helpers whenIsBoolTruthy/whenIsBoolFalsy."
prev:
  text: "safeCallback"
  link: "/fr/v1/api/either/safeCallback"
next:
  text: "boolTruthy"
  link: "/fr/v1/api/either/boolTruthy"
---

# bool

Convertit n'importe quelle valeur en monade booléenne (`EitherBoolTruthy` ou `EitherBoolFalsy`). Pratique pour conserver la trace du test tout en bénéficiant des helpers `whenIsBoolTruthy/whenIsBoolFalsy`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/bool/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntaxe

```typescript
function bool<
	const GenericInput extends unknown = undefined
>(
  input: GenericInput
): GenericInput extends BoolFalsyValue
  ? EitherBoolFalsy<GenericInput>
  : EitherBoolTruthy<GenericInput> | EitherBoolFalsy<BoolFalsyValue>;
```

## Paramètres

- `input` : Valeur à interpréter. Les falsy standards (`""`, `0`, `false`, `null`, `undefined`) produisent un `Left`.

## Valeur de retour

Un `Either` : `Right<"bool">` lorsque la valeur est truthy, `Left<"bool">` sinon. Le typage conserve la valeur originale.

## Voir aussi

- [`boolTruthy`](/fr/v1/api/either/boolTruthy) & [`boolFalsy`](/fr/v1/api/either/boolFalsy).
- [`whenIsBoolTruthy`](/fr/v1/api/either/whenIsBoolTruthy) – Pour agir uniquement sur les valeurs truthy.
