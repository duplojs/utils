import { createKind, type Kind } from "@scripts/common";
import { type WrappedValue } from "@scripts/common/wrapValue";

export interface WrappedNumber<
	GenericNumber extends number = number,
> extends Kind<"typed-wrapper", "number">,
	WrappedValue<GenericNumber> {

}

export function createWrappedNumber<
	GenericValue extends number,
>(
	value: GenericValue,
): WrappedNumber<GenericValue> {
	return {
		...createKind("typed-wrapper", "number" as const),
		value,
	};
}
