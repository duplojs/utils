import { type IsEqual } from "@scripts/common";
import { type Adaptor } from "@scripts/common/types/adaptor";
import { type AnyTuple } from "@scripts/common/types/anyTuple";
import { type ShiftTuple } from "./types";

type ComputeResult<
	GenericArray extends readonly string[],
	GenericSeparator extends string,
> = GenericArray extends AnyTuple
	? IsEqual<GenericArray["length"], 1> extends true
		? GenericArray[0]
		: `${GenericArray[0]}${GenericSeparator}${ComputeResult<Adaptor<ShiftTuple<GenericArray>, readonly string[]>, GenericSeparator>}`
	: string;

export function join<
	GenericArray extends readonly string[],
	GenericSeparator extends string,
>(separator: GenericSeparator): (array: GenericArray) => ComputeResult<
	GenericArray,
	GenericSeparator
>;

export function join<
	GenericArray extends readonly string[],
	GenericSeparator extends string,
>(
	array: GenericArray,
	separator: GenericSeparator,
): ComputeResult<
	GenericArray,
	GenericSeparator
>;

export function join(...args: [readonly unknown[], string] | [string]) {
	if (args.length === 1) {
		const [separator] = args;
		return (array: string[]) => join(array, separator);
	}

	const [array, separator] = args;

	return array.join(separator);
}
