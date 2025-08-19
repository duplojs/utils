import { hasKind } from "@scripts/common/theKind";
import { type EitherLeft } from "../left";
import { type EitherRight } from "./create";
import { hasValue } from "@scripts/common/theValue";

type Either = EitherRight | EitherLeft;

export function isEitherRight<
	GenericEither extends Either,
>(
	either: GenericEither,
): either is Extract<GenericEither, EitherRight> {
	return hasKind(either, "either-right");
}

export function unknownIsEitherRight(
	either: unknown,
): either is EitherRight {
	return hasKind(either, "either-right")
		&& hasKind(either, "either-information")
		&& hasValue(either);
}
