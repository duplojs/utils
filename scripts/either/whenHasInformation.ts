import { type Kind, type AnyValue, type WrappedValue, type AnyFunction } from "@scripts/common";
import { isEitherRight, type EitherRight } from "./right";
import { isEitherLeft, type EitherLeft } from "./left";

type Either = EitherRight | EitherLeft;

export function whenEitherHasInformation<
	GenericInput extends AnyValue,
	GenericInformation extends(
		GenericInput extends Either
			? GenericInput["kind-either-information"]
			: never
	),
	GenericOutput extends AnyValue,
>(
	information: GenericInformation | GenericInformation[],
	theFunction: (
		value: Extract<
			GenericInput,
			& Kind<"either-information", GenericInformation>
			& WrappedValue
		>["value"]
	) => GenericOutput,
): (input: GenericInput) =>
	| GenericOutput
	| Exclude<GenericInput, Kind<"either-information", GenericInformation>>;
export function whenEitherHasInformation<
	GenericInput extends AnyValue,
	GenericInformation extends(
		GenericInput extends Either
			? GenericInput["kind-either-information"]
			: never
	),
	GenericOutput extends AnyValue,
>(
	input: GenericInput,
	information: GenericInformation | GenericInformation[],
	theFunction: (
		value: Extract<
			GenericInput,
			& Kind<"either-information", GenericInformation>
			& WrappedValue
		>["value"]
	) => GenericOutput,
):
	| GenericOutput
	| Exclude<GenericInput, Kind<"either-information", GenericInformation>>;
export function whenEitherHasInformation(
	...args: [unknown, string | string[], AnyFunction] | [string | string[], AnyFunction]
): any {
	if (args.length === 2) {
		const [information, theFunction] = args;

		return (input: AnyValue) => whenEitherHasInformation(
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
			isEitherLeft(input)
			|| isEitherRight(input)
		) && formattedInformation.includes(input["kind-either-information"])
	) {
		return theFunction(input);
	}

	return input;
}
