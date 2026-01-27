import { DPE, type E, type ExpectType } from "@duplojs/utils";

const partialUser = DPE.object({
	id: DPE.number().optional(),
	email: DPE.email().optional(),
	role: DPE.literal("admin").optional(),
});

const strictUser = partialUser.required();

const result = strictUser.parse({
	id: 1,
	email: "admin@example.com",
	role: "admin",
});

type check = ExpectType<
	typeof result,
	E.Error<DPE.DataParserError>
	| E.Success<{
		id: number;
		role: "admin";
		email: string;
	}>,
	"strict"
>;

