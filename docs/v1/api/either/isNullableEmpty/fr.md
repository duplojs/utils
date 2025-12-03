---
outline: [2, 3]
prev:
  text: "nullableFilled"
  link: "/v1/api/either/nullableFilled/fr"
next:
  text: "whenIsNullableEmpty"
  link: "/v1/api/either/whenIsNullableEmpty/fr"
---

# isNullableEmpty

Type guard qui détecte un `EitherNullableEmpty`.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/either/isNullableEmpty/examples/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
/>

## Syntaxe

```typescript
function isNullableEmpty<
	GenericInput extends unknown
>(
  input: GenericInput
): input is Extract<GenericInput, EitherNullableEmpty>;
```

## Paramètres

- `input` : `Either` issu de `nullable`.

## Valeur de retour

`true` si la valeur est `null`.

## Voir aussi

- [`whenIsNullableEmpty`](/v1/api/either/whenIsNullableEmpty/fr).
- [`isNullableFilled`](/v1/api/either/isNullableFilled/fr).
