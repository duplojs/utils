import { unwrap, DP, E } from "@duplojs/utils";

const schema = DP.coerce
	.number()
	.addChecker(
		DP.checkerNumberMin(18, { errorMessage: "age.min" }),
		DP.checkerNumberMax(99),
		DP.checkerInt(),
	);

const result = schema.parse("27");

if (E.isRight(result)) {
	const value = unwrap(result);
} else {
	const error = unwrap(result);
}
