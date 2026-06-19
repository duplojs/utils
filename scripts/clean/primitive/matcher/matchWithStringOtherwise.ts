import { type AnyFunction, type ComputedTypeError, type FixDeepFunctionInfer, type IsEqual, type Unwrap, unwrap } from "@scripts/common";
import { type GetPropsWithValueExtends } from "@scripts/object";
import { type OnlyLiteralPrimitiveString } from "@scripts/clean/types/onlyLiteral";
import { type Primitive } from "../base";

type ComputeMatcher<GenericInput extends Primitive<string>> = {
	[Prop in Unwrap<GenericInput>]?: (
		value: GenericInput & Primitive<Prop>
	) => unknown
};

type ForbiddenMoreKey<
	GenericInput extends Primitive<string>,
	GenericMatcher extends ComputeMatcher<GenericInput>,
> = Exclude<keyof GenericMatcher, Unwrap<GenericInput>> extends infer InferredKey
	? IsEqual<InferredKey, never> extends true
		? unknown
		: ComputedTypeError<`Key "${Extract<InferredKey, string>}" is forbidden.`>
	: never;

type HandledKeys<GenericMatcher extends object> = Extract<
	GetPropsWithValueExtends<GenericMatcher, AnyFunction>,
	string
>;

type OtherwiseValue<
	GenericInput extends Primitive<string>,
	GenericMatcher extends object,
> = Extract<
	& GenericInput
	& Primitive<Exclude<Unwrap<GenericInput>, HandledKeys<GenericMatcher>>>,
	any
>;

function execute(
	input: Primitive<string>,
	matcher: Record<string, AnyFunction | undefined>,
	otherwise: AnyFunction,
) {
	const callback = matcher[unwrap(input)];
	return callback === undefined ? otherwise(input) : callback(input);
}

/** {@include clean/matchWithStringOtherwise/index.md} */
export function matchWithStringOtherwise<
	GenericInput extends Primitive<string>,
	GenericMatcher extends ComputeMatcher<GenericInput>,
	GenericOutput,
>(
	matcher: FixDeepFunctionInfer<ComputeMatcher<NoInfer<GenericInput>>, GenericMatcher>
		& ForbiddenMoreKey<NoInfer<GenericInput>, GenericMatcher>,
	otherwise: (value: OtherwiseValue<GenericInput, GenericMatcher>) => GenericOutput
): (input: GenericInput & OnlyLiteralPrimitiveString<GenericInput>) => (
	| ReturnType<Extract<NoInfer<GenericMatcher>[keyof GenericMatcher], AnyFunction>>
	| GenericOutput
);

export function matchWithStringOtherwise<
	GenericInput extends Primitive<string>,
	GenericMatcher extends ComputeMatcher<GenericInput>,
	GenericOutput,
>(
	input: GenericInput & OnlyLiteralPrimitiveString<GenericInput>,
	matcher: FixDeepFunctionInfer<ComputeMatcher<GenericInput>, GenericMatcher>
		& ForbiddenMoreKey<GenericInput, GenericMatcher>,
	otherwise: (value: OtherwiseValue<GenericInput, GenericMatcher>) => GenericOutput
): (
	| ReturnType<Extract<GenericMatcher[keyof GenericMatcher], AnyFunction>>
	| GenericOutput
);

export function matchWithStringOtherwise(
	...args: [Primitive<string>, Record<string, AnyFunction | undefined>, AnyFunction]
		| [Record<string, AnyFunction | undefined>, AnyFunction]
): unknown {
	if (args.length === 2) {
		const [matcher, otherwise] = args;
		return (input: Primitive<string>) => execute(input, matcher, otherwise);
	}

	const [input, matcher, otherwise] = args;
	return execute(input, matcher, otherwise);
}
