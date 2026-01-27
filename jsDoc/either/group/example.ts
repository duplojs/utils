import { E } from "@scripts";

const result = E.group({
	user: E.right("user.loaded", { id: 1 }),
	rights: E.right("rights.loaded", ["read", "write"]),
	profile: E.left("profile.missing", null),
});

// type: E.Left<"profile.missing", null>
// | E.Success<{ user: { readonly id: 1; }; rights: readonly ["read", "write"]; profile: never; }>
