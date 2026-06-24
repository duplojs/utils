import { DPE, DP, E, unwrap } from "@scripts";

const parser = DPE.errorHandler(
	DPE.number({ errorMessage: "invalid number" }),
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

const withObject = DPE.errorHandler(
	DPE.object({
		name: DPE.string(),
	}),
	DP.createErrorMessageTransformer(DP.stringKind, () => "Expected text."),
);
const objectResult = withObject.parse({ name: 42 });
