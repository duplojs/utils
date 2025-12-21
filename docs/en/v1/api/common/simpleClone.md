---
outline: [2, 3]
prev:
  text: "clone"
  link: "/en/v1/api/common/clone"
next:
  text: "createEnum"
  link: "/en/v1/api/common/createEnum"
---

# simpleClone

The **`simpleClone()`** function quickly duplicates a value without advanced logic, useful for shallow copies or simple structures.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/simpleClone/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntax

```typescript
function simpleClone<
	GenericInput extends unknown = unknown
>(
	input: GenericInput
): GenericInput;
```

## Parameters

- `input` : Value to duplicate.

## Return value

A new identical value (low-cost copy).

## See also

- [`clone`](/en/v1/api/common/clone) - Typed deep clone
