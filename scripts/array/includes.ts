import { type AnyValue } from "@scripts/common";

export function arrayIncludes<
	GenericArrayValue extends AnyValue,
>(
	value: GenericArrayValue,
): (array: GenericArrayValue[]) => boolean;
export function arrayIncludes<
	GenericArrayValue extends AnyValue,
>(
	array: GenericArrayValue[],
	value: GenericArrayValue,
): boolean;
export function arrayIncludes(...args: [AnyValue[], AnyValue] | [AnyValue]) {
	if (args.length === 1) {
		const [value] = args;

		return (array: AnyValue[]) => arrayIncludes(array, value);
	}

	const [array, value] = args;

	return array.includes(value);
}

