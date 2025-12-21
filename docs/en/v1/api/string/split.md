---
outline: [2, 3]
prev:
  text: 'substring'
  link: '/en/v1/api/string/substring'
next:
  text: 'padStart'
  link: '/en/v1/api/string/padStart'
---

# split

The **`split()`** method divides a string into an array of substrings using a specified separator.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/string/split/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntax

### Classic signature

```typescript
function split<
	GenericInput extends string, 
	GenericSeparator extends string, 
	GenericLimit extends number
>(
	input: GenericInput, 
	separator: GenericSeparator | RegExp, 
	params?: StringSplitParams<GenericLimit>
): Split<GenericInput, GenericSeparator, GenericLimit>;
```

### Curried signature

```typescript
function split<
	GenericInput extends string, 
	GenericSeparator extends string
>(
	separator: GenericSeparator | RegExp
): (input: GenericInput) => Split<GenericInput, GenericSeparator>;
```

## Parameters

- `input`: The string to divide.
- `separator`: The string or regular expression used to split the string.
- `params` (optional): An object containing `limit`, the maximum number of splits to perform.

## Return value

An array of strings. The return type is inferred thanks to the `SplitString` utility type.

## See also

- [`slice`](/en/v1/api/string/slice) - Extracts a section of a string
- [`substring`](/en/v1/api/string/substring) - Returns a substring between two indexes
- [`match`](/en/v1/api/string/match) - Retrieves matches of a regular expression

## Sources

- [MDN Web Docs - String.prototype.split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
