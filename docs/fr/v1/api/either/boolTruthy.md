---
outline: [2, 3]
description: "Force la création d'un Right<\"bool\"> en marquant explicitement une valeur truthy."
prev:
  text: "bool"
  link: "/fr/v1/api/either/bool"
next:
  text: "boolFalsy"
  link: "/fr/v1/api/either/boolFalsy"
---

# boolTruthy

Force la création d'un `Right<"bool">` en marquant explicitement une valeur truthy.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/boolTruthy/tryout.doc.ts"
  majorVersion="v1"
  height="397px"
/>

## Syntaxe

```typescript
function boolTruthy<
	const GenericInput extends unknown
>(
  input: GenericInput
): BoolTruthy<GenericInput>;
```

## Paramètres

- `input` : Valeur considérée comme truthy.

## Valeur de retour

Un `Right<"bool", GenericInput>` garantissant que la branche `Right` représente le cas truthy.

## Voir aussi

- [`bool`](/fr/v1/api/either/bool) – Conversion automatique truthy/falsy.
- [`whenIsBoolTruthy`](/fr/v1/api/either/whenIsBoolTruthy) – Agir uniquement sur les valeurs truthy.
