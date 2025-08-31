import { hasKind } from "@scripts/common/kind";
import { type EitherRight } from "./create";
import { isWrappedValue } from "@scripts/common/wrapValue";

export function isRight(
	input: unknown,
): input is EitherRight {
	return hasKind(input, "either-right")
		&& hasKind(input, "either-information")
		&& isWrappedValue(input);
}
