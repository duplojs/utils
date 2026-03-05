---
outline: [2, 3]
description: "The pop() function removes the last character from a string and returns a new string."
prev:
  text: "prepend"
  link: "/en/v1/api/string/prepend"
next:
  text: "shift"
  link: "/en/v1/api/string/shift"
---

# pop

The **`pop()`** function removes the last character from a string and returns a new string.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/string/pop/tryout.doc.ts"
  majorVersion="v1"
  height="250px"
/>

## Syntax

```typescript
function pop<
	GenericInput extends string
>(
	input: GenericInput
): Pop<GenericInput>
```

## Parameters

- `input`: String from which to remove the last character.

## Return value

A new string without its last character. Literal types are preserved when possible.

## See also

- [`shift`](/en/v1/api/string/shift) - Removes the first character of a string
- [`prepend`](/en/v1/api/string/prepend) - Adds prefix strings before the input
