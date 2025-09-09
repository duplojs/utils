import { type First } from "../types";

export function first<
	GenericString extends string,
>(string: GenericString): First<GenericString> {
	return string[0] as First<GenericString>;
}
