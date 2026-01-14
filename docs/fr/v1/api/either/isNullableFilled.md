---
outline: [2, 3]
description: "Type guard qui vérifie que l'Either nullable contient bien une valeur."
prev:
  text: "whenIsNullableEmpty"
  link: "/fr/v1/api/either/whenIsNullableEmpty"
next:
  text: "whenIsNullableFilled"
  link: "/fr/v1/api/either/whenIsNullableFilled"
---

# isNullableFilled

Type guard qui vérifie que l'Either nullable contient bien une valeur.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/isNullableFilled/tryout.doc.ts"
  majorVersion="v1"
  height="271px"
/>

## Syntaxe

```typescript
function isNullableFilled<
	GenericInput extends unknown
>(
  input: GenericInput
): input is Extract<GenericInput, EitherNullableFilled>;
```

## Paramètres

- `input` : Résultat de `nullable`.

## Valeur de retour

`true` si la valeur n'est pas `null`.

## Voir aussi

- [`whenIsNullableFilled`](/fr/v1/api/either/whenIsNullableFilled).
- [`isNullableEmpty`](/fr/v1/api/either/isNullableEmpty).
