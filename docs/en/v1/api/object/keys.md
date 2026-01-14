---
outline: [2, 3]
description: "The keys() method returns an array of an object's keys with precise typing, excluding symbols."
prev:
  text: "Object"
  link: "/en/v1/api/object/"
next:
  text: "countKeys"
  link: "/en/v1/api/object/countKeys"
---

# keys

The **`keys()`** method returns an array of an object's keys with precise typing, excluding symbols.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/object/keys/tryout.doc.ts"
  majorVersion="v1"
  height="313px"
/>

## Syntax

```typescript
function keys<
	GenericInput extends object
>(
	input: GenericInput
): (Exclude<keyof GenericInput, symbol>)[]
```

## Parameters

- `input`: The object whose keys you want to retrieve.

## Return value

An array containing all the object's keys (excluding symbols) with precise typing.

## See also

- [`values`](/en/v1/api/object/values) - Returns an array of an object's values
- [`entries`](/en/v1/api/object/entries) - Returns an array of key-value pairs

## Sources

- [MDN Web Docs - Object.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
