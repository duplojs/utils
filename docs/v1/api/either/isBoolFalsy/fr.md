---
outline: [2, 3]
prev:
  text: "whenIsBoolTruthy"
  link: "/v1/api/either/whenIsBoolTruthy/fr"
next:
  text: "whenIsBoolFalsy"
  link: "/v1/api/either/whenIsBoolFalsy/fr"
---

# isBoolFalsy

Type guard qui détecte un `EitherBoolFalsy`.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/either/isBoolFalsy/examples/tryout.doc.ts"
  majorVersion="v1"
  height="240px"
/>

## Syntaxe

```typescript
function isBoolFalsy<
	GenericInput extends unknown>
(
  input: GenericInput
): input is Extract<GenericInput, EitherBoolFalsy>;
```

## Paramètres

- `input` : Valeur issue des helpers booléens.

## Valeur de retour

`true` si la valeur est falsy (`Left`).

## Voir aussi

- [`whenIsBoolFalsy`](/v1/api/either/whenIsBoolFalsy/fr).
- [`isBoolTruthy`](/v1/api/either/isBoolTruthy/fr).
