import { DP, E, unwrap, equal } from "@duplojs/utils";

const schema = DP
	.literal(["pro", "free"])
	.addChecker(
		DP.checkerRefine(
			equal("pro"),
			{
				errorMessage: "plan.must-be-pro",
			},
		),
	);

const result = schema.parse("free");

if (E.isRight(result)) {
	const value = unwrap(result);
} else {
	const error = unwrap(result);
}
