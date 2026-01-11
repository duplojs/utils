---
outline: [2, 3]
description: "The values() method returns an array of an object's values."
prev:
  text: "countKeys"
  link: "/en/v1/api/object/countKeys"
next:
  text: "entries"
  link: "/en/v1/api/object/entries"
---

# values

The **`values()`** method returns an array of an object's values.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/object/values/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntax

```typescript
function values<
	GenericValue extends AnyValue
>(
	object: Record<string, GenericValue>
): GenericValue[];
```

## Parameters

- `object`: The object or array-like structure whose values you want to retrieve.

## Return value

An array containing all the values of the object.

## See also

- [`keys`](/en/v1/api/object/keys) - Returns an array of an object's keys
- [`entries`](/en/v1/api/object/entries) - Returns an array of key-value pairs

## Sources

- [MDN Web Docs - Object.values()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)
