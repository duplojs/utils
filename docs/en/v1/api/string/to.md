---
outline: [2, 3]
description: "The to() function converts a primitive value to its string representation."
prev:
  text: "concat"
  link: "/en/v1/api/string/concat"
next:
  text: "isKeyof"
  link: "/en/v1/api/string/isKeyof"
---

# to

The **`to()`** function converts a primitive value to its string representation.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/string/to/tryout.doc.ts"
  majorVersion="v1"
  height="187px"
/>

## Syntax

### Classic signature

```typescript
function to<
	GenericValue extends string | boolean | null | number | undefined | bigint
>(
	value: GenericValue
): `${GenericValue}`
```

## Parameters

- `value`: The primitive value to convert.

## Return value

A string representation of the input value, preserving literal types when possible.

## See also

- [`concat`](/en/v1/api/string/concat) - Concatenates multiple strings
- [`toLowerCase`](/en/v1/api/string/toLowerCase) - Converts a string to lowercase
