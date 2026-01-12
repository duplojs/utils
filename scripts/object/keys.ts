import { isRuntimeKind, isRuntimeWrappedValueKey } from "@scripts/common";

/**
 * {@include object/keys/index.md}
 */
export function keys<
	GenericObject extends object,
>(object: GenericObject) {
	return Object.keys(object)
		.filter(
			(key) => !isRuntimeWrappedValueKey(key) && !isRuntimeKind(key),
		) as (Exclude<keyof GenericObject, symbol>)[];
}
