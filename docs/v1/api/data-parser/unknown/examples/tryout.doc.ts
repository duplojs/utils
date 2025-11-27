import { unwrap, type ExpectType, E, DP } from "@duplojs/utils";

const schema = DP.unknown();

const result = schema.parse({ any: "value" });

if (E.isRight(result)) {
	const value = unwrap(result);
	type check = ExpectType<
		typeof value,
		unknown,
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
