---
outline: [2, 3]
description: "The unwrapGroup() function unwraps every value of an object using unwrap(), while keeping the same keys."
prev:
  text: "unwrap"
  link: "/en/v1/api/common/unwrap"
next:
  text: "addWrappedProperties"
  link: "/en/v1/api/common/addWrappedProperties"
---

# unwrapGroup

The **`unwrapGroup()`** function unwraps every value of an object using `unwrap()`, while keeping the same keys.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/unwrapGroup/tryout.doc.ts"
  majorVersion="v1"
  height="292px"
/>

## Syntax

```typescript
function unwrapGroup<
	GenericGroup extends Record<string, unknown>
>(
	group: GenericGroup
): ComputeResult<GenericGroup>;
```

## Parameters

- `group` : Object whose values can be wrapped or plain.

## Return value

A new object with the same keys and all values unwrapped. The input object is not mutated.

## See also

- [`unwrap`](/en/v1/api/common/unwrap) - Unwraps a single value
- [`wrapValue`](/en/v1/api/common/wrapValue) - Wraps a value
