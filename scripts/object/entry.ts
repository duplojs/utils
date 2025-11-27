import { type ObjectKey } from "@scripts/common";

export function entry<
	GenericKey extends ObjectKey,
	GenericValue extends unknown,
>(key: GenericKey, value: GenericValue) {
	return [key, value] as const;
}
