import type { NewDate } from "./types";

export function is<
	GenericValue extends unknown,
>(
	value: GenericValue,
): value is GenericValue extends NewDate ? GenericValue : never {
	if (typeof value !== "string") {
		return false;
	}

	const isoRegex = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.(\d{3}))?([Z]|[+-]\d{2}:\d{2})$/;
	if (!isoRegex.test(value)) {
		return false;
	}

	return true;
}
