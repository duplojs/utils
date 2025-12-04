---
outline: [2, 3]
prev:
  text: "toWrappedValue"
  link: "/v1/api/common/toWrappedValue/fr"
next:
  text: "addWrappedProperties"
  link: "/v1/api/common/addWrappedProperties/fr"
---

# unwrap

La fonction **`unwrap()`** extrait la valeur interne d'un `WrappedValue`. Si l'entrée n'est pas wrappée, elle est renvoyée telle quelle.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/common/unwrap/examples/tryout.doc.ts"
  majorVersion="v1"
  height="400px"
/>

## Syntaxe

```typescript
type Unwrap<
	GenericAnyValue extends unknown
> = GenericAnyValue extends WrappedValue<infer inferredValue>
		? inferredValue
		: GenericAnyValue;

function unwrap<
	GenericValue extends AnyValue,
	GenericAnyValue extends AnyValue | WrappedValue<GenericValue>
>(
	anyValue: GenericAnyValue
): Unwrap<GenericAnyValue>;
```

## Paramètres

- `anyValue` : Valeur wrappée ou non à déballer.

## Valeur de retour

La valeur interne si l'entrée était wrappée, sinon la valeur d'entrée.

## Voir aussi

- [`wrapValue`](/v1/api/common/wrapValue/fr) - Enveloppe une valeur
