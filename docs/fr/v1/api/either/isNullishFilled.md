---
outline: [2, 3]
prev:
  text: "whenIsNullishEmpty"
  link: "/fr/v1/api/either/whenIsNullishEmpty"
next:
  text: "whenIsNullishFilled"
  link: "/fr/v1/api/either/whenIsNullishFilled"
---

# isNullishFilled

Type guard qui détecte un `EitherNullishFilled`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/isNullishFilled/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
/>

## Syntaxe

```typescript
function isNullishFilled<
	GenericInput extends unknown
>(
  input: GenericInput
): input is Extract<GenericInput, EitherNullishFilled>;
```

## Paramètres

- `input` : `Either` issu de `nullish` ou `nullishFilled`.

## Valeur de retour

`true` si l'information encapsulée est définie.

## Voir aussi

- [`whenIsNullishFilled`](/fr/v1/api/either/whenIsNullishFilled).
- [`isNullishEmpty`](/fr/v1/api/either/isNullishEmpty).
