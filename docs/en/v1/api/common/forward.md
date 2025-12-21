---
outline: [2, 3]
prev:
  text: "asyncInnerPipe"
  link: "/en/v1/api/common/asyncInnerPipe"
next:
  text: "forwardLog"
  link: "/en/v1/api/common/forwardLog"
---

# forward

The **`forward()`** function returns the passed argument without modifying it. Useful to standardize an API that expects a function, or to improve readability in a pipeline.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/forward/tryout.doc.ts"
  majorVersion="v1"
  height="370px"
/>

## Syntax

```typescript
function forward<
	GenericInput extends unknown
>(input: GenericInput): GenericInput;
```

## Parameters

- `input` : The value to return as is.

## Return value

The value provided as input, unchanged.

## See also

- [`forwardLog`](/en/v1/api/common/forwardLog) - Returns the value after logging it
- [`justReturn`](/en/v1/api/common/justReturn) - Builds a constant function
