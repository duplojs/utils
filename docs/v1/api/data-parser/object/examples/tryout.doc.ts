import { unwrap, type ExpectType, E, DP } from "@duplojs/utils";

const schema = DP.object({
	name: DP.string(),
	age: DP.number(),
});

const result = schema.parse({
	name: "ZeRiix",
	age: 24,
});

if (E.isRight(result)) {
	const value = unwrap(result);
	type check = ExpectType<
		typeof value,
		{
			name: string;
			age: number;
		},
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
