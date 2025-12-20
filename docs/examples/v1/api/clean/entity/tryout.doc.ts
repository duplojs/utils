import { C, DP } from "@duplojs/utils";

export namespace User {
	export const Id = C.createNewType("UserId", DP.number(), C.Positive);
	export type Id = C.GetNewType<typeof Id>;

	export const Nickname = C.createNewType("UserNickname", DP.string());
	export type Nickname = C.GetNewType<typeof Nickname>;

	export const Role = C.createNewType("UserRole", DP.literal(["admin", "client", "manager"]));
	export type Role = C.GetNewType<typeof Role>;

	export const Entity = C.createEntity("User", ({ array }) => ({
		id: Id,
		nickname: Nickname,
		roles: array(Role, { min: 1 }),
	}));
	export type Entity = C.GetEntity<typeof Entity>;

	const defaultRole = Role.createOrThrow("client");

	export function create(params: {
		id: Id;
		nickname: Nickname;
	}) {
		return Entity.new({
			...params,
			roles: [defaultRole],
		});
	}
}
