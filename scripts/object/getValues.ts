import { type AnyValue } from "@scripts/common/types/AnyValue";

export function getValues<
	GenericValue extends AnyValue,
>(
	object: Record<string, GenericValue> | ArrayLike<GenericValue>,
): GenericValue[] {
	return Object.values(object);
}
