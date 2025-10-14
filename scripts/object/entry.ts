import { type AnyValue, type ObjectKey } from "@scripts/common";

export function entry<
	GenericKey extends ObjectKey,
	GenericValue extends AnyValue,
>(key: GenericKey, value: GenericValue) {
	return [key, value] as const;
}
