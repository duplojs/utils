import { type IsEqual } from "@scripts/common";

type ComputeResult<
	GenericString extends string,
	GenericSearchString extends string,
> = Extract<GenericString, `${string}${GenericSearchString}${string}`> extends infer InferredResult extends GenericString
	? IsEqual<InferredResult, never> extends true
		? GenericString & `${string}${GenericSearchString}${string}`
		: InferredResult
	: never;

export function includes<
	GenericString extends string,
	GenericSearchString extends string,
>(
	searchString: GenericSearchString,
): (input: GenericString) => input is ComputeResult<
	GenericString,
	GenericSearchString
>;

export function includes<
	GenericString extends string,
	GenericSearchString extends string,
>(
	input: GenericString,
	searchString: GenericSearchString,
): input is ComputeResult<
	GenericString,
	GenericSearchString
>;

export function includes(...args: [string, string] | [string]): any {
	if (args.length === 1) {
		const [searchString] = args;
		return (input: string) => includes(input, searchString);
	}

	const [input, searchString] = args as [string, string];

	return input.includes(searchString);
}
