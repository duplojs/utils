---
outline: [2, 3]
prev:
  text: "bool"
  link: "/v1/api/either/bool/fr"
next:
  text: "boolFalsy"
  link: "/v1/api/either/boolFalsy/fr"
---

# boolTruthy

Force la création d'un `EitherRight<"bool">` en marquant explicitement une valeur truthy.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/either/boolTruthy/examples/tryout.doc.ts"
  majorVersion="v1"
  height="380px"
/>

## Syntaxe

```typescript
function boolTruthy<
	const GenericValue extends unknown
>(
  value: GenericValue
): EitherBoolTruthy<GenericValue>;
```

## Paramètres

- `value` : Valeur considérée comme truthy.

## Valeur de retour

Un `EitherRight<"bool", GenericValue>` garantissant que la branche `Right` représente le cas truthy.

## Voir aussi

- [`bool`](/v1/api/either/bool/fr) – Conversion automatique truthy/falsy.
- [`whenIsBoolTruthy`](/v1/api/either/whenIsBoolTruthy/fr) – Agir uniquement sur les valeurs truthy.
