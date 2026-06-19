import { type AnyFunction, type ComputedTypeError, type FixDeepFunctionInfer, type IsEqual, type Unwrap, unwrap } from "@scripts/common";
import { type Primitive } from "../base";
import { type OnlyLiteralPrimitiveString } from "@scripts/clean/types/onlyLiteral";

type ComputeMatcher<
	GenericInput extends Primitive<string>,
> = {
	[Prop in Unwrap<GenericInput>]: (
		value: GenericInput & Primitive<Prop>
	) => unknown
};

type ForbiddenMoreKey<
	GenericInput extends Primitive<string>,
	GenericMatcher extends ComputeMatcher<GenericInput>,
> = Exclude<keyof GenericMatcher, Unwrap<GenericInput>> extends infer InferredKey
	? IsEqual<InferredKey, never> extends true
		? unknown
		: ComputedTypeError<
			`Key "${Extract<InferredKey, string>}" is forbidden.`
		>
	: never;

/**
 * {@include clean/matchWithString/index.md}
 */
export function matchWithString<
	GenericInput extends Primitive<string>,
	GenericMatcher extends ComputeMatcher<GenericInput>,
>(
	matcher: FixDeepFunctionInfer<
		ComputeMatcher<NoInfer<GenericInput>>,
		GenericMatcher
	>
		& ForbiddenMoreKey<NoInfer<GenericInput>, GenericMatcher>
): (input: GenericInput & OnlyLiteralPrimitiveString<GenericInput>) => ReturnType<
	NoInfer<GenericMatcher>[keyof GenericMatcher]
>;

export function matchWithString<
	GenericInput extends Primitive<string>,
	GenericMatcher extends ComputeMatcher<GenericInput>,
>(
	input: GenericInput & OnlyLiteralPrimitiveString<GenericInput>,
	matcher: FixDeepFunctionInfer<
		ComputeMatcher<GenericInput>,
		GenericMatcher
	>
	& ForbiddenMoreKey<GenericInput, GenericMatcher>
): ReturnType<
	GenericMatcher[keyof GenericMatcher]
>;

export function matchWithString(
	...args: [Primitive<string>, Record<string, AnyFunction>]
		| [Record<string, AnyFunction>]
): unknown {
	if (args.length === 1) {
		const [matcher] = args;

		return (input: Primitive<string>) => matcher[unwrap(input)]!(input);
	}

	const [input, matcher] = args;

	return matcher[unwrap(input)]!(input);
}
