---
outline: [2, 3]
description: "Encapsule une valeur null ou non-null dans un Either, tout en conservant l'information sill est remplie ou vide."
prev:
  text: "whenIsNullishFilled"
  link: "/fr/v1/api/either/whenIsNullishFilled"
next:
  text: "nullableEmpty"
  link: "/fr/v1/api/either/nullableEmpty"
---

# nullable

Encapsule une valeur `null` ou non-`null` dans un `Either`, tout en conservant l'information sill est remplie ou vide.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/nullable/tryout.doc.ts"
  majorVersion="v1"
  height="229px"
/>

## Syntaxe

```typescript
function nullable<
	const GenericInput extends unknown = null
>(
  input: GenericInput
): GenericInput extends null
  ? EitherNullableEmpty
  : EitherNullableFilled<GenericInput>;
```

## Paramètres

- `input` : Peut être `null` ou une valeur concrète.

## Valeur de retour

- `EitherNullableFilled` si la valeur existe.
- `EitherNullableEmpty` si `null`.

## Voir aussi

- [`nullableEmpty`](/fr/v1/api/either/nullableEmpty).
- [`nullableFilled`](/fr/v1/api/either/nullableFilled).
