import { type EitherLeft } from "./create";
import { type EitherRight } from "../right";
import { hasKind } from "@scripts/common/theKind";
import { hasValue } from "@scripts/common/theValue";

type Either = EitherRight | EitherLeft;

export function isEitherLeft<
	GenericEither extends Either,
>(
	either: GenericEither,
): either is Extract<GenericEither, EitherLeft> {
	return hasKind(either, "either-left");
}

export function unknownIsEitherLeft(
	either: unknown,
): either is EitherLeft {
	return hasKind(either, "either-left")
		&& hasKind(either, "either-information")
		&& hasValue(either);
}
