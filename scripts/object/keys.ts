import { isRuntimeKind, isRuntimeWrappedValueKey } from "@scripts/common";

/**
 * {@include object/keys/index.md}
 */
export function keys<
	GenericObject extends object,
>(object: GenericObject) {
	const result = [];

	for (const key in object) {
		if (!isRuntimeWrappedValueKey(key) && !isRuntimeKind(key)) {
			result.push(key);
		}
	}

	return result as (`${Exclude<keyof GenericObject, symbol>}`)[];
}
