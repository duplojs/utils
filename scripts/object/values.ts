import { type AnyValue } from "@scripts/common/types/anyValue";

export function objectValues<
	GenericValue extends AnyValue,
>(
	object: { [key: string]: GenericValue } | ArrayLike<GenericValue>,
): GenericValue[] {
	return Object.values(object);
}
