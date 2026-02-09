---
outline: [2, 3]
description: "The toRegExp() function normalizes a string, string array, or RegExp into a regular expression."
prev:
  text: "escapeRegExp"
  link: "/en/v1/api/common/escapeRegExp"
next:
  text: "mimeType"
  link: "/en/v1/api/common/mimeType"
---

# toRegExp

The **`toRegExp()`** function normalizes a string, string array, or `RegExp` into a regular expression.
When the input is textual, it escapes regex metacharacters and builds an exact-match pattern.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/toRegExp/tryout.doc.ts"
  majorVersion="v1"
  height="313px"
/>

## Syntax

```typescript
function toRegExp(
	input: string | string[] | RegExp
): RegExp;
```

## Parameters

- `input` : Value to convert into a `RegExp`.

## Return value

A `RegExp`:
- from a `string`: exact literal match (`^...$`)
- from a `string[]`: exact alternatives (`^(?:...|...)$`)
- from a `RegExp`: the same instance

## See also

- [`escapeRegExp`](/en/v1/api/common/escapeRegExp) - Escapes special characters for regex usage
