import { type AnyFunction, type ComputedTypeError, type FixDeepFunctionInfer, type IsEqual, type OnlyLiteralNumber } from "@scripts/common";

type ComputeMatcher<
	GenericInput extends number,
> = {
	[Prop in GenericInput]: (value: Prop) => unknown
};

type ForbiddenMoreKey<
	GenericInput extends number,
	GenericMatcher extends ComputeMatcher<GenericInput>,
> = Exclude<keyof GenericMatcher, GenericInput> extends infer InferredKey
	? IsEqual<InferredKey, never> extends true
		? unknown
		: ComputedTypeError<
			`Key "${Extract<InferredKey, number>}" is forbidden.`
		>
	: never;

/**
 * {@include pattern/matchWithNumber/index.md}
 */
export function matchWithNumber<
	GenericInput extends number,
	GenericMatcher extends ComputeMatcher<GenericInput>,
>(
	matcher: GenericMatcher
		& ComputeMatcher<NoInfer<GenericInput>>
		& ForbiddenMoreKey<NoInfer<GenericInput>, GenericMatcher>
): (input: GenericInput & OnlyLiteralNumber<GenericInput>) => ReturnType<
	NoInfer<GenericMatcher>[keyof GenericMatcher]
>;

export function matchWithNumber<
	GenericInput extends number,
	GenericMatcher extends ComputeMatcher<GenericInput>,
>(
	input: GenericInput & OnlyLiteralNumber<GenericInput>,
	matcher: FixDeepFunctionInfer<
		ComputeMatcher<GenericInput>,
		GenericMatcher
	>
	& ForbiddenMoreKey<GenericInput, GenericMatcher>
): ReturnType<
	GenericMatcher[keyof GenericMatcher]
>;

export function matchWithNumber(
	...args: [number, Record<number, AnyFunction>]
		| [Record<number, AnyFunction>]
): unknown {
	if (args.length === 1) {
		const [matcher] = args;

		return (input: number) => matcher[input]!(input);
	}

	const [input, matcher] = args;

	return matcher[input]!(input);
}
