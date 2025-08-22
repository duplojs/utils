import { type TheValue } from "./theValue";
import { type AnyValue } from "./types/anyValue";

export function unwrap<
	GenericValue extends AnyValue,
	GenericAnyValue extends AnyValue | TheValue<GenericValue>,
>(
	anyValue: GenericAnyValue,
): GenericAnyValue extends TheValue
		? GenericAnyValue["value"]
		: GenericAnyValue {
	return anyValue && typeof anyValue === "object" && "value" in anyValue
		? anyValue.value as never
		: anyValue as never;
}
