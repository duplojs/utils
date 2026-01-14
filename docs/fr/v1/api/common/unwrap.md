---
outline: [2, 3]
description: "La fonction unwrap() extrait la valeur interne d'un WrappedValue. Si l'entrée n'est pas wrappée, elle est renvoyée telle quelle."
prev:
  text: "toWrappedValue"
  link: "/fr/v1/api/common/toWrappedValue"
next:
  text: "addWrappedProperties"
  link: "/fr/v1/api/common/addWrappedProperties"
---

# unwrap

La fonction **`unwrap()`** extrait la valeur interne d'un `WrappedValue`. Si l'entrée n'est pas wrappée, elle est renvoyée telle quelle.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/unwrap/tryout.doc.ts"
  majorVersion="v1"
  height="397px"
/>

## Syntaxe

```typescript
type Unwrap<
	GenericAnyValue extends unknown
> = GenericAnyValue extends WrappedValue<infer inferredValue>
		? inferredValue
		: GenericAnyValue;

function unwrap<
	GenericInput extends AnyValue,
	GenericAnyValue extends AnyValue | WrappedValue<GenericInput>
>(
	anyValue: GenericAnyValue
): Unwrap<GenericAnyValue>;
```

## Paramètres

- `anyValue` : Valeur wrappée ou non à déballer.

## Valeur de retour

La valeur interne si l'entrée était wrappée, sinon la valeur d'entrée.

## Voir aussi

- [`wrapValue`](/fr/v1/api/common/wrapValue) - Enveloppe une valeur
