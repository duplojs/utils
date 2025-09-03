import { type Kind, type WrappedValue, type AnyFunction, type AnyValue } from "@scripts/common";
import { isRight, type EitherRight } from "./right";
import { isLeft, type EitherLeft } from "./left";

type Either = EitherRight | EitherLeft;

export function whenHasInformation<
	const GenericInput extends unknown,
	GenericInformation extends(
		GenericInput extends Either
			? GenericInput["kind-either-information"]
			: never
	),
	const GenericOutput extends AnyValue,
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
export function whenHasInformation<
	const GenericInput extends unknown,
	GenericInformation extends(
		GenericInput extends Either
			? GenericInput["kind-either-information"]
			: never
	),
	const GenericOutput extends AnyValue,
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
		) && formattedInformation.includes(input["kind-either-information"])
	) {
		return theFunction((input as WrappedValue).value);
	}

	return input;
}
