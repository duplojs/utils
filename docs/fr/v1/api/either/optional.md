---
outline: [2, 3]
description: "Encapsule une valeur undefined/définie dans un Either, utile pour propager les champs optionnels."
prev:
  text: "whenIsNullableFilled"
  link: "/fr/v1/api/either/whenIsNullableFilled"
next:
  text: "optionalEmpty"
  link: "/fr/v1/api/either/optionalEmpty"
---

# optional

Encapsule une valeur `undefined`/définie dans un `Either`, utile pour propager les champs optionnels.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/optional/tryout.doc.ts"
  majorVersion="v1"
  height="229px"
/>

## Syntaxe

```typescript
function optional<
	const GenericInput extends unknown = undefined
>(
  input: GenericInput
): GenericInput extends undefined
  ? OptionalEmpty
  : OptionalFilled<GenericInput>;
```

## Paramètres

- `input` : Peut être `undefined` ou une valeur concrète.

## Valeur de retour

- `OptionalFilled` si la valeur est définie.
- `OptionalEmpty` sinon.

## Voir aussi

- [`optionalEmpty`](/fr/v1/api/either/optionalEmpty).
- [`optionalFilled`](/fr/v1/api/either/optionalFilled).
