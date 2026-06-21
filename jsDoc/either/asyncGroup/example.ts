import { E } from "@scripts";

// Aggregate an object containing synchronous and asynchronous values.
const asyncLoad = E.future(Promise.resolve(E.right("user.loaded", { id: 1 })));
const loadedRights = E.right("rights.loaded", ["read"]);
const promiseProfile = Promise.resolve(E.right("profile.loaded", { name: "Ada" }));

const objectResult = await E.asyncGroup({
	user: asyncLoad,
	rights: loadedRights,
	profile: promiseProfile,
});

// E.FutureError | E.Success<{
//   user: { readonly id: 1 };
//   rights: readonly ["read"];
//   profile: { readonly name: "Ada" };
// }>

// Preserve the positions and types of a tuple.
const tupleResult = await E.asyncGroup([
	Promise.resolve(E.right("user.loaded", { id: 1 })),
	Promise.resolve(E.right("rights.loaded", ["read"])),
]);

// E.Success<[{ readonly id: 1 }, readonly ["read"]]>

// Return the first Left.
const errorResult = await E.asyncGroup([
	Promise.resolve(E.right("user.loaded", { id: 1 })),
	Promise.resolve(E.left("rights.missing", null)),
	Promise.resolve(E.left("profile.missing", null)),
]);

// E.Left<"rights.missing", null> | E.Left<"profile.missing", null>
