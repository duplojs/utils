import { type AnyFunction, type BreakGenericLink, type Kind, type Unwrap, type WrappedValue, unwrap } from "@scripts/common";
import { isLeft, type Left } from "./left";
import { isRight, type Right } from "./right";
import { informationKind } from "./kind";

type Either = Right | Left;

/**
 * {@include either/whenHasInformationOtherwise/index.md}
 */
export function whenHasInformationOtherwise<
	const GenericInput extends unknown,
	GenericInformation extends(
		GenericInput extends Either
			? ReturnType<typeof informationKind.getValue<GenericInput>>
			: never
	),
	const GenericOutput extends unknown,
	const GenericOtherwiseOutput extends unknown,
>(
	information: GenericInformation | GenericInformation[],
	theFunction: (
		value: Unwrap<
			Extract<
				BreakGenericLink<GenericInput>,
				& Kind<typeof informationKind.definition, GenericInformation>
				& WrappedValue
			>
		>
	) => GenericOutput,
	otherwiseFunction: (
		value: Exclude<
			BreakGenericLink<GenericInput>,
			Kind<typeof informationKind.definition, GenericInformation>
		>
	) => GenericOtherwiseOutput,
): (input: GenericInput) => GenericOutput | GenericOtherwiseOutput;
export function whenHasInformationOtherwise<
	const GenericInput extends unknown,
	GenericInformation extends(
		GenericInput extends Either
			? ReturnType<typeof informationKind.getValue<GenericInput>>
			: never
	),
	const GenericOutput extends unknown,
	const GenericOtherwiseOutput extends unknown,
>(
	input: GenericInput,
	information: GenericInformation | GenericInformation[],
	theFunction: (
		value: Unwrap<
			Extract<
				BreakGenericLink<GenericInput>,
				& Kind<typeof informationKind.definition, GenericInformation>
				& WrappedValue
			>
		>
	) => GenericOutput,
	otherwiseFunction: (
		value: Exclude<
			BreakGenericLink<GenericInput>,
			Kind<typeof informationKind.definition, GenericInformation>
		>
	) => GenericOtherwiseOutput,
): GenericOutput | GenericOtherwiseOutput;
export function whenHasInformationOtherwise(
	...args: [unknown, string | string[], AnyFunction, AnyFunction]
		| [string | string[], AnyFunction, AnyFunction]
): any {
	if (args.length === 3) {
		const [information, theFunction, otherwiseFunction] = args;

		return (input: unknown) => whenHasInformationOtherwise(
			input,
			information as never,
			theFunction,
			otherwiseFunction,
		);
	}

	const [input, information, theFunction, otherwiseFunction] = args;
	const formattedInformation = information instanceof Array
		? information
		: [information];

	if (
		informationKind.has(input)
		&& formattedInformation.includes(informationKind.getValue(input))
	) {
		return theFunction(unwrap(input));
	}

	return otherwiseFunction(input);
}
