import { DP, E, unwrap } from "@scripts";

const parser = DP.string();
const result = parser.parse("DuploJS");
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: string
}

const withCheckers = DP.string({
	checkers: [DP.checkerStringMin(3), DP.checkerStringMax(10)],
});

const coerceParser = DP.coerce.string();
const coerceResult = coerceParser.parse(123);
