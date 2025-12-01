---
outline: [2, 3]
prev:
  text: "nullishFilled"
  link: "/v1/api/either/nullishFilled/fr"
next:
  text: "whenIsNullishEmpty"
  link: "/v1/api/either/whenIsNullishEmpty/fr"
---

# isNullishEmpty

Type guard détectant un `EitherNullishEmpty`.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/either/isNullishEmpty/examples/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
/>

## Syntaxe

```ts
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

- [`whenIsNullishEmpty`](/v1/api/either/whenIsNullishEmpty/fr).
- [`isNullishFilled`](/v1/api/either/isNullishFilled/fr).
