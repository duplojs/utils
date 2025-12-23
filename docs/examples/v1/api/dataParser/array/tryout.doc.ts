import { unwrap, type ExpectType, E, DP } from "@duplojs/utils";

const schema = DP.array(DP.number());

const result = schema.parse([1, 2, 3]);

if (E.isRight(result)) {
	const value = unwrap(result);
	type check = ExpectType<
		typeof value,
		number[],
		"strict"
	>;
} else {
	const error = unwrap(result);
	type check = ExpectType<
		typeof error,
		DP.DataParserError,
		"strict"
	>;
}
