import { type AnyValue } from "@scripts/common/types/anyValue";
import { type EitherLeft } from "../left";
import { type EitherRight } from "./create";
import { isEitherRight } from "./is";

type Either = EitherRight | EitherLeft;

export function whenEitherIsRight<
	GenericEither extends Either,
	GenericOutput extends AnyValue,
>(
	either: GenericEither,
	theFunction: (eitherValue: Extract<GenericEither, EitherRight>["value"]) => GenericOutput,
) {
	if (isEitherRight(either)) {
		return theFunction(either.value);
	}

	return either as Exclude<GenericEither, EitherRight>;
}
