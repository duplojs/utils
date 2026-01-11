---
outline: [2, 3]
description: "La fonction isWrappedValue() est un type guard qui vérifie si une valeur est un WrappedValue créé via wrapValue/toWrappedValue."
prev:
  text: "wrapValue"
  link: "/fr/v1/api/common/wrapValue"
next:
  text: "isRuntimeWrappedValueKey"
  link: "/fr/v1/api/common/isRuntimeWrappedValueKey"
---

# isWrappedValue

La fonction **`isWrappedValue()`** est un type guard qui vérifie si une valeur est un `WrappedValue` créé via `wrapValue`/`toWrappedValue`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/isWrappedValue/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntaxe

```typescript
function isWrappedValue<
	GenericInput extends unknown
>(
	input: GenericInput
): input is Extract<GenericInput, WrappedValue<any>>;
```

## Paramètres

- `input` : Valeur potentiellement wrappée à tester.

## Valeur de retour

Un booléen, et un affinage de type vers `WrappedValue<...>` lorsqu'il est vrai.

## Voir aussi

- [`wrapValue`](/fr/v1/api/common/wrapValue) - Enveloppe une valeur
- [`toWrappedValue`](/fr/v1/api/common/toWrappedValue) - Enveloppe si nécessaire
