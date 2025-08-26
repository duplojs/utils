import { type WrappedNumber } from "./create";

export function equals(value1: WrappedNumber, value2: WrappedNumber) {
	return value1.value === value2.value;
}
