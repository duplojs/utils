---
outline: [2, 3]
prev:
  text: "isRuntimeWrappedValueKey"
  link: "/v1/api/common/isRuntimeWrappedValueKey/fr"
next:
  text: "unwrap"
  link: "/v1/api/common/unwrap/fr"
---

# toWrappedValue

La fonction **`toWrappedValue()`** garantit qu'une valeur est enveloppée : si elle est déjà un `WrappedValue`, elle est retournée telle quelle, sinon elle est wrappée.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/common/toWrappedValue/examples/tryout.doc.ts"
  majorVersion="v1"
  height="400px"
/>

## Syntaxe

```typescript
function toWrappedValue<
	GenericInnerValue extends AnyValue,
	GenericValue extends MaybeWrapped<GenericInnerValue>
>(
	value: GenericValue
): GenericValue extends WrappedValue ? GenericValue : WrappedValue<GenericValue>;
```

## Paramètres

- `value` : Valeur (déjà wrappée ou non) à normaliser en `WrappedValue`.

## Valeur de retour

La valeur wrappée, ou la valeur initiale si elle l'était déjà.

## Voir aussi

- [`wrapValue`](/v1/api/common/wrapValue/fr) - Enveloppe directement
- [`unwrap`](/v1/api/common/unwrap/fr) - Déballe un `WrappedValue`
