import { createKind, wrapValue, type Kind, type WrappedValue } from "@scripts/common";

const patternResultKind = createKind(
	"pattern-result",
);

export interface PatternResult<
	GenericValue extends unknown = any,
> extends Kind<typeof patternResultKind.definition>,
	WrappedValue<GenericValue> {

}

export function result<
	const GenericValue extends unknown,
>(
	value: GenericValue,
): PatternResult<GenericValue> {
	return patternResultKind.addTo(
		wrapValue(value),
	);
}

export const isResult = patternResultKind.has;
