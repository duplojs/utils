import { DP, E, unwrap } from "@duplojs/utils";

const schema = DP
	.coerce
	.bigint()
	.addChecker(
		DP.checkerBigIntMin(0n),
		DP.checkerBigIntMax(10_000n),
	);

const result = schema.parse("9999");

if (E.isRight(result)) {
	const value = unwrap(result);
} else {
	const error = unwrap(result);
}
