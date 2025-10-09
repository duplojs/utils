import { type Last } from "../types";

export function last<
	GenericValue extends string,
>(string: GenericValue): Last<GenericValue> {
	return string.length > 0
		? string[string.length - 1] as Last<GenericValue>
		: undefined as never;
}
