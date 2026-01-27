import { DP, E, unwrap } from "@scripts";

const parser = DP.recover(DP.number(), 0);
const result = parser.parse("not-a-number");
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: number
}

const withString = DP.recover(DP.string(), "fallback");
const stringResult = withString.parse(123);

const withCheckers = DP.recover(DP.string(), "fallback")
	.addChecker(DP.checkerRefine((value) => value.length > 0));
