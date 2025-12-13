import { DPE, E, type ExpectType } from "@duplojs/utils";

const partialUser = DPE.object({
	id: DPE.number(),
	email: DPE.email().optional(),
	role: DPE.literal("admin"),
});

const strictUser = partialUser.required();

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
