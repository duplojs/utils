---
outline: [2, 3]
description: "The toString() function converts a literal (number, string, bigint, boolean, null, undefined) into a typed template string."
prev:
  text: "toTransform"
  link: "/en/v1/api/common/toTransform"
next:
  text: "stringToMillisecond"
  link: "/en/v1/api/common/stringToMillisecond"
---

# toString

The **`toString()`** function converts a literal (`number`, `string`, `bigint`, `boolean`, `null`, `undefined`) into a typed template string.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/toString/tryout.doc.ts"
  majorVersion="v1"
  height="229px"
/>

## Syntax

```typescript
function toString<
	GenericInput extends number | string | bigint | boolean | null | undefined
>(
	input: GenericInput
): `${GenericInput}`;
```

## Parameters

- `input` : Literal to convert into a typed string.

## Return value

A typed literal string corresponding exactly to the provided value.

## See also

- [`toJSON`](/en/v1/api/common/toJSON) - Prepares for JSON
- [`stringToMillisecond`](/en/v1/api/common/stringToMillisecond) - Parses durations
