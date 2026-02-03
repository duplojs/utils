import { type ObjectEntry, type Kind, type SimplifyTopLevel, type UnionToIntersection, type Adaptor } from "../common";
import { type RepositoryHandler } from "./repository";
export type UseCaseDependencies = Record<string, RepositoryHandler | UseCaseHandler>;
export type UseCaseDependenciesValue<GenericDependencies extends UseCaseDependencies> = SimplifyTopLevel<{
    [Prop in keyof GenericDependencies as Uncapitalize<Adaptor<Prop, string>>]: GenericDependencies[Prop] extends RepositoryHandler ? ReturnType<GenericDependencies[Prop]["createImplementation"]> : GenericDependencies[Prop] extends UseCaseHandler ? ReturnType<GenericDependencies[Prop]["getUseCase"]> : never;
}>;
export type GetAllRepositories<GenericDependenciesValue extends UseCaseDependencies> = GenericDependenciesValue extends any ? ({
    [Prop in keyof GenericDependenciesValue]: (GenericDependenciesValue[Prop] extends RepositoryHandler ? [
        Uncapitalize<Adaptor<Prop, string>>,
        ReturnType<GenericDependenciesValue[Prop]["createImplementation"]>
    ] : GenericDependenciesValue[Prop] extends UseCaseHandler ? GetAllRepositories<GenericDependenciesValue[Prop]["dependencies"]> : never);
})[keyof GenericDependenciesValue] : never;
export declare const useCaseHandlerKind: import("../common").KindHandler<import("../common").KindDefinition<"@DuplojsUtilsClean/use-case-handler", unknown>>;
export interface UseCaseHandler<GenericDependencies extends UseCaseDependencies = any, GenericUseCase extends (input: any) => any = any> extends Kind<typeof useCaseHandlerKind.definition> {
    /**
     * The dependency definition (repository handlers and/or use case handlers).
     * 
     */
    dependencies: GenericDependencies;
    /**
     * Instantiates the use case with repository implementations.
     * 
     * ```ts
     * // instance one use case
     * const findUserUseCase = FindUserUseCase.getUseCase({ userRepository });
     * ```
     * 
     */
    getUseCase(repositories: ((GetAllRepositories<GenericDependencies> extends infer InferredEntriesDependenciesValue extends ObjectEntry ? {
        [Entry in InferredEntriesDependenciesValue as Entry[0]]: Entry[1];
    } : never) & ({
        [Prop in keyof GenericDependencies as GenericDependencies[Prop] extends UseCaseHandler ? Uncapitalize<Adaptor<Prop, string>> : never]?: GenericDependencies[Prop] extends UseCaseHandler ? ReturnType<GenericDependencies[Prop]["getUseCase"]> : never;
    }))): GenericUseCase;
}
/**
 * Creates a use case handler with explicit dependencies.
 * 
 * **Supported call styles:**
 * - Classic: `createUseCase(dependencies, getUseCase)` -> returns a handler
 * 
 * This separates declaration (dependencies + factory) from instantiation (repositories). Sub-use-cases are resolved automatically during instantiation.
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
 * // instance one use case
 * const findUserUseCase = FindUserUseCase.getUseCase({ userRepository });
 * 
 * // instance many use cases
 * const useCases = C.useCaseInstances(
 * 	{
 * 		FindUserUseCase,
 * 		//...
 * 	},
 * 	{
 * 		userRepository,
 * 		//...
 * 	},
 * );
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/useCase
 * 
 * @namespace C
 * 
 */
export declare function createUseCase<const GenericDependencies extends UseCaseDependencies, GenericUseCase extends (input: any) => any>(dependencies: GenericDependencies, getUseCase: (dependenciesValue: UseCaseDependenciesValue<GenericDependencies>) => GenericUseCase): UseCaseHandler<GenericDependencies, GenericUseCase>;
export declare namespace createUseCase {
    var overrideHandler: import("../common").OverrideHandler<UseCaseHandler<any, any>>;
}
/**
 * Instantiates multiple use cases at once.
 * 
 * **Supported call styles:**
 * - Classic: `useCaseInstances(useCases, repositories)` -> returns use case functions
 * 
 * It maps dependency handlers to their implementations and returns an object of executable use cases with matching keys.
 * 
 * ```ts
 * interface UserRepository {
 * 	findById(id: number): Promise<string | null>;
 * }
 * 
 * const UserRepository = C.createRepository<UserRepository>();
 * 
 * const FindUser = C.createUseCase(
 * 	{ UserRepository },
 * 	({ userRepository }) => async(id: number) => userRepository.findById(id),
 * );
 * 
 * const CountUser = C.createUseCase(
 * 	{ UserRepository },
 * 	({ userRepository }) => async() => (await userRepository.findById(1) ? 1 : 0),
 * );
 * 
 * const repository = UserRepository.createImplementation({
 * 	findById(id) {
 * 		return Promise.resolve(id === 1 ? "Ada" : null);
 * 	},
 * });
 * 
 * const useCases = C.useCaseInstances(
 * 	{
 * 		FindUser,
 * 		CountUser,
 * 	},
 * 	{ userRepository: repository },
 * );
 * 
 * ```
 * 
 * @remarks
 * - Returned keys are the uncapitalized version of the handler keys.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/useCase
 * 
 * @namespace C
 * 
 */
export declare function useCaseInstances<GenericUseCases extends Record<string, UseCaseHandler>>(useCases: GenericUseCases, repositories: SimplifyTopLevel<UnionToIntersection<{
    [Prop in keyof GenericUseCases]: GetAllRepositories<GenericUseCases[Prop]["dependencies"]> extends infer InferredEntriesDependenciesValue extends ObjectEntry ? {
        [Entry in InferredEntriesDependenciesValue as Entry[0]]: Entry[1];
    } : never;
}[keyof GenericUseCases]>>): UseCaseDependenciesValue<GenericUseCases>;
