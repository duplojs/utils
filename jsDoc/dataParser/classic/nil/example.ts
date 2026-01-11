import { DP, E, unwrap } from "@scripts";

const parser = DP.nil();
const result = parser.parse(null);
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: null
}

const withCheckers = DP.nil({
	checkers: [DP.checkerRefine((value) => value === null)],
});

const coerceParser = DP.coerce.nil();
const coerceResult = coerceParser.parse("null");
