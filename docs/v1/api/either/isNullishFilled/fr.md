---
outline: [2, 3]
prev:
  text: "whenIsNullishEmpty"
  link: "/v1/api/either/whenIsNullishEmpty/fr"
next:
  text: "whenIsNullishFilled"
  link: "/v1/api/either/whenIsNullishFilled/fr"
---

# isNullishFilled

Type guard qui détecte un `EitherNullishFilled`.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/either/isNullishFilled/examples/tryout.doc.ts"
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

- [`whenIsNullishFilled`](/v1/api/either/whenIsNullishFilled/fr).
- [`isNullishEmpty`](/v1/api/either/isNullishEmpty/fr).
