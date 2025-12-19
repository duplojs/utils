import { C, DP, unwrap, E } from "@duplojs/utils";

/* Domain Layer */
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

/* Application Layer */
interface UserRepository {
	findById(id: User.Id): Promise<E.EitherSuccess<User.Entity> | E.EitherFail>;
}

const UserRepository = C.createRepository<UserRepository>();

const FindUserUseCase = C.createUseCase(
	{ UserRepository },
	(
		{ userRepository },
	) => (userId: User.Id) => userRepository.findById(userId),
);

/* Infrastructure Layer */
const userRepository = UserRepository.createImplementation({
	findById(userId) {
		// database call
		const user = User.Entity.mapOrThrow({
			id: unwrap(userId),
			nickname: "Daniel",
			roles: ["manager"],
		});

		return Promise.resolve(E.success(user));
	},
});

