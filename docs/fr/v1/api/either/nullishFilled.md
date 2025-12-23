---
outline: [2, 3]
prev:
  text: "nullishEmpty"
  link: "/fr/v1/api/either/nullishEmpty"
next:
  text: "isNullishEmpty"
  link: "/fr/v1/api/either/isNullishEmpty"
---

# nullishFilled

Construit un `EitherRight<"nullish">` avec une valeur non-nulle/non-undefined.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/nullishFilled/tryout.doc.ts"
  majorVersion="v1"
  height="240px"
/>

## Syntaxe

```typescript
function nullishFilled<
	const GenericInput extends unknown
>(
  input: GenericInput
): EitherNullishFilled<GenericInput>;
```

## Paramètres

- `input` : Valeur définie.

## Valeur de retour

`EitherNullishFilled<GenericInput>` représentant un cas « présent ».

## Voir aussi

- [`nullish`](/fr/v1/api/either/nullish).
- [`whenIsNullishFilled`](/fr/v1/api/either/whenIsNullishFilled).
