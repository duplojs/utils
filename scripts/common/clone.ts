import { type ObjectKey } from "@scripts/object/types/objectKey";
import { getEntries } from "../object/getEntries";
import { type SimplifyTypeForce } from "@scripts/common/types/simplifyTypeForce";

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
		return <never>getEntries(unknownValue)
			.reduce<Record<ObjectKey, unknown>>(
				(pv, [key, value]) => {
					pv[key] = clone(value);
					return pv;
				},
				{},
			);
	}
}
