import { type AnyValue } from "./types";

export function justReturn<
	GenericValue extends AnyValue,
>(
	value: GenericValue
): (input: unknown) => GenericValue;

export function justReturn<
	GenericValue extends AnyValue,
>(
	input: unknown,
	value: GenericValue
): GenericValue;

export function justReturn(
	...args: [unknown, AnyValue] | [AnyValue]
) {
	if (args.length === 1) {
		const [value] = args;

		return () => justReturn(undefined, value);
	}

	const [, value] = args;

	return value;
}
