---
outline: [2, 3]
description: "The toUpperCase() method returns a new string with all characters in uppercase."
prev:
  text: "toLowerCase"
  link: "/en/v1/api/string/toLowerCase"
next:
  text: "normalize"
  link: "/en/v1/api/string/normalize"
---

# toUpperCase

The **`toUpperCase()`** method returns a new string with all characters in uppercase.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/string/toUpperCase/tryout.doc.ts"
  majorVersion="v1"
  height="250px"
/>

## Syntax

```typescript
function toUpperCase<
	GenericInput extends string
>(
	input: GenericInput
): Uppercase<GenericInput>;
```

## Parameters

- `input`: The string to modify. The type is generic (`GenericInput extends string`) to allow precise literal type inference.

### Return value

A new string with all characters in uppercase. The return type is precisely inferred thanks to TypeScript's `Uppercase<GenericInput>` utility type.

## See also

- [toLowerCase](/en/v1/api/string/toLowerCase): Converts the entire string to lowercase.
- [capitalize](/en/v1/api/string/capitalize): Uppercases the first letter of a string.
- [normalize](/en/v1/api/string/normalize): Normalizes a Unicode string according to a specific form.

## Sources

- [MDN Web Docs - String.prototype.toUpperCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
- [TypeScript - Uppercase&lt;StringType&gt;](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#uppercasestringtype) - TypeScript utility type for type inference
