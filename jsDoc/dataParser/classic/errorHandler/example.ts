import { DP, E, unwrap } from "@scripts";

const parser = DP.errorHandler(
	DP.number({ errorMessage: "invalid number" }),
	DP.createErrorMessageTransformer(
		DP.numberKind,
		() => "Expected a valid age.",
	),
);
const result = parser.parse("twenty");
if (E.isLeft(result)) {
	const error = unwrap(result);
	// error.issues[0]?.message === "Expected a valid age."
}

const untouched = DP.errorHandler(
	DP.number({ errorMessage: "invalid number" }),
	DP.createErrorMessageTransformer(
		DP.stringKind,
		() => "Expected a string.",
	),
);
const untouchedResult = untouched.parse("twenty");

const withMultipleRules = DP.errorHandler(
	DP.string(),
	[
		DP.createErrorMessageTransformer(DP.stringKind, () => "Expected text."),
		DP.createErrorMessageTransformer(DP.numberKind, () => "Expected number."),
	],
);
