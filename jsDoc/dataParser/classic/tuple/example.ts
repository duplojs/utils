import { DP, E, unwrap } from "@scripts";

const parser = DP.tuple([DP.string(), DP.number()]);
const result = parser.parse(["id", 42]);
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: [string, number]
}

const withRest = DP.tuple([DP.string()], { rest: DP.number() });
const restResult = withRest.parse(["a", 1, 2, 3]);
