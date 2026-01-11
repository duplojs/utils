import { DP, E, unwrap } from "@scripts";

const parser = DP.union([DP.string(), DP.number()]);
const result = parser.parse("hello");
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: string | number
}

const literals = DP.union([DP.literal("on"), DP.literal("off")]);
const literalResult = literals.parse("off");

const withCheckers = DP.union(
	[DP.string(), DP.coerce.number()],
	{ checkers: [DP.checkerRefine((value) => value !== "forbidden")] },
);
