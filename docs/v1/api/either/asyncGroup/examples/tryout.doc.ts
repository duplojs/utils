import { E, type ExpectType } from "@duplojs/utils";

const asyncLoad = E.future(Promise.resolve(E.right("user.loaded", { id: 1 })));
const callbackRights = () => E.right("rights.loaded", ["read"] as const);
const promiseProfile = Promise.resolve(E.right("profile.loaded", { name: "Ada" } as const));

const result = await E.asyncGroup({
	user: asyncLoad,
	rights: callbackRights,
	profile: promiseProfile,
});

type check = ExpectType<
	typeof result,
	E.EitherFutureError | E.EitherSuccess<{
		user: {
			readonly id: 1;
		};
		rights: readonly ["read"];
		profile: {
			readonly name: "Ada";
		};
	}>,
	"strict"
>;
