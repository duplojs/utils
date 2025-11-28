import { DP, E, S, unwrap } from "@duplojs/utils";

const schema = DP.string().addChecker(
	DP.checkerRefine(
		S.endsWith("JS"),
		{
			errorMessage: "format.invalid",
		},
	),
);

const result = schema.parse("DuploTS");

if (E.isRight(result)) {
	const value = unwrap(result);
} else {
	const error = unwrap(result);
}
