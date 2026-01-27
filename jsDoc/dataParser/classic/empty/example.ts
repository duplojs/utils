import { DP, E } from "@scripts";

const parser = DP.empty();
const result = parser.parse(undefined);
if (E.isRight(result)) {
	// E.Success<undefined>
}

const withCheckers = DP.empty({
	checkers: [DP.checkerRefine((value) => value === undefined)],
});

const coerceParser = DP.coerce.empty();
const coerceResult = coerceParser.parse("undefined");
