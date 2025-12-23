---
outline: [2, 3]
prev:
  text: "uncapitalize"
  link: "/en/v1/api/string/uncapitalize"
next:
  text: "toUpperCase"
  link: "/en/v1/api/string/toUpperCase"
---

# toLowerCase

The **`toLowerCase()`** method returns a new string with all characters in lowercase.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/string/toLowerCase/tryout.doc.ts"
  majorVersion="v1"
  height="250px"
/>

## Syntax

```typescript
function toLowerCase<
	GenericInput extends string
>(
	input: GenericInput
): Lowercase<GenericInput>;
```

## Parameters

- `input`: The string to modify. The type is generic (`GenericInput extends string`) to allow precise literal type inference.

### Return value

A new string with all characters in lowercase. The return type is precisely inferred thanks to TypeScript's `Lowercase<GenericInput>` utility type.

## See also 

- [`toUpperCase`](/en/v1/api/string/toUpperCase)
- [`capitalize`](/en/v1/api/string/capitalize)
- [`uncapitalize`](/en/v1/api/string/uncapitalize)

## Sources

- [MDN - String.prototype.toLowerCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) - JavaScript method used internally
- [TypeScript - Lowercase&lt;StringType&gt;](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#lowercasestringtype) - TypeScript utility type for type inference
