import { hasKind } from "@scripts/common/kind";
import { type EitherRight } from "./create";
import { isWrappedValue } from "@scripts/common/wrapValue";

export function isRight<
	GenericInput extends unknown,
>(
	input: GenericInput,
): input is Extract<GenericInput, EitherRight> {
	return hasKind(input, "either-right")
		&& hasKind(input, "either-information")
		&& isWrappedValue(input);
}
