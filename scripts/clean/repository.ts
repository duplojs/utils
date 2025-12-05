import { type AnyFunction, type Kind } from "@scripts/common";
import { createCleanKind } from "./kind";

export const repositoryHandlerKind = createCleanKind("repository-handler");

export interface RepositoryHandler<
	GenericRepository extends object = object,
> extends Kind<typeof repositoryHandlerKind.definition> {
	createImplementation(
		implementation: {
			[Prop in keyof GenericRepository]: GenericRepository[Prop] extends AnyFunction
				? AnyFunction<
					Parameters<GenericRepository[Prop]>,
					ReturnType<GenericRepository[Prop]>
				>
				: GenericRepository[Prop]
		}
	): GenericRepository;
}

export function createRepository<
	GenericRepository extends object,
>(): RepositoryHandler<GenericRepository> {
	return repositoryHandlerKind.setTo({
		createImplementation(implementation: any) {
			return implementation;
		},
	});
}
