---
outline: [2, 3]
description: "The createTransformer() function creates a recursive transformer from a method name and applies it to nested objects/arrays."
prev:
  text: "createEnum"
  link: "/en/v1/api/common/createEnum"
next:
  text: "globalStore"
  link: "/en/v1/api/common/globalStore"
---

# createTransformer

The **`createTransformer()`** function creates a recursive transformer from a method name.
The returned function walks through nested objects and arrays, and calls this method on values that implement it.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/createTransformer/tryout.doc.ts"
  majorVersion="v1"
  height="840px"
/>

## Syntax

```typescript
function createTransformer<
	GenericMethodName extends string
>(
	methodName: GenericMethodName
): TransformerFunction<GenericMethodName>
```

## Parameters

- `methodName`: Method name to call recursively on compatible values.

## Return value

A transformer function that recursively projects nested values.

Two default transformers are provided by the library: `toNative` and `toJSON`.

## See also

- [`createEnum`](/en/v1/api/common/createEnum) - Typed immutable enum factory
- [`unwrap`](/en/v1/api/common/unwrap) - Retrieves the inner wrapped value
