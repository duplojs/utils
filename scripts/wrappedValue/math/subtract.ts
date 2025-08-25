import { theValue, type TheValue } from "@scripts/common/theValue";
import { type WrappedBigint } from "../types/bigint";
import { type WrappedNumber } from "../types/number";

export function subtract(value1: WrappedNumber, value2: WrappedNumber): WrappedNumber;
export function subtract(value1: WrappedBigint, value2: WrappedBigint): WrappedBigint;
export function subtract(value1: TheValue<any>, value2: TheValue<any>): any {
	return theValue(value1.value - value2.value);
}
