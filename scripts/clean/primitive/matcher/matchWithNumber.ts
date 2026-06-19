import { type AnyFunction, type ComputedTypeError, type FixDeepFunctionInfer, type IsEqual, type Unwrap, unwrap } from "@scripts/common";
import { type Primitive } from "../base";
import { type OnlyLiteralPrimitiveNumber } from "@scripts/clean/types/onlyLiteral";

type ComputeMatcher<
	GenericInput extends Primitive<number>,
> = {
	[Prop in Unwrap<GenericInput>]: (
		value: GenericInput & Primitive<Prop>
	) => unknown
};

type ForbiddenMoreKey<
	GenericInput extends Primitive<number>,
	GenericMatcher extends ComputeMatcher<GenericInput>,
> = Exclude<keyof GenericMatcher, Unwrap<GenericInput>> extends infer InferredKey
	? IsEqual<InferredKey, never> extends true
		? unknown
		: ComputedTypeError<
			`Key "${Extract<InferredKey, number>}" is forbidden.`
		>
	: never;

/**
 * {@include clean/matchWithNumber/index.md}
 */
export function matchWithNumber<
	GenericInput extends Primitive<number>,
	GenericMatcher extends ComputeMatcher<GenericInput>,
>(
	matcher: FixDeepFunctionInfer<
		ComputeMatcher<NoInfer<GenericInput>>,
		GenericMatcher
	>
		& ForbiddenMoreKey<NoInfer<GenericInput>, GenericMatcher>
): (input: GenericInput & OnlyLiteralPrimitiveNumber<GenericInput>) => ReturnType<
	NoInfer<GenericMatcher>[keyof GenericMatcher]
>;

export function matchWithNumber<
	GenericInput extends Primitive<number>,
	GenericMatcher extends ComputeMatcher<GenericInput>,
>(
	input: GenericInput & OnlyLiteralPrimitiveNumber<GenericInput>,
	matcher: FixDeepFunctionInfer<
		ComputeMatcher<GenericInput>,
		GenericMatcher
	>
	& ForbiddenMoreKey<GenericInput, GenericMatcher>
): ReturnType<
	GenericMatcher[keyof GenericMatcher]
>;

export function matchWithNumber(
	...args: [Primitive<number>, Record<number, AnyFunction>]
		| [Record<number, AnyFunction>]
): unknown {
	if (args.length === 1) {
		const [matcher] = args;

		return (input: Primitive<number>) => matcher[unwrap(input)]!(input);
	}

	const [input, matcher] = args;

	return matcher[unwrap(input)]!(input);
}
