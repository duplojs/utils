import { DPE, E, type ExpectType } from "@duplojs/utils";

const user = DPE.object({
	id: DPE.number(),
	email: DPE.email(),
	role: DPE.literal("admin"),
});

const partialUser = user.partial();

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
