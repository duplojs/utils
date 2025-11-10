import { isRuntimeKind, isRuntimeWrappedValueKey } from "@scripts/common";
import { type AnyValue } from "@scripts/common/types/anyValue";

export function values<
	GenericValue extends AnyValue,
>(
	object: Record<string, GenericValue>,
): GenericValue[] {
	return Object.entries(object)
		.filter(
			([key]) => !isRuntimeWrappedValueKey(key) && !isRuntimeKind(key),
		)
		.map(([, value]) => value);
}
