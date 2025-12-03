---
outline: [2, 3]
prev:
  text: "whenIsNullishFilled"
  link: "/v1/api/either/whenIsNullishFilled/fr"
next:
  text: "nullableEmpty"
  link: "/v1/api/either/nullableEmpty/fr"
---

# nullable

Encapsule une valeur `null` ou non-`null` dans un `Either`, tout en conservant l'information sill est remplie ou vide.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/either/nullable/examples/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
/>

## Syntaxe

```typescript
function nullable<
	const GenericValue extends unknown = null
>(
  value: GenericValue
): GenericValue extends null
  ? EitherNullableEmpty
  : EitherNullableFilled<GenericValue>;
```

## Paramètres

- `value` : Peut être `null` ou une valeur concrète.

## Valeur de retour

- `EitherNullableFilled` si la valeur existe.
- `EitherNullableEmpty` si `null`.

## Voir aussi

- [`nullableEmpty`](/v1/api/either/nullableEmpty/fr).
- [`nullableFilled`](/v1/api/either/nullableFilled/fr).
