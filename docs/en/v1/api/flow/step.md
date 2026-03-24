---
outline: [2, 3]
description: "Registers a named step and can optionally compute a value."
prev:
  text: "inject"
  link: "/en/v1/api/flow/inject"
next:
  text: "createInitializer"
  link: "/en/v1/api/flow/createInitializer"
---

# step

The **`step()`** function records a named step in a flow. When `includeDetails` is enabled in `F.run()`, the collected step names are returned alongside the final result.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/flow/step/tryout.doc.ts"
  majorVersion="v1"
  height="250px"
/>

## Syntax

```typescript
function step<
	GenericName extends string,
	GenericOutput extends unknown = void
>(
	name: GenericName,
	theFunction?: () => GenericOutput
): Generator | AsyncGenerator
```

## Parameters

- `name`: Step label stored in the execution details.
- `theFunction`: Optional callback executed after the step is emitted. Its result becomes the return value of `step()`.

## Return value

A generator yielding a step effect. It returns `undefined` when no callback is provided, otherwise returns the callback result.

## See also

- [`run`](/en/v1/api/flow/run) - Collects step names when `includeDetails` is enabled
- [`exec`](/en/v1/api/flow/exec) - Forwards step effects from nested flows
