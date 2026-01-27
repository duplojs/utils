import { type SimplifyTopLevel, type AnyFunction, type Kind } from "../common";
export declare const repositoryHandlerKind: import("../common").KindHandler<import("../common").KindDefinition<"@DuplojsUtilsClean/repository-handler", unknown>>;
export interface RepositoryHandler<GenericRepository extends object = object> extends Kind<typeof repositoryHandlerKind.definition> {
    /**
     * Returns the implementation after verifying it matches the repository contract.
     * 
     * ```ts
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
     * ```
     * 
     */
    createImplementation(implementation: SimplifyTopLevel<{
        [Prop in keyof GenericRepository]: GenericRepository[Prop] extends AnyFunction ? (...args: Parameters<GenericRepository[Prop]>) => ReturnType<GenericRepository[Prop]> : GenericRepository[Prop];
    }>): GenericRepository;
}
/**
 * Creates a repository handler for a contract interface.
 * 
 * **Supported call styles:**
 * - Classic: `createRepository<Repository>()` -> returns a handler
 * 
 * The handler enforces the repository contract at compile time and stays runtime-free. It is meant to be composed with use cases.
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
 * - This helper adds no runtime logic; it only validates the contract at compile time.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/repository
 * 
 * @namespace C
 * 
 */
export declare function createRepository<GenericRepository extends object>(): RepositoryHandler<GenericRepository>;
