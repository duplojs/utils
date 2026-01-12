import { type ObjectKey } from "@scripts/common/types/objectKey";
import { entries } from "../object/entries";
import { type SimplifyTypeForce } from "@scripts/common/types/simplifyTypeForce";

/**
 * {@include common/clone/index.md}
 */
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
		return <never>entries(unknownValue)
			.reduce<Record<ObjectKey, unknown>>(
				(pv, [key, value]) => {
					pv[key] = clone(value);
					return pv;
				},
				{},
			);
	}
}
