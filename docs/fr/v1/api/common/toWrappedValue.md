---
outline: [2, 3]
description: "La fonction toWrappedValue() garantit qu'une valeur est enveloppée : si elle est déjà un WrappedValue, elle est retournée telle quelle, sinon elle est wrappée."
prev:
  text: "isRuntimeWrappedValueKey"
  link: "/fr/v1/api/common/isRuntimeWrappedValueKey"
next:
  text: "unwrap"
  link: "/fr/v1/api/common/unwrap"
---

# toWrappedValue

La fonction **`toWrappedValue()`** garantit qu'une valeur est enveloppée : si elle est déjà un `WrappedValue`, elle est retournée telle quelle, sinon elle est wrappée.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/toWrappedValue/tryout.doc.ts"
  majorVersion="v1"
  height="400px"
/>

## Syntaxe

```typescript
function toWrappedValue<
	GenericInnerValue extends AnyValue,
	GenericInput extends MaybeWrapped<GenericInnerValue>
>(
	input: GenericInput
): GenericInput extends WrappedValue ? GenericInput : WrappedValue<GenericInput>;
```

## Paramètres

- `input` : Valeur (déjà wrappée ou non) à normaliser en `WrappedValue`.

## Valeur de retour

La valeur wrappée, ou la valeur initiale si elle l'était déjà.

## Voir aussi

- [`wrapValue`](/fr/v1/api/common/wrapValue) - Enveloppe directement
- [`unwrap`](/fr/v1/api/common/unwrap) - Déballe un `WrappedValue`
