---
outline: [2, 3]
description: "Type guard qui détecte un EitherOptionalEmpty."
prev:
  text: "optionalFilled"
  link: "/fr/v1/api/either/optionalFilled"
next:
  text: "whenIsOptionalEmpty"
  link: "/fr/v1/api/either/whenIsOptionalEmpty"
---

# isOptionalEmpty

Type guard qui détecte un `EitherOptionalEmpty`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/isOptionalEmpty/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
/>

## Syntaxe

```typescript
function isOptionalEmpty<
	GenericInput extends unknown
>(
  input: GenericInput
): input is Extract<GenericInput, EitherOptionalEmpty>;
```

## Paramètres

- `input` : `Either` issu de `optional`.

## Valeur de retour

`true` si la valeur est `undefined`.

## Voir aussi

- [`whenIsOptionalEmpty`](/fr/v1/api/either/whenIsOptionalEmpty).
- [`isOptionalFilled`](/fr/v1/api/either/isOptionalFilled).
