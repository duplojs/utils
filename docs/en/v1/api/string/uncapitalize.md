---
outline: [2, 3]
description: "The uncapitalize() method returns a new string with the first letter lowercased."
prev:
  text: 'capitalize'
  link: '/en/v1/api/string/capitalize'
next:
  text: 'toLowerCase'
  link: '/en/v1/api/string/toLowerCase'
---

# uncapitalize

The **`uncapitalize()`** method returns a new string with the first letter lowercased.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/string/uncapitalize/tryout.doc.ts"
  majorVersion="v1"
  height="250px"
/>

## Syntax

```typescript
function uncapitalize<
	GenericInput extends string
>(
	input: GenericInput
): Uncapitalize<GenericInput>
```

## Parameters

- `input`: The string to modify. The type is generic (`GenericInput extends string`) to allow precise literal type inference.

### Return value

A new string with the first letter lowercased. The return type is precisely inferred thanks to TypeScript's `Uncapitalize<GenericInput>` utility type.
## See also

- [`capitalize`](/en/v1/api/string/capitalize) - Uppercases the first letter
- [`toUpperCase`](/en/v1/api/string/toUpperCase) - Converts the whole string to uppercase
- [`toLowerCase`](/en/v1/api/string/toLowerCase) - Converts the whole string to lowercase

## Sources

- [TypeScript - Uncapitalize&lt;StringType&gt;](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#uncapitalizestringtype) - TypeScript utility type for type inference
