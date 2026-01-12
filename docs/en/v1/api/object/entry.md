---
outline: [2, 3]
description: "The entry() method creates a typed key-value pair (tuple)."
prev:
  text: "entries"
  link: "/en/v1/api/object/entries"
next:
  text: "fromEntries"
  link: "/en/v1/api/object/fromEntries"
---

# entry

The **`entry()`** method creates a typed key-value pair (tuple).

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/object/entry/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntax

```typescript
function entry<
	GenericKey extends ObjectKey,
	GenericValue extends AnyValue
>(
	key: GenericKey,
	value: GenericValue
): readonly [GenericKey, GenericInput]
```

## Parameters

- `key`: The key of the entry (string, number, or symbol).
- `value`: The value associated with the key.

## Return value

A read-only tuple `[key, value]` with strict typing.

## See also

- [`entries`](/en/v1/api/object/entries) - Returns an array of an object's key-value pairs
- [`fromEntries`](/en/v1/api/object/fromEntries) - Builds an object from entries
