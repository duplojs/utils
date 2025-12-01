---
outline: [2, 3]
prev:
  text: "whenIsOptionalEmpty"
  link: "/v1/api/either/whenIsOptionalEmpty/fr"
next:
  text: "whenIsOptionalFilled"
  link: "/v1/api/either/whenIsOptionalFilled/fr"
---

# isOptionalFilled

Type guard qui vérifie qu'un `optional` contient une valeur.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/either/isOptionalFilled/examples/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
/>

## Syntaxe

```ts
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

- [`whenIsOptionalFilled`](/v1/api/either/whenIsOptionalFilled/fr).
- [`isOptionalEmpty`](/v1/api/either/isOptionalEmpty/fr).
