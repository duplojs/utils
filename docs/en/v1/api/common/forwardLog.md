---
outline: [2, 3]
prev:
  text: "forward"
  link: "/en/v1/api/common/forward"
next:
  text: "justReturn"
  link: "/en/v1/api/common/justReturn"
---

# forwardLog

The **`forwardLog()`** function logs the received value (side effect) then returns it unchanged, handy for inspecting a pipeline without breaking it.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/forwardLog/tryout.doc.ts"
  majorVersion="v1"
  height="350px"
/>

## Syntax

```typescript
function forwardLog<
	const GenericInput extends unknown
>(input: GenericInput): GenericInput;
```

## Parameters

- `input` : The value to log and return.

## Return value

The same value passed as an argument, after sending it to standard output.

## See also

- [`forward`](/en/v1/api/common/forward) - Version without side effect
- [`pipe`](/en/v1/api/common/pipe) - To integrate `forwardLog` in a chain
