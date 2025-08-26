import { createKind, type Kind } from "@scripts/common";
import { type WrappedValue } from "@scripts/common/wrapValue";

export interface WrappedObject<
	GenericObject extends object = object,
> extends Kind<"typed-wrapper", "object">,
	WrappedValue<GenericObject> {

}

export function createWrappedObject<
	GenericValue extends object,
>(
	value: GenericValue,
): WrappedObject<GenericValue> {
	return {
		...createKind("typed-wrapper", "object" as const),
		value,
	};
}
