import { type Kind, type WrappedValue, type AnyFunction, type AnyValue, type Unwrap, unwrap, type BreakGenericLink } from "@scripts/common";
import { isRight, type EitherRight } from "./right";
import { isLeft, type EitherLeft } from "./left";
import { eitherInformationKind } from "./kind";

type Either = EitherRight | EitherLeft;

export function whenHasInformation<
	const GenericInput extends unknown,
	GenericInformation extends(
		GenericInput extends Either
			? ReturnType<typeof eitherInformationKind.getValue<GenericInput>>
			: never
	),
	const GenericOutput extends AnyValue,
>(
	information: GenericInformation | GenericInformation[],
	theFunction: (
		value: Unwrap<
			Extract<
				GenericInput,
				& Kind<typeof eitherInformationKind.definition, GenericInformation>
				& WrappedValue
			>
		>
	) => GenericOutput,
): (input: GenericInput) =>
	| GenericOutput
	| Exclude<
		BreakGenericLink<GenericInput>,
		Kind<typeof eitherInformationKind.definition, GenericInformation>
	>;
export function whenHasInformation<
	const GenericInput extends unknown,
	GenericInformation extends(
		GenericInput extends Either
			? ReturnType<typeof eitherInformationKind.getValue<GenericInput>>
			: never
	),
	const GenericOutput extends AnyValue,
>(
	input: GenericInput,
	information: GenericInformation | GenericInformation[],
	theFunction: (
		value: Unwrap<
			Extract<
				GenericInput,
				& Kind<typeof eitherInformationKind.definition, GenericInformation>
				& WrappedValue
			>
		>
	) => GenericOutput,
):
	| GenericOutput
	| Exclude<GenericInput, Kind<typeof eitherInformationKind.definition, GenericInformation>>;
export function whenHasInformation(
	...args: [unknown, string | string[], AnyFunction] | [string | string[], AnyFunction]
): any {
	if (args.length === 2) {
		const [information, theFunction] = args;

		return (input: unknown) => whenHasInformation(
			input,
			information as never,
			theFunction,
		);
	}

	const [input, information, theFunction] = args;

	const formattedInformation = information instanceof Array
		? information
		: [information];

	if (
		(
			isLeft(input)
			|| isRight(input)
		) && formattedInformation.includes(
			eitherInformationKind.getValue(input),
		)
	) {
		return theFunction(unwrap(input));
	}

	return input;
}
