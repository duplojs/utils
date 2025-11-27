import { DP, E, unwrap } from "@duplojs/utils";

const schema = DP
	.coerce
	.boolean()
	.addChecker(
		DP.checkerRefine((value) => value === true, {
			errorMessage: "feature.only-enabled",
		}),
	);

const result = schema.parse("true");

if (E.isRight(result)) {
	const value = unwrap(result);
} else {
	const error = unwrap(result);
}
