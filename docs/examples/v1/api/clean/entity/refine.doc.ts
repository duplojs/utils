import { C, DP, E, pipe } from "@duplojs/utils";

namespace User {
	export const Name = C.createNewType("UserName", DP.string());
	export const Nickname = C.createNewType("UserNickname", DP.string());

	export const Entity = C.createEntity("User", ({ nullable }) => ({
		name: Name,
		nickname: nullable(Nickname),
	}));
	export type Entity = C.GetEntity<typeof Entity>;
}

const rawUser = {
	name: "Ada",
	nickname: "A",
};

const mappedUser = User.Entity.map(
	rawUser,
	(entity: User.Entity) => entity.nickname !== null
		? E.success(entity)
		: E.left("nickname.required"),
);

const user = pipe(
	rawUser,
	User.Entity.mapOrThrow((entity: User.Entity) => entity.nickname !== null
		? E.success(entity)
		: E.left("nickname.required")),
);
