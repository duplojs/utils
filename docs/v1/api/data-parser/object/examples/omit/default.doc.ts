import { DP, type E, type ExpectType } from "@duplojs/utils";

const schema = DP.object({
	id: DP.number(),
	email: DP.string(),
	password: DP.string(),
	token: DP.string(),
});

const omitSchema = DP.omit(
	schema,
	{
		password: true,
		token: true,
	},
);

const result = omitSchema.parse({
	id: 7,
	email: "contact@duplojs.dev",
});

type check = ExpectType<
	typeof result,
	E.EitherError<DP.DataParserError>
	| E.EitherSuccess<{
		id: number;
		email: string;
	}>,
	"strict"
>;
