---
outline: [2, 3]
description: "The findDuplicates() function returns duplicated values from an array and keeps a single occurrence for each duplicated value."
prev:
  text: "find"
  link: "/en/v1/api/array/find"
next:
  text: "findLast"
  link: "/en/v1/api/array/findLast"
---

# findDuplicates

The **`findDuplicates()`** function returns duplicated values from an array and keeps a single occurrence for each duplicated value.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/array/findDuplicates/tryout.doc.ts"
  majorVersion="v1"
  height="565px"
/>

## Syntax

### Classic signature

```typescript
function findDuplicates<
  GenericInput extends readonly EligibleDuplicateElement[],
>(
  array: GenericInput,
): undefined | AnyTuple<GenericInput[number]>
```

## Parameters

- `array`: Input array to scan for duplicates.

## Return value

Returns `undefined` when no duplicate is found, otherwise returns a tuple containing duplicated values (one occurrence per value).

## See also

- [`find`](/en/v1/api/array/find) - Finds a value matching a predicate
- [`group`](/en/v1/api/array/group) - Groups values by key
- [`includes`](/en/v1/api/array/includes) - Checks value presence in an array
