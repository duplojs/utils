import { type WrappedValue } from "@scripts/common";
import { type WrappedNumber } from "../number/create";
import { type WrappedString } from "../string/create";
import { type WrappedBigint } from "../bigint/create";
import { type WrappedBoolean } from "../boolean/create";
import { type WrappedObject } from "../object/create";

export function equals<
	GenericValue2 extends WrappedNumber,
>(value1: WrappedNumber, value2: GenericValue2): value1 is GenericValue2;
export function equals<
	GenericValue2 extends WrappedString,
>(value1: WrappedString, value2: GenericValue2): value1 is GenericValue2;
export function equals<
	GenericValue2 extends WrappedBigint,
>(value1: WrappedBigint, value2: GenericValue2): value1 is GenericValue2;
export function equals<
	GenericValue2 extends WrappedBoolean,
>(value1: WrappedBoolean, value2: GenericValue2): value1 is GenericValue2;
export function equals<
	GenericValue2 extends WrappedObject,
>(value1: WrappedObject, value2: GenericValue2): value1 is GenericValue2;
export function equals(value1: WrappedValue, value2: WrappedValue): boolean {
	return value1.value === value2.value;
}
