import { C, DP, E } from "@scripts";

namespace User {
	export const Id = C.createNewType("user-id", DP.number(), C.Positive);
	export type Id = C.GetNewType<typeof Id>;
	export const Name = C.createNewType("user-name", DP.string());
	export type Name = C.GetNewType<typeof Name>;
	export const Role = C.createNewType("UserRole", DP.literal(["admin", "client", "manager"]));

	export const Entity = C.createEntity("User", ({ array, nullable }) => ({
		id: Id,
		name: Name,
		roles: array(Role, { min: 1 }),
		nick: nullable(Name),
	}));
	export type Entity = C.GetEntity<typeof Entity>;

	const defaultRole = Role.createOrThrow("client");

	export function create(params: {
		id: Id;
		name: Name;
	}) {
		return Entity.new({
			...params,
			nick: null,
			roles: [defaultRole],
		});
	}
}

const mapped = User.Entity.mapOrThrow({
	id: 2,
	name: "Bob",
	roles: ["client"],
	nick: "Bobby",
});

const result = true ? mapped : null;

if (User.Entity.is(result)) {
	// result: C.Entity<"User">
}

const mappedResult = User.Entity.map({
	id: 3,
	name: "Eve",
	roles: ["manager"],
	nick: null,
});

if (E.isRight(mappedResult)) {
	// mappedResult: E.EitherRight<"createEntity", C.Entity<"User">>
}

const updated = User.Entity.update(mapped, {
	name: User.Name.createOrThrow("Bobby"),
	nick: null,
});
