import { type AnyFunction, unwrap, type FixDeepFunctionInfer, type GetKindValue, type Kind, type Unwrap } from "@scripts/common";
import { informationKind } from "./kind";
import { type Right } from "./right";
import { type Left } from "./left";

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
		]: (
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
 * {@include either/matchInformation/index.md}
 */
export function matchInformation<
	GenericInput extends unknown,
	GenericMatcher extends ComputeMatcher<
		Extract<GenericInput, Either>
	>,
>(
	matcher: (
		& ComputeMatcher<
			Extract<NoInfer<GenericInput>, Either>
		>
		& GenericMatcher
	)
): (input: GenericInput) => (
	| ReturnType<NoInfer<GenericMatcher[keyof GenericMatcher]>>
	| Exclude<GenericInput, Either>
);

export function matchInformation<
	GenericInput extends unknown,
	GenericMatcher extends ComputeMatcher<
		Extract<GenericInput, Either>
	>,
>(
	input: GenericInput,
	matcher: FixDeepFunctionInfer<
		ComputeMatcher<
			Extract<GenericInput, Either>
		>,
		GenericMatcher
	>
): (
	| ReturnType<GenericMatcher[keyof GenericMatcher]>
	| Exclude<GenericInput, Either>
);

export function matchInformation(
	...args: [unknown, object]
		| [object]
): any {
	if (args.length === 1) {
		const [matcher] = args;
		return (input: unknown) => matchInformation(input, matcher);
	}

	const [input, matcher] = args;

	if (!informationKind.has(input)) {
		return input;
	}

	return (matcher[informationKind.getValue(input)] as AnyFunction)(unwrap(input));
}
