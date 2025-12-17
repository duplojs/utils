import { DP, type E, type ExpectType } from "@duplojs/utils";

const base = DP.object({
	id: DP.optional(DP.number()),
	email: DP.optional(DP.email()),
	role: DP.optional(DP.literal("admin")),
});

const strictUser = DP.required(base);

const result = strictUser.parse({
	id: 1,
	email: "admin@example.com",
	role: "admin",
});

type check = ExpectType<
	typeof result,
	E.EitherError<DP.DataParserError>
	| E.EitherSuccess<{
		id: number;
		role: "admin";
		email: string;
	}>,
	"strict"
>;
