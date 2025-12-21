---
outline: [2, 3]
prev:
  text: "toJSON"
  link: "/en/v1/api/common/toJSON"
next:
  text: "toString"
  link: "/en/v1/api/common/toString"
---

# toTransform

The **`toTransform()`** function recursively applies objects' `toTransform` methods and traverses arrays/tuples to produce a value ready to be transported (DTO).

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/toTransform/tryout.doc.ts"
  majorVersion="v1"
  height="600px"
  :foldLines="[2]"
/>

## Syntax

```typescript
type ToTransform<GenericInput extends unknown> =
	GenericInput extends number | string | null | undefined
		? GenericInput
		: GenericInput extends { toTransform: AnyFunction }
			? ReturnType<GenericInput["toTransform"]>
			: GenericInput extends [infer InferredFirst, ...infer InferredRest]
				? [
					ToTransform<InferredFirst>,
					...(
						ToTransform<InferredRest> extends infer InferredSubRest extends any[]
							? IsEqual<InferredSubRest, never[]> extends false
								? InferredSubRest
								: []
							: []
					)
				]
				: GenericInput extends any[]
					? ToTransform<GenericInput[number]>[]
					: GenericInput extends Record<number, unknown>
						? {
							[Prop in keyof GenericInput]: ToTransform<GenericInput[Prop]>;
						}
						: GenericInput;

function toTransform<
	GenericInput extends unknown
>(
	input: GenericInput
): ToTransform<GenericInput>;
```

## Parameters

- `input` : Value to transform via `toTransform` (if present) or by recursive traversal.

## Return value

A value transformed according to encountered `toTransform` methods, suited for transport or storage.

## See also

- [`toJSON`](/en/v1/api/common/toJSON) - Prepares for JSON serialization
