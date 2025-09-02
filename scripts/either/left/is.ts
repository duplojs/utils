import { type EitherLeft } from "./create";
import { hasKind } from "@scripts/common/kind";
import { isWrappedValue } from "@scripts/common/wrapValue";

export function isLeft<
	GenericInput extends unknown,
>(
	input: GenericInput,
): input is Extract<GenericInput, EitherLeft> {
	return hasKind(input, "either-left")
		&& hasKind(input, "either-information")
		&& isWrappedValue(input);
}
