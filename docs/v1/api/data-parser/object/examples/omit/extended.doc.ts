import { DPE, type E, type ExpectType } from "@duplojs/utils";

const schema = DPE
	.object({
		id: DPE.number(),
		email: DPE.string(),
		password: DPE.string(),
		token: DPE.string(),
	})
	.omit({
		password: true,
		token: true,
	});

const result = schema.parse({
	id: 7,
	email: "contact@duplojs.dev",
});

type check = ExpectType<
	typeof result,
	E.EitherError<DPE.DataParserError>
	| E.EitherSuccess<{
		id: number;
		email: string;
	}>,
	"strict"
>;
