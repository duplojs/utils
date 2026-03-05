---
outline: [2, 3]
description: "The prepend() function adds one or more prefix strings before an input string and returns a new string."
prev:
  text: "concat"
  link: "/en/v1/api/string/concat"
next:
  text: "pop"
  link: "/en/v1/api/string/pop"
---

# prepend

The **`prepend()`** function adds one or more prefix strings before an input string and returns a new string.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/string/prepend/tryout.doc.ts"
  majorVersion="v1"
  height="271px"
/>

## Syntax

### Classic signature

```typescript
function prepend(
	input: string,
	...textsRest: string[]
): string
```

### Curried signature

```typescript
function prepend(
	text: string
): (input: string) => string
```

## Parameters

- `input`: The base string.
- `text`: Prefix used in curried mode.
- `textsRest`: One or more prefix strings to place before `input`.

## Return value

A new string built by concatenating all prefixes before the input string.

## See also

- [`concat`](/en/v1/api/string/concat) - Concatenates one or more strings after an input
- [`pop`](/en/v1/api/string/pop) - Removes the last character of a string
