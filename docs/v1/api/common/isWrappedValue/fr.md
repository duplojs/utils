---
outline: [2, 3]
prev:
  text: "wrapValue"
  link: "/v1/api/common/wrapValue/fr"
next:
  text: "isRuntimeWrappedValueKey"
  link: "/v1/api/common/isRuntimeWrappedValueKey/fr"
---

# isWrappedValue

La fonction **`isWrappedValue()`** est un type guard qui vérifie si une valeur est un `WrappedValue` créé via `wrapValue`/`toWrappedValue`.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/common/isWrappedValue/examples/tryout.doc.ts"
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

- [`wrapValue`](/v1/api/common/wrapValue/fr) - Enveloppe une valeur
- [`toWrappedValue`](/v1/api/common/toWrappedValue/fr) - Enveloppe si nécessaire
