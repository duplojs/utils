import { E } from "@scripts";

// Aggregate an object.
const objectResult = E.group({
	user: E.right("user.loaded", { id: 1 }),
	rights: E.right("rights.loaded", ["read", "write"]),
});

// E.Success<{
//   user: { readonly id: 1 };
//   rights: readonly ["read", "write"];
// }>

// Preserve the positions and types of a tuple.
const tupleResult = E.group([
	E.right("user.loaded", { id: 1 }),
	E.right("rights.loaded", ["read"]),
]);

// E.Success<[
//   { readonly id: 1 },
//   readonly ["read"]
// ]>

// Return the first Left.
const errorResult = E.group([
	E.right("user.loaded", { id: 1 }),
	E.left("rights.missing", null),
	E.left("profile.missing", null),
]);

// E.Left<"rights.missing", null> | E.Left<"profile.missing", null>
