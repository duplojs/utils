import { type First } from "../types";

export function first<
	GenericString extends string,
>(input: GenericString): First<GenericString> {
	return input[0] as First<GenericString>;
}
