---
outline: [2, 3]
prev:
  text: "whenIsOptionalEmpty"
  link: "/fr/v1/api/either/whenIsOptionalEmpty"
next:
  text: "whenIsOptionalFilled"
  link: "/fr/v1/api/either/whenIsOptionalFilled"
---

# isOptionalFilled

Type guard qui vérifie qu'un `optional` contient une valeur.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/isOptionalFilled/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
/>

## Syntaxe

```typescript
function isOptionalFilled<
	GenericInput extends unknown
>(
  input: GenericInput
): input is Extract<GenericInput, EitherOptionalFilled>;
```

## Paramètres

- `input` : Résultat de `optional`.

## Valeur de retour

`true` si la valeur est définie.

## Voir aussi

- [`whenIsOptionalFilled`](/fr/v1/api/either/whenIsOptionalFilled).
- [`isOptionalEmpty`](/fr/v1/api/either/isOptionalEmpty).
