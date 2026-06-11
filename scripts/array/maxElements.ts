import { type IsEqual } from "@scripts/common";
import { type MaxElements } from "./types";

/**
 * {@include array/maxElements/index.md}
 */
export function maxElements<
	GenericArray extends readonly unknown[],
	GenericLength extends number,
>(maxLength: GenericLength): (array: GenericArray) => array is GenericArray & (
	IsEqual<GenericLength, number> extends true
		? unknown
		: MaxElements<GenericLength>
);

export function maxElements<
	GenericArray extends readonly unknown[],
	GenericLength extends number,
>(array: GenericArray, maxLength: GenericLength): array is GenericArray & (
	IsEqual<GenericLength, number> extends true
		? unknown
		: MaxElements<GenericLength>
);

export function maxElements(...args: [readonly unknown[], number] | [number]): any {
	if (args.length === 1) {
		const [maxLength] = args;
		return (array: unknown[]) => maxElements(array, maxLength);
	}
	const [array, maxLength] = args;

	return array.length <= maxLength;
}
