import { DP, type E, type ExpectType } from "@duplojs/utils";

const baseSchema = DP.object({
	id: DP.number(),
	displayName: DP.string(),
});

const extendedSchema = DP.extends(
	baseSchema,
	{
		email: DP.string(),
	},
);

const result = extendedSchema.parse({
	id: 42,
	displayName: "mathcovax",
	email: "math@duplo.dev",
});

type check = ExpectType<
	typeof result,
	E.EitherError<DP.DataParserError>
	| E.EitherSuccess<{
		id: number;
		displayName: string;
		email: string;
	}>,
	"strict"
>;
