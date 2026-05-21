import { type AnyFunction, unwrap, type FixDeepFunctionInfer, type GetKindValue, type Kind, type Unwrap } from "@scripts/common";
import { informationKind } from "./kind";
import { type Right } from "./right";
import { type Left } from "./left";
import { type GetPropsWithValueExtends } from "@scripts/object";

type Either = Right | Left;

type ComputeMatcher<
	GenericEither extends Either,
> = Extract<
	{
		[
		Prop in GetKindValue<
			typeof informationKind,
			GenericEither
		>
		]?: (
			value: Unwrap<
				Extract<
					GenericEither,
					Kind<
						typeof informationKind.definition,
						Prop
					>
				>
			>
		) => unknown
	},
	any
>;

/**
 * {@include either/matchInformationOtherwise/index.md}
 */
export function matchInformationOtherwise<
	GenericInput extends unknown,
	GenericMatcher extends ComputeMatcher<
		Extract<GenericInput, Either>
	>,
	GenericOutput extends unknown,
>(
	matcher: (
		& ComputeMatcher<
			Extract<NoInfer<GenericInput>, Either>
		>
		& GenericMatcher
	),
	otherwise: (
		value: Exclude<
			GenericInput,
			Kind<
				typeof informationKind.definition,
				Extract<
					GetPropsWithValueExtends<
						GenericMatcher,
						AnyFunction
					>,
					string
				>
			>
		>
	) => GenericOutput
): (input: GenericInput) => (
	| ReturnType<
		NoInfer<
			Extract<
				GenericMatcher[keyof GenericMatcher],
				AnyFunction
			>
		>
	>
	| GenericOutput
);

export function matchInformationOtherwise<
	GenericInput extends unknown,
	GenericMatcher extends ComputeMatcher<
		Extract<GenericInput, Either>
	>,
	GenericOutput extends unknown,
>(
	input: GenericInput,
	matcher: FixDeepFunctionInfer<
		ComputeMatcher<
			Extract<GenericInput, Either>
		>,
		GenericMatcher
	>,
	otherwise: (
		value: Exclude<
			GenericInput,
			Kind<
				typeof informationKind.definition,
				Extract<
					GetPropsWithValueExtends<
						GenericMatcher,
						AnyFunction
					>,
					string
				>
			>
		>
	) => GenericOutput
): (
	| ReturnType<
		NoInfer<
			Extract<
				GenericMatcher[keyof GenericMatcher],
				AnyFunction
			>
		>
	>
	| GenericOutput
);

export function matchInformationOtherwise(
	...args: [unknown, object, AnyFunction]
		| [object, AnyFunction]
): any {
	if (args.length === 2) {
		const [matcher, otherwise] = args;
		return (input: unknown) => matchInformationOtherwise(input, matcher, otherwise);
	}

	const [input, matcher, otherwise] = args;

	if (!informationKind.has(input)) {
		return otherwise(input);
	}

	const callback = matcher[informationKind.getValue(input)] as AnyFunction | undefined;

	if (callback === undefined) {
		return otherwise(input);
	}

	return callback(unwrap(input));
}
