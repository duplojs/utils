import { type AnyTuple } from "@scripts/common/types/anyTuple";
import { type JoinTuple } from "./types";

export function join<
	GenericArray extends readonly string[],
	GenericSeparator extends string,
>(
	separator: GenericSeparator
): (array: GenericArray) => GenericArray extends AnyTuple
	? JoinTuple<
		GenericArray,
		GenericSeparator
	>
	: string;

export function join<
	GenericArray extends readonly string[],
	GenericSeparator extends string,
>(
	array: GenericArray,
	separator: GenericSeparator,
): GenericArray extends AnyTuple
	? JoinTuple<
		GenericArray,
		GenericSeparator
	>
	: string;

export function join(...args: [readonly unknown[], string] | [string]) {
	if (args.length === 1) {
		const [separator] = args;
		return (array: string[]) => join(array, separator);
	}

	const [array, separator] = args;

	return array.join(separator);
}
