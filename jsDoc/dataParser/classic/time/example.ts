import { DP, E, unwrap } from "@scripts";

const parser = DP.time();
const result = parser.parse("time0+");
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: TheTime
}

const withCheckers = DP.time({
	checkers: [DP.checkerRefine((value) => value !== "time0+")],
});

const coerceParser = DP.coerce.time();
const coerceResult = coerceParser.parse("10:20:00");
