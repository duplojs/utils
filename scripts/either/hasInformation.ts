import { type AnyValue, hasKind, type Kind } from "@scripts/common";
import { type EitherLeft } from "./left";
import { type EitherRight } from "./right";

type Either = EitherRight | EitherLeft;

export function eitherHasInformation<
	GenericInput extends AnyValue,
	GenericInformation extends(
		GenericInput extends Either
			? GenericInput["kind-either-information"]
			: never
	),
>(
	input: GenericInput,
	information: GenericInformation,
): input is GenericInput & Kind<"either-information", GenericInformation> {
	return hasKind(input, "either-information")
		&& input["kind-either-information"] === information;
}
