import { unwrap, type Unwrap } from "@scripts/common";
import { type PatternResult } from "./result";

/**
 * {@include pattern/exhaustive/index.md}
 */
export function exhaustive<
	const GenericValue extends unknown,
	GenericResult extends PatternResult<GenericValue>,
>(
	result: GenericResult,
): Unwrap<GenericResult> {
	return unwrap(result);
}
