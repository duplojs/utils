import { unwrap, type ExpectType, E, DP } from "@duplojs/utils";

const schema = DP.boolean();

const result = schema.parse(true);

if (E.isRight(result)) {
	const value = unwrap(result);
	type check = ExpectType<
		typeof value,
		boolean,
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
