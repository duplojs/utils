import { createKind, hasKind, wrapValue, type Kind, type WrappedValue } from "@scripts/common";

export interface PatternResult<
	GenericValue extends unknown = unknown,
> extends Kind<"pattern-result">,
	WrappedValue<GenericValue> {

}

export function result<
	const GenericValue extends unknown,
>(
	value: GenericValue,
): PatternResult<GenericValue> {
	return {
		...createKind("pattern-result"),
		...wrapValue(value),
	};
}

export function isResult<
	GenericValue extends unknown,
>(
	value: GenericValue,
): value is Extract<GenericValue, PatternResult> {
	return hasKind(value, "pattern-result");
}
