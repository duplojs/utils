---
outline: [2, 3]
description: "The createFormData() function creates an extended FormData from nested values and exposes helpers to flatten or rebuild deep entries, including date/time runtime values."
prev:
  text: "builder"
  link: "/en/v1/api/common/builder"
next:
  text: "override"
  link: "/en/v1/api/common/override"
---

# createFormData

The **`createFormData()`** function creates an extended `FormData` from nested values (objects and arrays) and keeps the original input in `inputValues`.

Supported values are:
- `string`, `File`, `boolean`, `number`, `null`, `undefined`
- `DDate.TheDate`, `DDate.TheTime`
- nested objects and arrays of these values

Use `TheFormData.toFlatEntries(...)` when you need explicit flattened key/value pairs, and `TheFormData.fromEntries(...)` to rebuild nested objects after receiving form-data entries on the backend.
During flattening, non-`File` values are converted to strings (`null` becomes `"null"`).

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/common/createFormData/tryout.doc.ts"
  majorVersion="v1"
  height="586px"
/>

## Syntax

```typescript
type EligibleFormDataValue =
	| boolean
	| number
	| null
	| string
	| File
	| undefined
	| DDate.TheDate
	| DDate.TheTime
	| { [key: string]: EligibleFormDataValue }
	| EligibleFormDataValue[];

class TheFormData<
	GenericValues extends Record<string, EligibleFormDataValue>
> extends FormData {
	readonly inputValues: GenericValues;

	static toFlatEntries(
		value: EligibleFormDataValue,
		path?: string
	): Iterable<[string, string | File]>;

	static fromEntries(
		iterable: Iterable<[string, unknown]>,
		arrayMaxIndex: number
	): object;
}

function createFormData<
	GenericValues extends Record<string, EligibleFormDataValue>
>(
	inputValues: GenericValues
): TheFormData<GenericValues>;
```

## Parameters

- `inputValues` : Nested input object to convert into `FormData`.
- `iterable` : Flat entries (typically `FormData.entries()` output) to reconstruct.
- `arrayMaxIndex` : Maximum accepted index when reconstructing arrays with `fromEntries`.
- `value` / `path` : Inputs used by `toFlatEntries` to recursively flatten data.

## Return value

- `createFormData(...)` returns a `TheFormData` instance.
- `TheFormData.toFlatEntries(...)` returns an iterable of flat `[path, value]` pairs.
- `TheFormData.fromEntries(...)` returns a reconstructed nested object.

`toFlatEntries(...)` serializes `boolean`, `number`, `null`, `DDate.TheDate`, and `DDate.TheTime` as strings.

## See also

- [`pipe`](/en/v1/api/common/pipe) - Compose transformations around `createFormData`
- [`stringToBytes`](/en/v1/api/common/stringToBytes) - String parsing helper often used with multipart metadata
