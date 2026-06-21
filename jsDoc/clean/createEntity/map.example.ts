import { C, DP, E, pipe } from "@scripts";

const User = C.createEntity("User", ({ nullable }) => ({
	id: C.createNewType("user-id", DP.number(), C.Positive),
	name: C.createNewType("user-name", DP.string()),
	nickname: nullable(C.createNewType("user-nickname", DP.string())),
}));

// Hydrate raw properties into an entity.
const result = User.map({
	id: 1,
	name: "Ada",
	nickname: null,
});
// E.Right<"hydratedEntity", C.GetEntity<typeof User>>
// | E.Left<"hydrateEntityError", DP.DataParserError>

// Refine the hydrated entity with a business rule.
const refinedResult = User.map(
	{
		id: 1,
		name: "Ada",
		nickname: "A",
	},
	(entity) => entity.nickname !== null
		? E.success(entity)
		: E.left("nickname.required"),
);

// Use the curried form in a pipe.
const pipedResult = pipe(
	{
		id: 1,
		name: "Ada",
		nickname: "A",
	},
	User.map((entity) => entity.nickname !== null
		? E.success(entity)
		: E.left("nickname.required")),
);
