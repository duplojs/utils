---
outline: [2, 3]
prev:
  text: "keys"
  link: "/en/v1/api/object/keys"
next:
  text: "values"
  link: "/en/v1/api/object/values"
description: "Counts the number of an object's keys while ignoring internal keys."
---

# countKeys

The **`countKeys()`** method counts the number of an object's keys while ignoring internal keys.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/object/countKeys/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Syntax

```typescript
function countKeys<
	GenericObject extends object
>(
	object: GenericObject
): number
```

## Parameters

- `object`: The object whose keys you want to count.

## Return value

The number of the object's keys, excluding internal keys.

## See also

- [`keys`](/en/v1/api/object/keys) - Returns an array of an object's keys
- [`values`](/en/v1/api/object/values) - Returns an array of an object's values
- [`entries`](/en/v1/api/object/entries) - Returns an array of key-value pairs

## Sources

- [MDN Web Docs - Object.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
