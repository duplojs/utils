import { C, DP, E, pipe } from "@scripts";

const User = C.createEntity("User", ({ nullable }) => ({
	id: C.createNewType("user-id", DP.number(), C.Positive),
	name: C.createNewType("user-name", DP.string()),
	nickname: nullable(C.createNewType("user-nickname", DP.string())),
}));

// Hydrate raw properties or throw HydrateEntityError.
const user = User.mapOrThrow({
	id: 1,
	name: "Ada",
	nickname: null,
});

// Refine the hydrated entity or throw RefineEntityError on Left.
const refinedUser = User.mapOrThrow(
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
const pipedUser = pipe(
	{
		id: 1,
		name: "Ada",
		nickname: "A",
	},
	User.mapOrThrow((entity) => entity.nickname !== null
		? E.success(entity)
		: E.left("nickname.required")),
);
