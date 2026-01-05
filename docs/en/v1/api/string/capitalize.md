---
outline: [2, 3]
description: "The capitalize() method returns a new string with the first letter uppercased."
prev:
  text: 'String'
  link: '/en/v1/api/string/'
next:
  text: 'uncapitalize'
  link: '/en/v1/api/string/uncapitalize'
---

# capitalize

The **`capitalize()`** method returns a new string with the first letter uppercased.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/string/capitalize/tryout.doc.ts"
  majorVersion="v1"
  height="250px"
/>

## Syntax

```typescript
function capitalize<
	GenericInput extends string
>(
	input: GenericInput
): Capitalize<GenericInput>
```

## Parameters

- `input`: The string to modify. The type is generic (`GenericInput extends string`) to allow precise literal type inference.

### Return value

A new string with the first letter uppercased. The return type is precisely inferred thanks to TypeScript's `Capitalize<GenericInput>` utility type.

## See also

- [`uncapitalize`](/en/v1/api/string/uncapitalize) - Lowercases the first letter
- [`toUpperCase`](/en/v1/api/string/toUpperCase) - Converts the whole string to uppercase
- [`toLowerCase`](/en/v1/api/string/toLowerCase) - Converts the whole string to lowercase

## Sources

- [TypeScript - Capitalize&lt;StringType&gt;](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#capitalizestringtype) - TypeScript utility type for inference
