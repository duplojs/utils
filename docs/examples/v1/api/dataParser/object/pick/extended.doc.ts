import { DPE, type E, type ExpectType } from "@duplojs/utils";

const schema = DPE
	.object({
		id: DPE.number(),
		displayName: DPE.string(),
		email: DPE.string(),
		role: DPE.literal(
			["user", "admin", "support"],
		),
	})
	.pick({
		id: true,
		displayName: true,
	});

const result = schema.parse({
	id: 42,
	displayName: "mathcovax",
});

type check = ExpectType<
	typeof result,
	E.Error<DPE.DataParserError>
	| E.Success<{
		id: number;
		displayName: string;
	}>,
	"strict"
>;
