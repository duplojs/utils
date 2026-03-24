---
outline: [2, 3]
description: "Creates an initializer that returns a value and automatically registers flow cleanup effects."
prev:
  text: "step"
  link: "/en/v1/api/flow/step"
next:
  text: "Flow"
  link: "/en/v1/api/flow/"
---

# createInitializer

The **`createInitializer()`** function wraps an initializer and turns it into a flow-compatible generator that can automatically register a `defer` callback, a `finalizer` callback, or both.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/flow/createInitializer/tryout.doc.ts"
  majorVersion="v1"
  height="334px"
/>

## Syntax

```typescript
function createInitializer<
	GenericArgs extends unknown[],
	GenericOutput extends unknown
>(
	initializer: (...args: GenericArgs) => GenericOutput,
	params: {
		defer?: (output: Awaited<GenericOutput>) => unknown;
		finalizer?: (output: Awaited<GenericOutput>) => unknown;
	}
): (...args: GenericArgs) => Generator | AsyncGenerator
```

## Parameters

- `initializer`: Function producing the value to expose inside the flow.
- `params.defer`: Optional cleanup callback created from the produced value.
- `params.finalizer`: Optional final callback created from the produced value.

## Return value

A function returning a generator compatible with `F.run()`. The generator returns the initializer result and registers the configured cleanup effects.

## See also

- [`defer`](/en/v1/api/flow/defer) - Registers a cleanup callback
- [`finalizer`](/en/v1/api/flow/finalizer) - Registers a final callback
