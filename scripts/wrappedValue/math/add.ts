import { theValue, type TheValue } from "@scripts/common/theValue";
import { type WrappedBigint } from "../types/bigint";
import { type WrappedNumber } from "../types/number";

export function add(value1: WrappedNumber, value2: WrappedNumber): WrappedNumber;
export function add(value1: WrappedBigint, value2: WrappedBigint): WrappedBigint;
export function add(value1: TheValue<any>, value2: TheValue<any>) {
	return theValue(value1.value + value2.value);
}
