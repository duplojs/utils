---
outline: [2, 3]
description: "Construit un EitherRight<\"optional\"> lorsque la valeur est définie."
prev:
  text: "optionalEmpty"
  link: "/fr/v1/api/either/optionalEmpty"
next:
  text: "isOptionalEmpty"
  link: "/fr/v1/api/either/isOptionalEmpty"
---

# optionalFilled

Construit un `EitherRight<"optional">` lorsque la valeur est définie.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/optionalFilled/tryout.doc.ts"
  majorVersion="v1"
  height="240px"
/>

## Syntaxe

```typescript
function optionalFilled<
	const GenericInput extends unknown
>(
  input: GenericInput
): EitherOptionalFilled<GenericInput>;
```

## Paramètres

- `input` : Valeur définie.

## Valeur de retour

`EitherOptionalFilled<GenericInput>`.

## Voir aussi

- [`optional`](/fr/v1/api/either/optional).
- [`whenIsOptionalFilled`](/fr/v1/api/either/whenIsOptionalFilled).
