import { type SimplifyTopLevel, type AnyFunction, type Kind } from "@scripts/common";
import { createCleanKind } from "./kind";

export const repositoryHandlerKind = createCleanKind("repository-handler");

export interface RepositoryHandler<
	GenericRepository extends object = object,
> extends Kind<typeof repositoryHandlerKind.definition> {

	/**
	 * {@include clean/createRepository/createImplementation.md}
	 */
	createImplementation(
		implementation: SimplifyTopLevel<{
			[Prop in keyof GenericRepository]: GenericRepository[Prop] extends AnyFunction
				? (...args: Parameters<GenericRepository[Prop]>) => ReturnType<GenericRepository[Prop]>
				: GenericRepository[Prop]
		}>
	): GenericRepository;
}

/**
 * {@include clean/createRepository/index.md}
 */
export function createRepository<
	GenericRepository extends object,
>(): RepositoryHandler<GenericRepository> {
	return repositoryHandlerKind.setTo({
		createImplementation(implementation: any) {
			return implementation;
		},
	});
}
