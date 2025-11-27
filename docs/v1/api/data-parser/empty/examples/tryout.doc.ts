import { unwrap, type ExpectType, E, DP } from "@duplojs/utils";

const schema = DP.empty();

const result = schema.parse(undefined);

if (E.isRight(result)) {
	const value = unwrap(result);
	type check = ExpectType<
		typeof value,
		undefined,
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
