import { DP, E, type ExpectType } from "@duplojs/utils";

const partialUser = DP.object({
	id: DP.number(),
	email: DP.optional(DP.email()),
	role: DP.literal("admin"),
});

const strictUser = DP.required(partialUser);

const result = strictUser.parse({
	id: 1,
	email: "admin@example.com",
	role: "admin",
});

if (E.isRight(result)) {
	type check = ExpectType<
		typeof result,
		E.EitherSuccess<{
			id: number;
			email: string;
			role: "admin";
		}>,
		"strict"
	>;
}
