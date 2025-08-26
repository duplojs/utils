import { type WrappedNumber, createWrappedNumber } from "./create";

export function add(value1: WrappedNumber, value2: WrappedNumber) {
	return createWrappedNumber(value1.value + value2.value);
}
