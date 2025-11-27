import { unwrap, type ExpectType, E, DP } from "@duplojs/utils";

const schema = DP.literal(["draft", "published", "archived"]);

const result = schema.parse("published");

if (E.isRight(result)) {
	const value = unwrap(result);
	type check = ExpectType<
		typeof value,
		"draft" | "published" | "archived",
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
