import { unwrap, type ExpectType, E, DP } from "@duplojs/utils";

const schema = DP.pipe(
	DP.coerce.number(),
	DP.transform(
		DP.number(),
		(value) => value + 1,
	),
);

const result = schema.parse("41");

if (E.isRight(result)) {
	const value = unwrap(result);
	type check = ExpectType<
		typeof value,
		number,
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
