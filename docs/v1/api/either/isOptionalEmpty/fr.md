---
outline: [2, 3]
prev:
  text: "optionalFilled"
  link: "/v1/api/either/optionalFilled/fr"
next:
  text: "whenIsOptionalEmpty"
  link: "/v1/api/either/whenIsOptionalEmpty/fr"
---

# isOptionalEmpty

Type guard qui détecte un `EitherOptionalEmpty`.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/either/isOptionalEmpty/examples/tryout.doc.ts"
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

- [`whenIsOptionalEmpty`](/v1/api/either/whenIsOptionalEmpty/fr).
- [`isOptionalFilled`](/v1/api/either/isOptionalFilled/fr).
