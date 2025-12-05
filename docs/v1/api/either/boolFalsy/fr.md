---
outline: [2, 3]
prev:
  text: "boolTruthy"
  link: "/v1/api/either/boolTruthy/fr"
next:
  text: "isBoolTruthy"
  link: "/v1/api/either/isBoolTruthy/fr"
---

# boolFalsy

Construit un `EitherLeft<"bool">` pour une valeur explicitement falsy (`0`, `""`, `null`, `undefined`, `false`).

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/either/boolFalsy/examples/tryout.doc.ts"
  majorVersion="v1"
  height="380px"
/>

## Syntaxe

```typescript
function boolFalsy<
	const GenericInput extends BoolFalsyValue = undefined
>(
  input?: GenericInput
): EitherBoolFalsy<GenericInput>;
```

## Paramètres

- `input` : Valeur falsy (optionnelle).

## Valeur de retour

Un `EitherLeft<"bool", GenericInput>` permettant de représenter un faux explicite.

## Voir aussi

- [`bool`](/v1/api/either/bool/fr) – Conversion truthy/falsy automatique.
- [`whenIsBoolFalsy`](/v1/api/either/whenIsBoolFalsy/fr) – Pour déclencher une action sur les falsy.
