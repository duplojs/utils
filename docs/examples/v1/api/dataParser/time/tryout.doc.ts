import { unwrap, type ExpectType, E, DP, DDate } from "@duplojs/utils";

const schema = DP.time();
const value = DDate.createTime(4200);

const result = schema.parse(value);

if (E.isRight(result)) {
	const output = unwrap(result);
	type check = ExpectType<
		typeof output,
		DDate.TheTime,
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
