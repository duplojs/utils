import { createKind, type Kind } from "@scripts/common";
import { type WrappedValue } from "@scripts/common/wrapValue";

export interface WrappedString<
	GenericString extends string = string,
> extends Kind<"typed-wrapper", "string">,
	WrappedValue<GenericString> {

}

export function createWrappedString<
	GenericValue extends string,
>(
	value: GenericValue,
): WrappedString<GenericValue> {
	return {
		...createKind("typed-wrapper", "string" as const),
		value,
	};
}
