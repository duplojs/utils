import { getTypedEntries } from "./getTypedEntries";
import { type SimplifyTypeForce } from "./simplifyType";
import { type ObjectKey } from "./types";

export function clone<
	T extends unknown = unknown,
>(unknownValue: T): SimplifyTypeForce<T> {
	if (!unknownValue) {
		return <never>unknownValue;
	} else if (typeof unknownValue !== "object") {
		return <never>unknownValue;
	} else if (unknownValue instanceof Array) {
		return <never>unknownValue.map(clone);
	} else {
		return <never>getTypedEntries(unknownValue).reduce(
			(pv, [key, value]) => {
				pv[key] = clone(value);
				return pv;
			},
			{} as Record<ObjectKey, unknown>,
		);
	}
}
