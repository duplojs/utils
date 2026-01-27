import { DPE, type E, type ExpectType } from "@duplojs/utils";

const user = DPE.object({
	id: DPE.number(),
	email: DPE.email(),
	role: DPE.literal("admin"),
});

const partialUser = user.partial();

const result = partialUser.parse(
	{ email: "admin@example.com" },
);

type check = ExpectType<
	typeof result,
	E.Error<DPE.DataParserError>
	| E.Success<{
		id?: number | undefined;
		email?: string | undefined;
		role?: "admin" | undefined;
	}>,
	"strict"
>;
