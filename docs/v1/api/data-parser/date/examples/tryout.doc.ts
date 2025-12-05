import { unwrap, type ExpectType, E, DP, type D } from "@duplojs/utils";

const schema = DP.date();

const result = schema.parse("date1764260535361+");

if (E.isRight(result)) {
	const value = unwrap(result);
	type check = ExpectType<
		typeof value,
		D.TheDate,
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
