---
outline: [2, 3]
description: "Type guard qui détecte un NullableEmpty."
prev:
  text: "nullableFilled"
  link: "/fr/v1/api/either/nullableFilled"
next:
  text: "whenIsNullableEmpty"
  link: "/fr/v1/api/either/whenIsNullableEmpty"
---

# isNullableEmpty

Type guard qui détecte un `NullableEmpty`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/isNullableEmpty/tryout.doc.ts"
  majorVersion="v1"
  height="271px"
/>

## Syntaxe

```typescript
function isNullableEmpty<
	GenericInput extends unknown
>(
  input: GenericInput
): input is Extract<GenericInput, NullableEmpty>;
```

## Paramètres

- `input` : `Either` issu de `nullable`.

## Valeur de retour

`true` si la valeur est `null`.

## Voir aussi

- [`whenIsNullableEmpty`](/fr/v1/api/either/whenIsNullableEmpty).
- [`isNullableFilled`](/fr/v1/api/either/isNullableFilled).
