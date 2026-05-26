import { unwrap, type Unwrap } from "@scripts/common/unwrap";
import { type Left } from "./create";
import { isLeft } from "./is";

/**
 * {@include either/unwrapLeft/index.md}
 */
export function unwrapLeft<
	GenericInput extends unknown,
>(
	input: GenericInput,
): GenericInput extends Left
		? Unwrap<GenericInput>
		: GenericInput {
	if (isLeft(input)) {
		return unwrap(input) as never;
	}

	return input as never;
}
