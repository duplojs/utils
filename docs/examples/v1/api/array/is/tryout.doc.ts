import { A, type ExpectType } from "@duplojs/utils";

const maybe = true ? [1, 2, 3] : null;

if (A.is(maybe)) {
	type check = ExpectType<
		typeof maybe,
		number[],
		"strict"
	>;
}
