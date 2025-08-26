import { createKind, type Kind } from "@scripts/common";
import { type WrappedValue } from "@scripts/common/wrapValue";

export interface WrappedBigint<
	GenericBigint extends bigint = bigint,
> extends Kind<"typed-wrapper", "bigint">,
	WrappedValue<GenericBigint> {

}

export function createWrappedNumber<
	GenericValue extends bigint,
>(
	value: GenericValue,
): WrappedBigint<GenericValue> {
	return {
		...createKind("typed-wrapper", "bigint" as const),
		value,
	};
}
