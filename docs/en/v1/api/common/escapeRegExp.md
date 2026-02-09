---
outline: [2, 3]
description: "The escapeRegExp() function escapes special characters in a string so it can be reused in a regular expression without altering its meaning."
prev:
  text: "stringToBytes"
  link: "/en/v1/api/common/stringToBytes"
next:
  text: "toRegExp"
  link: "/en/v1/api/common/toRegExp"
---

# escapeRegExp

The **`escapeRegExp()`** function escapes special characters in a string so it can be reused in a regular expression without altering its meaning.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/escapeRegExp/tryout.doc.ts"
  majorVersion="v1"
  height="187px"
/>

## Syntax

```typescript
function escapeRegExp<
	GenericInput extends string
>(
	input: GenericInput
): string;
```

## Parameters

- `input` : String to escape for use in a regex.

## Return value

A string where all regex metacharacters have been escaped.

## See also

- [`interpolation`](/en/v1/api/common/interpolation) - Generates typed templates with placeholders
