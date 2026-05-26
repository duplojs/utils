import { type MaybeArray, type Kind } from "@scripts/common";
import { type Left } from "./left";
import { type Right } from "./right";
import { informationKind } from "./kind";
import * as DArray from "@scripts/array";

type Either = Right | Left;

/**
 * {@include either/hasInformation/index.md}
 */
export function hasInformation<
	const GenericInput extends unknown,
	GenericInformation extends(
		GenericInput extends Either
			? ReturnType<typeof informationKind.getValue<GenericInput>>
			: never
	),
>(
	information: GenericInformation | GenericInformation[],
): (input: GenericInput) => input is Extract<
	GenericInput,
	Kind<typeof informationKind.definition, GenericInformation>
>;

export function hasInformation<
	const GenericInput extends unknown,
	GenericInformation extends(
		GenericInput extends Either
			? ReturnType<typeof informationKind.getValue<GenericInput>>
			: never
	),
>(
	input: GenericInput,
	information: GenericInformation | GenericInformation[],
): input is Extract<
	GenericInput,
	Kind<typeof informationKind.definition, GenericInformation>
>;

export function hasInformation(
	...args: [unknown, MaybeArray<string>] | [MaybeArray<string>]
): any {
	if (args.length === 1) {
		const [information] = args;

		return (input: unknown) => hasInformation(input, information as never);
	}

	const [input, information] = args;
	const formattedInformation = DArray.coalescing(information);

	return informationKind.has(input)
		&& formattedInformation.includes(informationKind.getValue(input));
}
