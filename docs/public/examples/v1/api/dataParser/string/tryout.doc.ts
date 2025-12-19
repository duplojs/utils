import { unwrap, type ExpectType, E, DP } from "@duplojs/utils";

const schema = DP.string();

const result = schema.parse("DuploJS utils");

if (E.isRight(result)) {
	const value = unwrap(result);
	type check = ExpectType<
		typeof value,
		string,
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
