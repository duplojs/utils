import { type IsEqual } from "@scripts/common";

type ComputeResult<
	GenericString extends string,
	GenericSearchString extends string,
> = Extract<GenericString, `${string}${GenericSearchString}`> extends infer InferredResult extends GenericString
	? IsEqual<InferredResult, never> extends true
		? GenericString & `${string}${GenericSearchString}`
		: InferredResult
	: never;

/**
 * {@include string/endsWith/index.md}
 */
export function endsWith<
	GenericString extends string,
	GenericSearchString extends string,
>(
	searchString: GenericSearchString,
): (input: GenericString) => input is ComputeResult<GenericString, GenericSearchString>;

export function endsWith<
	GenericString extends string,
	GenericSearchString extends string,
>(
	input: GenericString,
	searchString: GenericSearchString,
): input is ComputeResult<GenericString, GenericSearchString>;

export function endsWith(...args: [string, string] | [string]): any {
	if (args.length === 1) {
		const [searchString] = args;

		return (input: string) => endsWith(input, searchString);
	}

	const [input, searchString] = args;

	return input.endsWith(searchString);
}
