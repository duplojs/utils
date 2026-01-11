import { type AnyObject } from "@scripts/common/types/anyObject";
import { type AssignObjects } from "./types";

/**
 * {@include object/assign/index.md}
 */
export function assign<
	GenericInput extends object,
	GenericValue extends Partial<Record<keyof GenericInput, unknown>> & AnyObject,
>(
	value: GenericValue,
): (input: GenericInput) => AssignObjects<GenericInput, GenericValue>;

export function assign<
	GenericInput extends object,
	GenericValue extends Partial<Record<keyof GenericInput, unknown>> & AnyObject,
>(
	input: GenericInput,
	value: GenericValue,
): AssignObjects<GenericInput, GenericValue>;

export function assign(...args: [object, object] | [object]) {
	if (args.length === 1) {
		const [value] = args;

		return (input: object) => assign(input, value);
	}

	const [input, value] = args;

	return {
		...input,
		...value,
	} as never;
}
