---
outline: [2, 3]
prev:
  text: "memo"
  link: "/en/v1/api/common/memo"
next:
  text: "toTransform"
  link: "/en/v1/api/common/toTransform"
---

# toJSON

The **`toJSON()`** function prepares a value for JSON serialization while respecting objects' `toJSON` methods, traversing arrays/tuples, and excluding functions.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/toJSON/tryout.doc.ts"
  majorVersion="v1"
  height="800px"
/>

## Syntax

```typescript
type ToJSON<GenericInput extends unknown> =
	GenericInput extends number | string | null | undefined
		? GenericInput
		: GenericInput extends { toJSON: AnyFunction }
			? ReturnType<GenericInput["toJSON"]>
			: GenericInput extends [infer InferredFirst, ...infer InferredRest]
				? [
					ToJSON<InferredFirst>,
					...(
						ToJSON<InferredRest> extends infer InferredSubRest extends any[]
							? IsEqual<InferredSubRest, never[]> extends false
								? InferredSubRest
								: []
							: []
					)
				]
				: GenericInput extends any[]
					? ToJSON<GenericInput[number]>[]
					: GenericInput extends Record<number, unknown>
						? {
							[Prop in keyof GenericInput as GenericInput[Prop] extends AnyFunction ? never : Prop]:
								ToJSON<GenericInput[Prop]>;
						}
						: undefined;

function toJSON<
	GenericInput extends unknown
>(
	input: GenericInput
): ToJSON<GenericInput>;
```

## Parameters

- `input` : Value to transform into a JSON-safe structure.

## Return value

A value ready for JSON serialization, with `toJSON` methods respected and functions excluded.

## See also

- [`toTransform`](/en/v1/api/common/toTransform) - Generic transformation via `toTransform`
