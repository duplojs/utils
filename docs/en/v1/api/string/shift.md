---
outline: [2, 3]
description: "The shift() function removes the first character from a string and returns a new string."
prev:
  text: "pop"
  link: "/en/v1/api/string/pop"
next:
  text: "to"
  link: "/en/v1/api/string/to"
---

# shift

The **`shift()`** function removes the first character from a string and returns a new string.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/string/shift/tryout.doc.ts"
  majorVersion="v1"
  height="250px"
/>

## Syntax

```typescript
function shift<
	GenericInput extends string
>(
	input: GenericInput
): Shift<GenericInput>
```

## Parameters

- `input`: String from which to remove the first character.

## Return value

A new string without its first character. Literal types are preserved when possible.

## See also

- [`pop`](/en/v1/api/string/pop) - Removes the last character of a string
- [`substring`](/en/v1/api/string/substring) - Extracts part of a string between two indexes
