import { DP, E, unwrap } from "@scripts";

const parser = DP.coercer(DP.number());
const result = parser.parse("42");
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: number
}

const withCheckers = DP.coercer(
	DP.string(),
).addChecker(DP.checkerStringMin(3));

const checkedResult = withCheckers.parse(42);

const complex = DP.object({
	name: DP.coercer(DP.string()),
	age: DP.coercer(DP.number()),
});
const complexResult = complex.parse({
	name: 123,
	age: "42",
});
