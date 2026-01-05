---
outline: [2, 3]
description: "The fromEntries() method builds an object from an array of key-value pairs."
prev:
  text: "entry"
  link: "/en/v1/api/object/entry"
next:
  text: "getProperty"
  link: "/en/v1/api/object/getProperty"
---

# fromEntries

The **`fromEntries()`** method builds an object from an array of key-value pairs.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/object/fromEntries/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntax

```typescript
function fromEntries<
	GenericKey extends ObjectKey, 
	const GenericEntry extends readonly [GenericKey, unknown]
>(
	entries: readonly GenericEntry[]
): ComputeEntries<GenericEntry>;
```

## Parameters

- `input`: An array of tuples `[key, value]`.

## Return value

An object built from the key-value pairs, with strict typing that preserves the exact types.

## See also

- [`entries`](/en/v1/api/object/entries) - Returns an array of an object's key-value pairs
- [`entry`](/en/v1/api/object/entry) - Creates a typed key-value pair

## Sources

- [MDN Web Docs - Object.fromEntries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries)
