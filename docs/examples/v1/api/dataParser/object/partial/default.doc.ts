import { DP, type E, type ExpectType } from "@duplojs/utils";

const userParser = DP.object({
	id: DP.number(),
	email: DP.email(),
	role: DP.literal("admin"),
});

const partialUser = DP.partial(userParser);

const result = partialUser.parse(
	{ email: "admin@example.com" },
);

type check = ExpectType<
	typeof result,
	E.EitherError<DP.DataParserError>
	| E.EitherSuccess<{
		id?: number | undefined;
		email?: string | undefined;
		role?: "admin" | undefined;
	}>,
	"strict"
>;
