import { type FalsyValue, type IsEqual } from "@scripts/common";
import { boolFalsy, type BoolFalsy } from "./falsy";
import { boolTruthy, type BoolTruthy } from "./truthy";

/**
 * {@include either/bool/index.md}
 */
export function bool<
	const GenericValue extends unknown = undefined,
>(value: GenericValue): GenericValue extends FalsyValue
	? BoolFalsy<GenericValue>
	: IsEqual<GenericValue, number> extends true
		? BoolTruthy<GenericValue> | BoolFalsy<0>
		: IsEqual<GenericValue, bigint> extends true
			? BoolTruthy<GenericValue> | BoolFalsy<0n>
			: IsEqual<GenericValue, string> extends true
				? BoolTruthy<GenericValue> | BoolFalsy<"">
				: BoolTruthy<GenericValue>;

export function bool(value: unknown) {
	return value === undefined
		|| value === null
		|| value === 0
		|| value === 0n
		|| value === ""
		|| value === false
		? boolFalsy(value)
		: boolTruthy(value);
}

export type Bool<
	GenericValue extends unknown,
> = BoolTruthy<GenericValue> | BoolFalsy;
