import { wrapValue, isWrappedValue, type WrappedValue } from "@scripts";

const maybe = true ? wrapValue(123) : null;

if (isWrappedValue(maybe)) {
	// type: WrappedValue<123>
}
