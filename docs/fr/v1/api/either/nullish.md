---
outline: [2, 3]
prev:
  text: "whenIsBoolFalsy"
  link: "/fr/v1/api/either/whenIsBoolFalsy"
next:
  text: "nullishEmpty"
  link: "/fr/v1/api/either/nullishEmpty"
---

# nullish

Transforme une valeur potentiellement `null`/`undefined` en `Either`. Permet de propager la présence/absence de manière type-safe.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/nullish/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
/>

## Syntaxe

```typescript
function nullish<const GenericInput extends unknown = undefined>(
  input: GenericInput
): GenericInput extends NullishValue
  ? EitherNullishEmpty<GenericInput>
  : EitherNullishFilled<GenericInput>;
```

## Paramètres

- `input` : Valeur à encapsuler (`null`, `undefined` ou toute autre valeur).

## Valeur de retour

- `EitherNullishFilled` lorsque la valeur existe.
- `EitherNullishEmpty` lorsque la valeur est `null` ou `undefined`.

## Voir aussi

- [`nullishEmpty`](/fr/v1/api/either/nullishEmpty).
- [`nullishFilled`](/fr/v1/api/either/nullishFilled).
- [`whenIsNullishFilled`](/fr/v1/api/either/whenIsNullishFilled).
