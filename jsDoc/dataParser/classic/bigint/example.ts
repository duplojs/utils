import { DP, E, unwrap } from "@scripts";

const parser = DP.bigint();
const result = parser.parse(BigInt(42));
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: bigint
}

const withCheckers = DP.bigint({
	checkers: [DP.checkerBigIntMin(BigInt(1)), DP.checkerBigIntMax(BigInt(10))],
});

const coerceParser = DP.coerce.bigint();
const coerceResult = coerceParser.parse("42");
