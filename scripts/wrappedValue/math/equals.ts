import { type TheValue } from "@scripts/common/theValue";
import { type WrappedBigint } from "../types/bigint";
import { type WrappedNumber } from "../types/number";

export function equals(value1: WrappedNumber, value2: WrappedNumber): boolean;
export function equals(value1: WrappedBigint, value2: WrappedBigint): boolean;
export function equals(value1: TheValue<any>, value2: TheValue<any>): any {
	return value1.value === value2.value;
}
