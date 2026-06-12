---
outline: [2, 3]
description: "The withMaxElements() function adds a MaxElements constraint to a finite tuple without checking it again at runtime."
prev:
  text: "castMaxElements"
  link: "/en/v1/api/array/castMaxElements"
next:
  text: "set"
  link: "/en/v1/api/array/set"
---

# withMaxElements

The **`withMaxElements()`** function adds a `MaxElements` constraint to a finite tuple without checking it again at runtime. It is useful when the tuple is already known at compile time and must satisfy an API contract such as `MaxElements<5>`.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/array/withMaxElements/tryout.doc.ts"
  majorVersion="v1"
  height="670px"
/>

## Syntax

### Current tuple length

```typescript
function withMaxElements<
	GenericArray extends AnyTuple<unknown>
>(
	array: GenericArray
): GenericArray & MaxElements<GenericArray["length"]>
```

### Explicit max length

```typescript
function withMaxElements<
	GenericArray extends AnyTuple<unknown>,
	GenericLength extends number
>(
	array: GenericArray,
	length: GenericLength
): GenericArray & MaxElements<GenericLength>
```

## Parameters

- `array`: Tuple whose length is known by TypeScript.
- `length`: Optional literal maximum. It must be greater than or equal to the tuple length.

## Return value

The same tuple reference, with a `MaxElements<length>` type marker.

When `length` is omitted, TypeScript can infer the maximum either from the tuple length or from a contextual contract:

```typescript
const roles = A.withMaxElements(["admin"] as const) satisfies A.MaxElements<5>;
```

The function does not validate dynamic arrays at runtime. Use [`maxElements`](/en/v1/api/array/maxElements) for runtime checks, and use [`castMaxElements`](/en/v1/api/array/castMaxElements) to widen an existing `MaxElements` constraint.

## See also

- [`maxElements`](/en/v1/api/array/maxElements) - Checks and creates a `MaxElements` constraint at runtime
- [`castMaxElements`](/en/v1/api/array/castMaxElements) - Readapts an existing `MaxElements` constraint
- [`toTuple`](/en/v1/api/array/toTuple) - Converts values to a strictly typed tuple
