import { E, type ExpectType } from "@duplojs/utils";

const result = E.group({
	user: E.right("user.loaded", { id: 1 }),
	rights: E.right("rights.loaded", ["read", "write"] as const),
	profile: E.left("profile.missing", null),
});

type check = ExpectType<
	typeof result,
	E.EitherLeft<"profile.missing", null> | E.EitherSuccess<{
		user: {
			readonly id: 1;
		};
		rights: readonly ["read", "write"];
		profile: never;
	}>,
	"strict"
>;
