import { type CreateTupleFromLength } from "@scripts/common/types/createTupleFromLength";

export function minElements<
	GenericValue extends unknown,
	GenericLength extends number,
>(
	minLength: GenericLength,
): (array: GenericValue[]) => array is CreateTupleFromLength<GenericValue, GenericLength>;
export function minElements<
	GenericValue extends unknown,
	GenericLength extends number,
>(
	array: GenericValue[],
	minLength: GenericLength,
): array is CreateTupleFromLength<GenericValue, GenericLength>;
export function minElements(...args: [unknown[], number] | [number]): any {
	if (args.length === 1) {
		const [minLength] = args;
		return (array: unknown[]) => minElements(array, minLength);
	}
	const [array, minLength] = args;

	return array.length >= minLength;
}
