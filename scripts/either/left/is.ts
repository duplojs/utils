import { type EitherLeft } from "./create";
import { hasKind } from "@scripts/common/kind";
import { isWrappedValue } from "@scripts/common/wrapValue";

export function isEitherLeft(
	either: unknown,
): either is EitherLeft {
	return hasKind(either, "either-left")
		&& hasKind(either, "either-information")
		&& isWrappedValue(either);
}
