import { DPE, type E, A, type ExpectType } from "@duplojs/utils";

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

type check = ExpectType<
	typeof result,
	E.Error<DPE.DataParserError> | E.Success<string[]>,
	"strict"
>;
