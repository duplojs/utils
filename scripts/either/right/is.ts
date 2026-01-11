import { eitherInformationKind } from "../kind";
import { eitherRightKind, type EitherRight } from "./create";
import { isWrappedValue } from "@scripts/common/wrapValue";

/**
 * {@include either/isRight/index.md}
 */
export function isRight<
	GenericInput extends unknown,
>(
	input: GenericInput,
): input is Extract<GenericInput, EitherRight> {
	return eitherRightKind.has(input)
		&& eitherInformationKind.has(input)
		&& isWrappedValue(input);
}
