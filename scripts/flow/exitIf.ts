import { type NeverCoalescing, type AnyFunction } from "@scripts/common";
import { createExit, type Exit } from "./theFlow";

export function exitIf<
	GenericValue extends unknown,
	GenericPredicate extends GenericValue,
>(
	value: GenericValue,
	thePredicate: (value: GenericValue) => value is GenericPredicate
): Generator<
	Exit<
		NeverCoalescing<Extract<GenericValue, GenericPredicate>, GenericPredicate>
	>,
	Exclude<GenericValue, GenericPredicate>
>;
export function exitIf<
	GenericValue extends unknown,
>(
	value: GenericValue,
	thePredicate: (value: GenericValue) => boolean
): Generator<
	Exit<GenericValue>,
	GenericValue
>;
export function *exitIf(value: unknown, thePredicate: AnyFunction): any {
	if (thePredicate(value) === true) {
		yield createExit(value);
	} else {
		return value;
	}
}
