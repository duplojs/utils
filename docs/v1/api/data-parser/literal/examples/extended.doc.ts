import { DPE, E, equal, unwrap } from "@duplojs/utils";

const schema = DPE
	.literal(["admin", "editor", "reader"])
	.refine(
		(value) => !equal(value, "reader"),
		{
			errorMessage: "role.reader-forbidden",
		},
	);

const result = schema.parse("editor");

if (E.isRight(result)) {
	const value = unwrap(result);
} else {
	const error = unwrap(result);
}
