import { DPE, DP, E, unwrap } from "@duplojs/utils";

const schema = DPE
	.object({
		name: DPE.string({ errorMessage: "invalid string" }),
	})
	.errorHandler(
		DP.createErrorMessageTransformer(
			DP.stringKind,
			() => "Name must be a string.",
		),
	);

const result = schema.parse({
	name: 42,
});

if (E.isLeft(result)) {
	const error = unwrap(result);
	const message = error.issues[0]?.message;
}
