---
outline: [2, 3]
prev:
  text: "escapeRegExp"
  link: "/en/v1/api/common/escapeRegExp"
next:
  text: "wrapValue"
  link: "/en/v1/api/common/wrapValue"
---

# createInterpolation

The **`createInterpolation()`** function generates a typed templating function: the `{id}` placeholders of the string are required at runtime and checked at compile time. In strict mode, an error is thrown if an id is missing.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/interpolation/tryout.doc.ts"
  majorVersion="v1"
  height="350px"
/>

## Syntax

```typescript
function createInterpolation<
	GenericInput extends string,
	GenericInterpolationId extends ExtractInterpolationId<GenericInput>,
	GenericStrict extends boolean
>(
	input: GenericInput,
	strict?: GenericStrict
): <
	GenericInterpolationMapperValue extends string,
	GenericInterpolationValues extends Record<GenericInterpolationId, GenericInterpolationMapperValue>
>(
	...[interpolationValues]: IsEqual<GenericInterpolationId, never> extends true
		? []
		: [interpolationValues: GenericInterpolationValues]
) => IsEqual<GenericStrict, true> extends true
	? ReplaceInterpolationIdByValues<GenericInput, GenericInterpolationValues>
	: string;
```

## Parameters

- `input` : Template string containing `{id}` placeholders.
- `strict` : Boolean (optional). If `true`, all ids must be provided or an error is thrown.

## Return value

A typed interpolation function that requires a values object for each id present in the template and returns the interpolated string (or `string` in non-strict mode).

## See also

- [`escapeRegExp`](/en/v1/api/common/escapeRegExp) - Escape a string before regex usage
