import { unwrap, type ExpectType, E, DP } from "@duplojs/utils";

const schema = DP.bigint();

const result = schema.parse(123n);

if (E.isRight(result)) {
	const value = unwrap(result);
	type check = ExpectType<
		typeof value,
		bigint,
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
