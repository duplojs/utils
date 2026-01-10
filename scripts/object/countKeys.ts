import { isRuntimeKind, isRuntimeWrappedValueKey } from "@scripts/common";

export function countKeys<
	GenericObject extends object,
>(object: GenericObject): number {
	return Object.keys(object)
		.filter(
			(key) => !isRuntimeWrappedValueKey(key) && !isRuntimeKind(key),
		)
		.length;
}
