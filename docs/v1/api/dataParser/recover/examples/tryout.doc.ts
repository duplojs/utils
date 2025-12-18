import { unwrap, type ExpectType, E, DP } from "@duplojs/utils";

const schema = DP.recover(DP.coerce.number(), 0);

const result = schema.parse("42");

if (E.isRight(result)) {
	const value = unwrap(result);
	type check = ExpectType<
		typeof value,
		number,
		"strict"
	>;
} else {
	const error = unwrap(result);
}

const fallback = schema.parse("not-a-number");
if (E.isRight(fallback)) {
	const value = unwrap(fallback);
	// value === 0 (recovered)
}
