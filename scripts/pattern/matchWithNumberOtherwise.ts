import { type AnyFunction, type ComputedTypeError, type FixDeepFunctionInfer, type IsEqual, type OnlyLiteralNumber } from "@scripts/common";
import { type GetPropsWithValueExtends } from "@scripts/object";

type ComputeMatcher<GenericInput extends number> = {
	[Prop in GenericInput]?: (value: Prop) => unknown
};

type ForbiddenMoreKey<
	GenericInput extends number,
	GenericMatcher extends ComputeMatcher<GenericInput>,
> = Exclude<keyof GenericMatcher, GenericInput> extends infer InferredKey
	? IsEqual<InferredKey, never> extends true
		? unknown
		: ComputedTypeError<`Key "${Extract<InferredKey, number>}" is forbidden.`>
	: never;

type HandledKeys<GenericMatcher extends object> = Extract<
	GetPropsWithValueExtends<GenericMatcher, AnyFunction>,
	number
>;

function execute(
	input: number,
	matcher: Record<number, AnyFunction | undefined>,
	otherwise: AnyFunction,
) {
	const callback = matcher[input];
	return callback === undefined ? otherwise(input) : callback(input);
}

/** {@include pattern/matchWithNumberOtherwise/index.md} */
export function matchWithNumberOtherwise<
	GenericInput extends number,
	GenericMatcher extends ComputeMatcher<GenericInput>,
	GenericOutput,
>(
	matcher: GenericMatcher
		& ComputeMatcher<NoInfer<GenericInput>>
		& ForbiddenMoreKey<NoInfer<GenericInput>, GenericMatcher>,
	otherwise: (value: Exclude<GenericInput, HandledKeys<GenericMatcher>>) => GenericOutput
): (input: GenericInput & OnlyLiteralNumber<GenericInput>) => (
	| ReturnType<Extract<NoInfer<GenericMatcher>[keyof GenericMatcher], AnyFunction>>
	| GenericOutput
);

export function matchWithNumberOtherwise<
	GenericInput extends number,
	GenericMatcher extends ComputeMatcher<GenericInput>,
	GenericOutput,
>(
	input: GenericInput & OnlyLiteralNumber<GenericInput>,
	matcher: FixDeepFunctionInfer<ComputeMatcher<GenericInput>, GenericMatcher>
		& ForbiddenMoreKey<GenericInput, GenericMatcher>,
	otherwise: (value: Exclude<GenericInput, HandledKeys<GenericMatcher>>) => GenericOutput
): (
	| ReturnType<Extract<GenericMatcher[keyof GenericMatcher], AnyFunction>>
	| GenericOutput
);

export function matchWithNumberOtherwise(
	...args: [number, Record<number, AnyFunction | undefined>, AnyFunction]
		| [Record<number, AnyFunction | undefined>, AnyFunction]
): unknown {
	if (args.length === 2) {
		const [matcher, otherwise] = args;
		return (input: number) => execute(input, matcher, otherwise);
	}

	const [input, matcher, otherwise] = args;
	return execute(input, matcher, otherwise);
}
