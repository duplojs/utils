import { DPE, E, unwrap, A } from "@duplojs/utils";

const schema = DPE
	.string()
	.array()
	.min(1)
	.max(5)
	.refine(
		A.includes("admin"),
		{
			errorMessage: "roles.need-admin",
		},
	);

const result = schema.parse(["viewer", "admin"]);

if (E.isRight(result)) {
	const value = unwrap(result);
} else {
	const error = unwrap(result);
}
