import { unwrap, type Unwrap } from "@scripts/common/unwrap";
import { type Right } from "./create";
import { isRight } from "./is";

/**
 * {@include either/unwrapRight/index.md}
 */
export function unwrapRight<
	GenericInput extends unknown,
>(
	input: GenericInput,
): GenericInput extends Right
		? Unwrap<GenericInput>
		: GenericInput {
	if (isRight(input)) {
		return unwrap(input) as never;
	}

	return input as never;
}
