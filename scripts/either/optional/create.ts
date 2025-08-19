import { type AnyValue } from "@scripts/common/types/AnyValue";
import { createEitherOptionalEmpty, type EitherOptionalEmpty } from "./empty";
import { createEitherOptionalFilled, type EitherOptionalFilled } from "./filled";

export function createEitherOptional<
	GenericValue extends AnyValue = undefined,
>(value: GenericValue): GenericValue extends undefined
	? EitherOptionalEmpty
	: EitherOptionalFilled<GenericValue>;
export function createEitherOptional(value: AnyValue) {
	return value === undefined
		? createEitherOptionalEmpty()
		: createEitherOptionalFilled(value);
}
