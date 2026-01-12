import { E } from "@scripts";

const asyncLoad = E.future(Promise.resolve(E.right("user.loaded", { id: 1 })));
const callbackRights = () => E.right("rights.loaded", ["read"]);
const promiseProfile = Promise.resolve(E.right("profile.loaded", { name: "Ada" }));

const result = await E.asyncGroup({
	user: asyncLoad,
	rights: callbackRights,
	profile: promiseProfile,
});

// type: E.EitherFutureError
// | E.EitherSuccess<{ user: { readonly id: 1; }; rights: readonly ["read"]; profile: { readonly name: "Ada"; }; }>
