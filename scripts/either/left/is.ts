import { eitherLeftKind, type EitherLeft } from "./create";
import { isWrappedValue } from "@scripts/common/wrapValue";
import { eitherInformationKind } from "../kind";

export function isLeft<
	GenericInput extends unknown,
>(
	input: GenericInput,
): input is Extract<GenericInput, EitherLeft> {
	return eitherLeftKind.has(input)
		&& eitherInformationKind.has(input)
		&& isWrappedValue(input);
}
