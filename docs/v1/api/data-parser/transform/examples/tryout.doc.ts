import { unwrap, type ExpectType, E, DP, innerPipe, S } from "@duplojs/utils";

const schema = DP.transform(
	DP.string(),
	innerPipe(
		S.trim,
		S.capitalize,
	),
);

const result = schema.parse("  duplo ");

if (E.isRight(result)) {
	const value = unwrap(result);
	type check = ExpectType<
		typeof value,
		Capitalize<string>,
		"strict"
	>;
} else {
	const error = unwrap(result);
}
