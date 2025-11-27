import { unwrap, type ExpectType, E, DP } from "@duplojs/utils";

const schema = DP.union([
	DP.string(),
	DP.number(),
]);

const result = schema.parse("text");

if (E.isRight(result)) {
	const value = unwrap(result);
	type check = ExpectType<
		typeof value,
		string | number,
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
