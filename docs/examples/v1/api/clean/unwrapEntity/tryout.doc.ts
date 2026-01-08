import { type ExpectType, C, DP } from "@duplojs/utils";

/* Domain Layer */
export namespace User {
	export const UserId = C.createNewType("UserId", DP.number());
	export type UserId = C.GetNewType<typeof UserId>;

	export const UserTag = C.createNewType("UserTag", DP.string());
	export type UserTag = C.GetNewType<typeof UserTag>;

	export const Entity = C.createEntity("User", ({ array }) => ({
		id: UserId,
		tags: array(UserTag),
	}));
	export type Entity = C.GetEntity<typeof Entity>;

	export const IsAdmin = C.createFlag<
		Entity,
		"isAdmin",
		boolean
	>("isAdmin");
	export type IsAdmin = C.GetFlag<typeof IsAdmin>;
}

/* Application Layer */
const user = User.Entity.new({
	id: User.UserId.createOrThrow(1),
	tags: [User.UserTag.createOrThrow("tech")],
});

const flaggedUser = User.IsAdmin.append(user, true);
const unwrappedUser = C.unwrapEntity(flaggedUser);

type check = ExpectType<
	typeof unwrappedUser,
	C.UnwrapEntity<typeof flaggedUser>,
	"strict"
>;
