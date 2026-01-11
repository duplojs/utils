import { type Kind } from "@scripts/common";
import { type EitherLeft } from "./left";
import { type EitherRight } from "./right";
import { eitherInformationKind } from "./kind";

type Either = EitherRight | EitherLeft;

/**
 * {@include either/hasInformation/index.md}
 */
export function hasInformation<
	const GenericInput extends unknown,
	GenericInformation extends(
		GenericInput extends Either
			? ReturnType<typeof eitherInformationKind.getValue<GenericInput>>
			: never
	),
>(
	information: GenericInformation,
): (input: GenericInput) => input is Extract<
	GenericInput,
	Kind<typeof eitherInformationKind.definition, GenericInformation>
>;

export function hasInformation<
	const GenericInput extends unknown,
	GenericInformation extends(
		GenericInput extends Either
			? ReturnType<typeof eitherInformationKind.getValue<GenericInput>>
			: never
	),
>(
	input: GenericInput,
	information: GenericInformation,
): input is Extract<
	GenericInput,
	Kind<typeof eitherInformationKind.definition, GenericInformation>
>;

export function hasInformation(
	...args: [unknown, string] | [string]
): any {
	if (args.length === 1) {
		const [information] = args;

		return (input: unknown) => hasInformation(input, information as never);
	}

	const [input, information] = args;

	return eitherInformationKind.has(input)
		&& eitherInformationKind.getValue(input) === information;
}
