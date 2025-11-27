import { DPE, DP, E, unwrap, S } from "@duplojs/utils";

const schema = DPE
	.templateLiteral([
		"invoice-",
		DP.coerce.number({ checkers: [DP.checkerInt()] }),
	])
	.refine(
		S.startsWith("invoice-"),
		{
			errorMessage: "template.invalid-prefix",
		},
	);

const result = schema.parse("invoice-1001");

if (E.isRight(result)) {
	const value = unwrap(result);
} else {
	const error = unwrap(result);
}
