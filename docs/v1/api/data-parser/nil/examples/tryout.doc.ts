import { unwrap, type ExpectType, E, DP } from "@duplojs/utils";

const schema = DP.nil();

const result = schema.parse(null);

if (E.isRight(result)) {
	const value = unwrap(result);
	type check = ExpectType<
		typeof value,
		null,
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
