import { unwrap, type ExpectType, E, DP } from "@duplojs/utils";

const schema = DP.record(DP.string(), DP.number());

const result = schema.parse({
	apples: 3,
	oranges: 2,
});

if (E.isRight(result)) {
	const value = unwrap(result);
	type check = ExpectType<
		typeof value,
		Record<string, number>,
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

const schemaWithChecker = schema.addChecker(
	DP.checkerRefine((value) => Object.keys(value).length > 0),
);
