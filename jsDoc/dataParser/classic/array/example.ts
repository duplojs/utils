import { DP, E, unwrap } from "@scripts";

const parser = DP.array(DP.string());
const result = parser.parse(["a", "b"]);
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: string[]
}

const withCheckers = DP.array(DP.number(), {
	checkers: [DP.checkerArrayMin(1), DP.checkerArrayMax(3)],
});

const nested = DP.array(DP.array(DP.boolean()));
const nestedResult = nested.parse([[true, false]]);
