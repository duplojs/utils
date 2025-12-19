import { wrapValue, isWrappedValue, type ExpectType, type WrappedValue } from "@duplojs/utils";

const maybe = true ? wrapValue(123) : null;

if (isWrappedValue(maybe)) {
	type check = ExpectType<
		typeof maybe,
		WrappedValue<123>,
		"strict"
	>;
}
