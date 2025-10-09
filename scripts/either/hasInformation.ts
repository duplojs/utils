import { type Kind } from "@scripts/common";
import { type EitherLeft } from "./left";
import { type EitherRight } from "./right";
import { eitherInformationKind } from "./base";

type Either = EitherRight | EitherLeft;

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
> {
	return eitherInformationKind.has(input)
		&& eitherInformationKind.getValue(input) === information;
}
