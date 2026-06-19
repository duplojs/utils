import { type AnyFunction, type FixDeepFunctionInfer, type OnlyLiteralString } from "@scripts/common";
import { type ForbiddenKey, type GetPropsWithValueExtends } from "@scripts/object";

type ComputeMatcher<GenericInput extends string> = {
	[Prop in GenericInput]?: (value: Prop) => unknown
};

type ForbiddenMoreKey<
	GenericInput extends string,
	GenericMatcher extends ComputeMatcher<GenericInput>,
> = ForbiddenKey<
	GenericMatcher,
	Extract<Exclude<keyof GenericMatcher, GenericInput>, string>
>;

type HandledKeys<GenericMatcher extends object> = Extract<
	GetPropsWithValueExtends<GenericMatcher, AnyFunction>,
	string
>;

function execute(
	input: string,
	matcher: Record<string, AnyFunction | undefined>,
	otherwise: AnyFunction,
) {
	const callback = matcher[input];
	return callback === undefined ? otherwise(input) : callback(input);
}

/** {@include pattern/matchWithStringOtherwise/index.md} */
export function matchWithStringOtherwise<
	GenericInput extends string,
	GenericMatcher extends ComputeMatcher<GenericInput>,
	GenericOutput,
>(
	matcher: GenericMatcher
		& ComputeMatcher<NoInfer<GenericInput>>
		& ForbiddenMoreKey<NoInfer<GenericInput>, GenericMatcher>,
	otherwise: (value: Exclude<GenericInput, HandledKeys<GenericMatcher>>) => GenericOutput
): (input: GenericInput & OnlyLiteralString<GenericInput>) => (
	| ReturnType<Extract<NoInfer<GenericMatcher>[keyof GenericMatcher], AnyFunction>>
	| GenericOutput
);

export function matchWithStringOtherwise<
	GenericInput extends string,
	GenericMatcher extends ComputeMatcher<GenericInput>,
	GenericOutput,
>(
	input: GenericInput & OnlyLiteralString<GenericInput>,
	matcher: FixDeepFunctionInfer<ComputeMatcher<GenericInput>, GenericMatcher>
		& ForbiddenMoreKey<GenericInput, GenericMatcher>,
	otherwise: (value: Exclude<GenericInput, HandledKeys<GenericMatcher>>) => GenericOutput
): (
	| ReturnType<Extract<GenericMatcher[keyof GenericMatcher], AnyFunction>>
	| GenericOutput
);

export function matchWithStringOtherwise(
	...args: [string, Record<string, AnyFunction | undefined>, AnyFunction]
		| [Record<string, AnyFunction | undefined>, AnyFunction]
): unknown {
	if (args.length === 2) {
		const [matcher, otherwise] = args;
		return (input: string) => execute(input, matcher, otherwise);
	}

	const [input, matcher, otherwise] = args;
	return execute(input, matcher, otherwise);
}
