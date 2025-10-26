import { type AnyValue } from "@scripts/common";
import { type ArrayCoalescing } from "./types";

export function coalescing<
	GenericValue extends AnyValue,
>(
	value: GenericValue,
): ArrayCoalescing<GenericValue> {
	return value instanceof Array
		? value as never
		: [value] as never;
}
