import { DPE, type E, type ExpectType } from "@duplojs/utils";

const schema = DPE
	.object({
		id: DPE.number(),
		displayName: DPE.string(),
	})
	.extends({
		email: DPE.string(),
	});

const result = schema.parse({
	id: 42,
	displayName: "mathcovax",
	email: "math@duplo.dev",
});

type check = ExpectType<
	typeof result,
	E.EitherError<DPE.DataParserError>
	| E.EitherSuccess<{
		id: number;
		displayName: string;
		email: string;
	}>,
	"strict"
>;
