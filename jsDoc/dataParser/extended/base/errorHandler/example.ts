import { DPE, DP, E, unwrap } from "@scripts";

const parser = DPE.number({ errorMessage: "invalid number" })
	.errorHandler(
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

const objectParser = DPE.object({
	name: DPE.string(),
}).errorHandler(DP.createErrorMessageTransformer(DP.stringKind, () => "Expected text."));
