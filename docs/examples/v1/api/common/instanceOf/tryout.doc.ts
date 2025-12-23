import { type ExpectType, instanceOf } from "@duplojs/utils";

const input = new Error() as Error | Date;

if (instanceOf(input, Error)) {
	type check = ExpectType<
		typeof input,
		Error,
		"strict"
	>;
} else {
	type check = ExpectType<
		typeof input,
		Date,
		"strict"
	>;
}
