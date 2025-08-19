import { type AnyValue } from "@scripts/common/types/AnyValue";
import { type EitherRight } from "../right";
import { type EitherLeft } from "./create";
import { isEitherLeft } from "./is";

type Either = EitherRight | EitherLeft;

export function whenEitherIsLeft<
	GenericEither extends Either,
	GenericOutput extends AnyValue,
>(
	either: GenericEither,
	theFunction: (eitherValue: Extract<GenericEither, EitherLeft>["value"]) => GenericOutput,
) {
	if (isEitherLeft(either)) {
		return theFunction(either.value);
	}

	return either as Exclude<GenericEither, EitherLeft>;
}
