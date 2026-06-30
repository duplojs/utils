import { type AnyTuple } from "@scripts/common/types/anyTuple";
import { type RemoveKind, type JoinTuple, type TupleHasSpread } from "./types";

/**
 * {@include array/join/index.md}
 */
export function join<
	GenericArray extends readonly string[],
	GenericSeparator extends string,
>(
	separator: GenericSeparator
): (array: GenericArray) => GenericArray extends AnyTuple
	? TupleHasSpread<RemoveKind<GenericArray>> extends true
		? string
		: JoinTuple<
			RemoveKind<GenericArray>,
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
	? TupleHasSpread<RemoveKind<GenericArray>> extends true
		? string
		: JoinTuple<
			RemoveKind<GenericArray>,
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
