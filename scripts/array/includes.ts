import { type AnyValue } from "@scripts/common";

export function arrayIncludes<
	GenericValue extends AnyValue,
	GenericArrayValue extends AnyValue,
>(
	array: GenericArrayValue[]
): (value: GenericValue) => value is GenericValue & GenericArrayValue;
export function arrayIncludes<
	GenericValue extends AnyValue,
	GenericArrayValue extends AnyValue,
>(
	value: GenericValue,
	array: GenericArrayValue[]
): value is GenericValue & GenericArrayValue;
export function arrayIncludes(...args: [AnyValue, AnyValue[]] | [AnyValue[]]): any {
	if (args.length === 1) {
		const [array] = args;

		return (value: AnyValue) => arrayIncludes(value, array);
	}

	const [value, array] = args;

	return array.includes(value);
}

