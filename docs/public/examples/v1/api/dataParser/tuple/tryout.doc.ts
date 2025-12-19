import { unwrap, type ExpectType, E, DP } from "@duplojs/utils";

const schema = DP.tuple([
	DP.string(),
	DP.number(),
]);

const result = schema.parse(["page", 1]);

if (E.isRight(result)) {
	const value = unwrap(result);
	type check = ExpectType<
		typeof value,
		[string, number],
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
