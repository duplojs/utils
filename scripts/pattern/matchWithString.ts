import { type AnyFunction, type FixDeepFunctionInfer, type OnlyLiteralString } from "@scripts/common";
import { type ForbiddenKey } from "@scripts/object";

type ComputeMatcher<
	GenericInput extends string,
> = {
	[Prop in GenericInput]: (value: Prop) => unknown
};

type ForbiddenMoreKey<
	GenericInput extends string,
	GenericMatcher extends ComputeMatcher<GenericInput>,
> = ForbiddenKey<
	GenericMatcher,
	Extract<Exclude<keyof GenericMatcher, GenericInput>, string>
>;

/**
 * {@include pattern/matchWithString/index.md}
 */
export function matchWithString<
	GenericInput extends string,
	GenericMatcher extends ComputeMatcher<GenericInput>,
>(
	matcher: GenericMatcher
		& ComputeMatcher<NoInfer<GenericInput>>
		& ForbiddenMoreKey<NoInfer<GenericInput>, GenericMatcher>
): (input: GenericInput & OnlyLiteralString<GenericInput>) => ReturnType<
	NoInfer<GenericMatcher>[keyof GenericMatcher]
>;

export function matchWithString<
	GenericInput extends string,
	GenericMatcher extends ComputeMatcher<GenericInput>,
>(
	input: GenericInput & OnlyLiteralString<GenericInput>,
	matcher: FixDeepFunctionInfer<
		ComputeMatcher<GenericInput>,
		GenericMatcher
	>
	& ForbiddenMoreKey<GenericInput, GenericMatcher>
): ReturnType<
	GenericMatcher[keyof GenericMatcher]
>;

export function matchWithString(
	...args: [string, Record<string, AnyFunction>]
		| [Record<string, AnyFunction>]
): unknown {
	if (args.length === 1) {
		const [matcher] = args;

		return (input: string) => matcher[input]!(input);
	}

	const [input, matcher] = args;

	return matcher[input]!(input);
}
