import { DP, type E, type ExpectType } from "@duplojs/utils";

const schema = DP.object({
	id: DP.number(),
	displayName: DP.string(),
	email: DP.string(),
	role: DP.literal(
		["user", "admin", "support"],
	),
});

const pickSchema = DP.pick(
	schema,
	{
		id: true,
		displayName: true,
	},
);

const result = pickSchema.parse({
	id: 42,
	displayName: "mathcovax",
});

type check = ExpectType<
	typeof result,
	E.Error<DP.DataParserError>
	| E.Success<{
		id: number;
		displayName: string;
	}>,
	"strict"
>;
