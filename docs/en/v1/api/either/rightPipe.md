---
outline: [2, 3]
description: "Chains synchronous transformations on an Either as long as it remains Right. The pipeline stops as soon as a Left is returned."
prev:
  text: "futureError"
  link: "/en/v1/api/either/futureError"
next:
  text: "rightAsyncPipe"
  link: "/en/v1/api/either/rightAsyncPipe"
---

# rightPipe

Chains synchronous transformations on an `Either` as long as it remains `Right`. The pipeline stops as soon as a `Left` is returned.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/either/rightPipe/tryout.doc.ts"
  majorVersion="v1"
  height="470px"
/>

## Syntax

```typescript
function rightPipe<
	GenericInput extends AnyValue, GenericOutputPipe1 extends AnyValue
>(
  input: GenericInput,
  pipe1: EitherRightPipeFunction<GenericInput, GenericOutputPipe1>
): EitherRightPipeResult<GenericInput | GenericOutputPipe1, GenericOutputPipe1>;
// ... overloads up to 15 steps
```

`EitherRightPipeFunction` receives either the unwrapped value of a `Right` or the value if it is not an `Either`, and can return an `Either` or a raw value.

## Parameters

- `input`: Initial value (may already be an `Either`).
- `pipeX`: Functions to run in sequence. Each function can return an `Either` or a simple value.

## Return value

- If all steps stay `Right`, the last result is wrapped in `EitherSuccess`.
- As soon as a `Left` is returned, the pipeline stops and that `Left` is propagated.

## Best practices

- Use distinct info literals (`"step.1"`, `"step.2"`) to ease debugging.
- Combine `rightPipe` with `E.hasInformation` to branch your checks.
- For async logic, prefer [`rightAsyncPipe`](/en/v1/api/either/rightAsyncPipe).
