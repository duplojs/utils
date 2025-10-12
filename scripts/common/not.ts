import { type AnyFunction } from "./types";

export function not<
	GenericInput extends unknown,
	GenericPredicatedInput extends GenericInput,
>(
	predicate: (input: GenericInput) => input is GenericPredicatedInput
): (input: GenericInput) => input is Exclude<GenericInput, GenericPredicatedInput>;

export function not<
	GenericInput extends unknown,
	GenericPredicatedInput extends GenericInput,
>(
	input: GenericInput,
	predicate: (input: GenericInput) => input is GenericPredicatedInput
): input is Exclude<GenericInput, GenericPredicatedInput>;

export function not(
	...args: [AnyFunction] | [unknown, AnyFunction]
) {
	if (args.length === 1) {
		const [predicate] = args;

		return (input: unknown) => not(
			input,
			predicate as never,
		);
	}

	const [input, predicate] = args;

	return !predicate(input);
}
