import { createKind, type Kind } from "@scripts/common";
import { type WrappedValue } from "@scripts/common/wrapValue";

export interface WrappedBoolean<
	GenericBoolean extends boolean = boolean,
> extends Kind<"typed-wrapper", "boolean">,
	WrappedValue<GenericBoolean> {

}

export function createWrappedBoolean<
	GenericValue extends boolean,
>(
	value: GenericValue,
): WrappedBoolean<GenericValue> {
	return {
		...createKind("typed-wrapper", "boolean" as const),
		value,
	};
}
