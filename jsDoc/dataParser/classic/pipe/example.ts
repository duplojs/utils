import { DP, E, unwrap } from "@scripts";

const schema = DP.pipe(
	DP.coerce.number(),
	DP.transform(
		DP.number(),
		(value) => value + 1,
	),
);

const result = schema.parse("1234");

if (E.isRight(result)) {
	const value = unwrap(result);
	// value: number
}
