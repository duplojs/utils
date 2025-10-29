import { isRuntimeKind, isRuntimeWrappedValueKey } from "@scripts/common";

export function keys<
	GenericObject extends object,
>(object: GenericObject) {
	return Object.keys(object)
		.filter(
			(key) => !isRuntimeWrappedValueKey(key) && !isRuntimeKind(key),
		) as (Exclude<keyof GenericObject, symbol>)[];
}
