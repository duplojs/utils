import { type NeverCoalescing, type AnyFunction } from "@scripts/common";
import { type Break, createBreak } from "./theFlow";

/**
 * {@include flow/breakIf/index.md}
 */
export function breakIf<
	GenericValue extends unknown,
	GenericPredicate extends GenericValue,
>(
	value: GenericValue,
	thePredicate: (value: GenericValue) => value is GenericPredicate
): Generator<
	Break<
		NeverCoalescing<Extract<GenericValue, GenericPredicate>, GenericPredicate>
	>,
	Exclude<GenericValue, GenericPredicate>
>;
export function breakIf<
	GenericValue extends unknown,
>(
	value: GenericValue,
	thePredicate: (value: GenericValue) => boolean
): Generator<
	Break<GenericValue>,
	GenericValue
>;
export function *breakIf(value: unknown, thePredicate: AnyFunction): any {
	if (thePredicate(value) === true) {
		yield createBreak(value);
	} else {
		return value;
	}
}
