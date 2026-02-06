import { type ExpectType, C, D, DP, toNative, toJSON } from "@duplojs/utils";

/* Domain Layer */
export namespace User {
	export const Id = C.createNewType("UserId", DP.number());
	export type Id = C.GetNewType<typeof Id>;

	export const Tag = C.createNewType("UserTag", DP.string());
	export type Tag = C.GetNewType<typeof Tag>;

	export const CreatedAt = C.createNewType("UserCreatedAt", DP.date());
	export type CreatedAt = C.GetNewType<typeof CreatedAt>;

	export const Entity = C.createEntity("User", ({ array }) => ({
		id: Id,
		tags: array(Tag),
		createdAt: CreatedAt,
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
	id: User.Id.createOrThrow(1),
	tags: [User.Tag.createOrThrow("tech")],
	createdAt: User.CreatedAt.createOrThrow(D.now()),
});

const flaggedUser = User.IsAdmin.append(user, true);
const unwrappedUser = C.unwrapEntity(flaggedUser);

type check = ExpectType<
	typeof unwrappedUser,
	C.UnwrapEntity<typeof flaggedUser>,
	"strict"
>;

const unwrappedUserNative = C.unwrapEntity(user, { transformer: toNative });
const unwrappedUserJSON = C.unwrapEntity(user, { transformer: toJSON });
