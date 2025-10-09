import { eitherInformationKind } from "../base";
import { eitherRightKind, type EitherRight } from "./create";
import { isWrappedValue } from "@scripts/common/wrapValue";

export function isRight<
	GenericInput extends unknown,
>(
	input: GenericInput,
): input is Extract<GenericInput, EitherRight> {
	return eitherRightKind.has(input)
		&& eitherInformationKind.has(input)
		&& isWrappedValue(input);
}
