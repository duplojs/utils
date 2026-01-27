---
outline: [2, 3]
description: "Construit un Left<\"bool\"> pour une valeur explicitement falsy (0, \"\", null, undefined, false)."
prev:
  text: "boolTruthy"
  link: "/fr/v1/api/either/boolTruthy"
next:
  text: "isBoolTruthy"
  link: "/fr/v1/api/either/isBoolTruthy"
---

# boolFalsy

Construit un `Left<"bool">` pour une valeur explicitement falsy (`0`, `""`, `null`, `undefined`, `false`).

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/boolFalsy/tryout.doc.ts"
  majorVersion="v1"
  height="397px"
/>

## Syntaxe

```typescript
function boolFalsy<
	const GenericInput extends BoolFalsyValue = undefined
>(
  input?: GenericInput
): BoolFalsy<GenericInput>;
```

## Paramètres

- `input` : Valeur falsy (optionnelle).

## Valeur de retour

Un `Left<"bool", GenericInput>` permettant de représenter un faux explicite.

## Voir aussi

- [`bool`](/fr/v1/api/either/bool) – Conversion truthy/falsy automatique.
- [`whenIsBoolFalsy`](/fr/v1/api/either/whenIsBoolFalsy) – Pour déclencher une action sur les falsy.
