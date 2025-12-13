import { type AnyFunction, type Kind } from "../common";
export declare const repositoryHandlerKind: import("../common").KindHandler<import("../common").KindDefinition<"@DuplojsUtilsClean/repository-handler", unknown>>;
export interface RepositoryHandler<GenericRepository extends object = object> extends Kind<typeof repositoryHandlerKind.definition> {
    createImplementation(implementation: {
        [Prop in keyof GenericRepository]: GenericRepository[Prop] extends AnyFunction ? AnyFunction<Parameters<GenericRepository[Prop]>, ReturnType<GenericRepository[Prop]>> : GenericRepository[Prop];
    }): GenericRepository;
}
export declare function createRepository<GenericRepository extends object>(): RepositoryHandler<GenericRepository>;
