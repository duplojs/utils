import { createPort } from "./port";
/**
 * Creates a repository handler as a label of `createPort`.
 * 
 * **Supported call styles:**
 * - Classic: `createRepository<Repository>()` -> returns a handler
 * 
 * `createRepository` is an alias of `createPort`: it behaves the same and returns a port handler. Use it when you want repository-oriented naming in your Clean Architecture code.
 * 
 * ```ts
 * // Domain Layer
 * export namespace User {
 * 	export const Id = C.createNewType("UserId", DP.number(), C.Positive);
 * 	export type Id = C.GetNewType<typeof Id>;
 * 
 * 	export const Nickname = C.createNewType("UserNickname", DP.string());
 * 	export type Nickname = C.GetNewType<typeof Nickname>;
 * 
 * 	export const Role = C.createNewType("UserRole", DP.literal(["admin", "client", "manager"]));
 * 	export type Role = C.GetNewType<typeof Role>;
 * 
 * 	export const Entity = C.createEntity("User", ({ array }) => ({
 * 		id: Id,
 * 		nickname: Nickname,
 * 		roles: array(Role, { min: 1 }),
 * 	}));
 * 	export type Entity = C.GetEntity<typeof Entity>;
 * }
 * 
 * // Application Layer
 * interface UserRepository {
 * 	findById(id: User.Id): Promise<E.Success<User.Entity> | E.Fail>;
 * }
 * 
 * const UserRepository = C.createRepository<UserRepository>();
 * 
 * const FindUserUseCase = C.createUseCase(
 * 	{ UserRepository },
 * 	(
 * 		{ userRepository },
 * 	) => (userId: User.Id) => userRepository.findById(userId),
 * );
 * 
 * // Infrastructure Layer
 * const userRepository = UserRepository.createImplementation({
 * 	findById(userId) {
 * 		// database call
 * 		const user = User.Entity.mapOrThrow({
 * 			id: unwrap(userId),
 * 			nickname: "Daniel",
 * 			roles: ["manager"],
 * 		});
 * 
 * 		return Promise.resolve(E.success(user));
 * 	},
 * });
 * 
 * 
 * ```
 * 
 * @remarks
 * - This helper is only a semantic wrapper around `createPort` and adds no runtime logic.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/repository
 * @see https://utils.duplojs.dev/en/v1/api/clean/port
 * 
 * @namespace C
 * 
 */
export declare const createRepository: typeof createPort;
