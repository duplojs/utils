import { theValue, type TheValue } from "@scripts/common/theValue";
import { type EmbeddedBigint } from "./types/bigint";
import { type EmbeddedNumber } from "./types/number";

export function add(value1: EmbeddedNumber, value2: EmbeddedNumber): EmbeddedNumber;
export function add(value1: EmbeddedBigint, value2: EmbeddedBigint): EmbeddedBigint;
export function add(value1: TheValue<any>, value2: TheValue<any>) {
	return theValue(value1.value + value2.value);
}
