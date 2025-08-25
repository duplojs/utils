import { type WrappedNumber } from "../types/number";
import { type MaybeWrapped } from "../types/maybe";
import { toWrappedValue } from "../to";
import { type Unwrap } from "@scripts/common/unwrap";

export function createWrappedNumber<
	GenericNumber extends WrappedNumber["value"],
>(
	value: MaybeWrapped<GenericNumber>,
): WrappedNumber<Unwrap<GenericNumber>> {
	return toWrappedValue(value) as never;
}
