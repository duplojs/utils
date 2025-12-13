import { DP, E, type ExpectType } from "@duplojs/utils";

const userParser = DP.object({
	id: DP.number(),
	email: DP.email(),
	role: DP.literal("admin" as const),
});

const partialUser = DP.partial(userParser);

const result = partialUser.parse({ email: "admin@example.com" });

if (E.isRight(result)) {
	type check = ExpectType<
		typeof result,
		E.EitherSuccess<{
			id?: number | undefined;
			role?: "admin" | undefined;
			email?: string | undefined;
		}>,
		"strict"
	>;
}
