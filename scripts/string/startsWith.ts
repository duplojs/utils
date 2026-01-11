import { type IsEqual } from "@scripts/common";

type ComputeResult<
	GenericString extends string,
	GenericSearchString extends string,
> = Extract<GenericString, `${GenericSearchString}${string}`> extends infer InferredResult extends GenericString
	? IsEqual<InferredResult, never> extends true
		? GenericString & `${GenericSearchString}${string}`
		: InferredResult
	: never;

/**
 * {@include string/startsWith/index.md}
 */
export function startsWith<
	GenericString extends string,
	GenericSearchString extends string,
>(
	searchString: GenericSearchString,
): (input: GenericString) => input is ComputeResult<GenericString, GenericSearchString>;

export function startsWith<
	GenericString extends string,
	GenericSearchString extends string,
>(
	input: GenericString,
	searchString: GenericSearchString,
): input is ComputeResult<GenericString, GenericSearchString>;

export function startsWith(...args: [string, string] | [string]): any {
	if (args.length === 1) {
		const [searchString] = args;
		return (input: string) => startsWith(input, searchString);
	}

	const [input, searchString] = args;

	return input.startsWith(searchString);
}
