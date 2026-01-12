import { DPE, DP, E, unwrap } from "@scripts";

const parser = DPE.string().array();
const result = parser.parse(["a", "b"]);
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: string[]
}

const withCheckers = DPE.number().array({
	checkers: [DP.checkerArrayMin(1)],
});

const nested = DPE.string().array().array();
const nestedResult = nested.parse([["a"], ["b"]]);
