import { type AnyObject } from "@scripts/common/types/anyObject";
import { type AssignObjects } from "./types";

export function assign<
	GenericInput extends object,
	GenericValue extends Partial<Record<keyof GenericInput, unknown>> & AnyObject,
>(
	input: GenericInput,
	value: GenericValue,
): AssignObjects<GenericInput, GenericValue> {
	return {
		...input,
		...value,
	} as never;
}
