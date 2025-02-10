import { getTypedEntries } from "./getTypedEntries";

export function simpleClone<
	T extends unknown = unknown,
>(unknownValue: T): T {
	if (!unknownValue) {
		return unknownValue;
	} else if (typeof unknownValue !== "object") {
		return unknownValue;
	} else if (
		unknownValue.constructor?.name === "Object"
		|| unknownValue.constructor === undefined
	) {
		return getTypedEntries(unknownValue).reduce(
			(pv, [key, value]) => {
				pv[key] = simpleClone(value);
				return pv;
			},
			{} as T,
		);
	} else if (unknownValue instanceof Array && unknownValue.constructor.name === "Array") {
		return unknownValue.map(simpleClone) as T;
	} else {
		return unknownValue;
	}
}
