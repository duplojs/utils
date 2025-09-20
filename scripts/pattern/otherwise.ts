import { unwrap, type Unwrap } from "@scripts/common";
import { isResult, type PatternResult } from "./result";

export function otherwise<
	GenericResult extends unknown,
>(
	result: GenericResult,
): GenericResult extends PatternResult
		? Unwrap<GenericResult>
		: GenericResult {
	return isResult(result)
		? unwrap(result) as never
		: result as never;
}
