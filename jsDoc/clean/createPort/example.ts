import { C, DP, unwrap, E } from "@scripts";

// Domain Layer
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
}

// Application Layer
interface UserNotifierPort {
	notifyFoundUser(user: User.Entity): Promise<E.Success<true> | E.Fail>;
}

const UserNotifierPort = C.createPort<UserNotifierPort>();

const NotifyFoundUserUseCase = C.createUseCase(
	{ UserNotifierPort },
	(
		{ userNotifierPort },
	) => (user: User.Entity) => userNotifierPort.notifyFoundUser(user),
);

// Infrastructure Layer
const userNotifierPort = UserNotifierPort.createImplementation({
	notifyFoundUser(user) {
		// external integration
		console.log("Notify user", unwrap(user.nickname));
		return Promise.resolve(E.success(true));
	},
});
