import { type AnyValue } from "./types";

export function justReturn<
	GenericInput extends unknown,
	GenericValue extends AnyValue,
>(
	value: GenericValue
): (input: GenericInput) => GenericValue;

export function justReturn<
	GenericInput extends unknown,
	GenericValue extends AnyValue,
>(
	input: GenericInput,
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
