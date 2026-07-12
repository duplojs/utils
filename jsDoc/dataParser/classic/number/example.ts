import { DP, E, unwrap } from "@scripts";

const parser = DP.number();
const result = parser.parse(42);
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: number
}

const withCheckers = DP.number()
	.addChecker(DP.checkerNumberMin(0), DP.checkerInt());

const coerceParser = DP.coercer(DP.number());
const coerceResult = coerceParser.parse("42");
