---
outline: [2, 3]
description: "The justExec() function executes a callback immediately and returns the callback result."
prev:
  text: "justReturn"
  link: "/en/v1/api/common/justReturn"
next:
  text: "when"
  link: "/en/v1/api/common/when"
---

# justExec

The **`justExec()`** function executes a callback immediately and returns the callback result.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/justExec/tryout.doc.ts"
  majorVersion="v1"
  height="380px"
/>

## Syntax

```typescript
function justExec<
	GenericOutput extends unknown
>(
	theFunction: () => GenericOutput
): GenericOutput;
```

## Parameters

- `theFunction` : Callback executed immediately.

## Return value

The value returned by `theFunction`.

## See also

- [`justReturn`](/en/v1/api/common/justReturn) - Builds a constant callback that always returns the same value
- [`pipe`](/en/v1/api/common/pipe) - Chain transformations and inject `justExec` in a step
