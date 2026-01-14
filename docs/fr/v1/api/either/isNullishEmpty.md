---
outline: [2, 3]
description: "Type guard détectant un EitherNullishEmpty."
prev:
  text: "nullishFilled"
  link: "/fr/v1/api/either/nullishFilled"
next:
  text: "whenIsNullishEmpty"
  link: "/fr/v1/api/either/whenIsNullishEmpty"
---

# isNullishEmpty

Type guard détectant un `EitherNullishEmpty`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/isNullishEmpty/tryout.doc.ts"
  majorVersion="v1"
  height="271px"
/>

## Syntaxe

```typescript
function isNullishEmpty<
	GenericInput extends unknown
>(
  input: GenericInput
): input is Extract<GenericInput, EitherNullishEmpty>;
```

## Paramètres

- `input` : `Either` issu des helpers nullish.

## Valeur de retour

`true` si la valeur encapsulée est `null` ou `undefined`.

## Voir aussi

- [`whenIsNullishEmpty`](/fr/v1/api/either/whenIsNullishEmpty).
- [`isNullishFilled`](/fr/v1/api/either/isNullishFilled).
