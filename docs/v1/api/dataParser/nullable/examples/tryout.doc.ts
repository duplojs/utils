import { unwrap, type ExpectType, E, DP } from "@duplojs/utils";

const schema = DP.nullable(DP.string());

const result = schema.parse(null);

if (E.isRight(result)) {
	const value = unwrap(result);
	type check = ExpectType<
		typeof value,
		string | null,
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
