import { type CreateTupleFromLength } from "@scripts/common/types/createTupleFromLength";

export function arrayMinItem<
	GenericValue extends unknown,
	GenericLength extends number,
>(
	array: GenericValue[],
	minLength: GenericLength,
): array is CreateTupleFromLength<GenericValue, GenericLength> {
	return array.length >= minLength;
}
