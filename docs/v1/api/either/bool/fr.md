---
outline: [2, 3]
prev:
  text: "whenHasInformation"
  link: "/v1/api/either/whenHasInformation/fr"
next:
  text: "boolTruthy"
  link: "/v1/api/either/boolTruthy/fr"
---

# bool

Convertit n'importe quelle valeur en monade booléenne (`EitherBoolTruthy` ou `EitherBoolFalsy`). Pratique pour conserver la trace du test tout en bénéficiant des helpers `whenIsBoolTruthy/whenIsBoolFalsy`.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/either/bool/examples/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntaxe

```typescript
function bool<
	const GenericValue extends unknown = undefined
>(
  value: GenericValue
): GenericValue extends BoolFalsyValue
  ? EitherBoolFalsy<GenericValue>
  : EitherBoolTruthy<GenericValue> | EitherBoolFalsy<BoolFalsyValue>;
```

## Paramètres

- `value` : Valeur à interpréter. Les falsy standards (`""`, `0`, `false`, `null`, `undefined`) produisent un `Left`.

## Valeur de retour

Un `Either` : `Right<"bool">` lorsque la valeur est truthy, `Left<"bool">` sinon. Le typage conserve la valeur originale.

## Voir aussi

- [`boolTruthy`](/v1/api/either/boolTruthy/fr) & [`boolFalsy`](/v1/api/either/boolFalsy/fr).
- [`whenIsBoolTruthy`](/v1/api/either/whenIsBoolTruthy/fr) – Pour agir uniquement sur les valeurs truthy.
