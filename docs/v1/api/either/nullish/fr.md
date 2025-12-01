---
outline: [2, 3]
prev:
  text: "whenIsBoolFalsy"
  link: "/v1/api/either/whenIsBoolFalsy/fr"
next:
  text: "nullishEmpty"
  link: "/v1/api/either/nullishEmpty/fr"
---

# nullish

Transforme une valeur potentiellement `null`/`undefined` en `Either`. Permet de propager la présence/absence de manière type-safe.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/either/nullish/examples/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
/>

## Syntaxe

```ts
function nullish<const GenericValue extends unknown = undefined>(
  value: GenericValue
): GenericValue extends NullishValue
  ? EitherNullishEmpty<GenericValue>
  : EitherNullishFilled<GenericValue>;
```

## Paramètres

- `value` : Valeur à encapsuler (`null`, `undefined` ou toute autre valeur).

## Valeur de retour

- `EitherNullishFilled` lorsque la valeur existe.
- `EitherNullishEmpty` lorsque la valeur est `null` ou `undefined`.

## Voir aussi

- [`nullishEmpty`](/v1/api/either/nullishEmpty/fr).
- [`nullishFilled`](/v1/api/either/nullishFilled/fr).
- [`whenIsNullishFilled`](/v1/api/either/whenIsNullishFilled/fr).
