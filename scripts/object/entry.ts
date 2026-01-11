import { type ObjectKey } from "@scripts/common";

/**
 * {@include object/entry/index.md}
 */
export function entry<
	GenericKey extends ObjectKey,
	GenericValue extends unknown,
>(key: GenericKey, value: GenericValue) {
	return [key, value] as const;
}
