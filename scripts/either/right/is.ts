import { hasKind } from "@scripts/common/kind";
import { type EitherRight } from "./create";
import { isWrappedValue } from "@scripts/common/wrapValue";

export function isEitherRight(
	either: unknown,
): either is EitherRight {
	return hasKind(either, "either-right")
		&& hasKind(either, "either-information")
		&& isWrappedValue(either);
}
