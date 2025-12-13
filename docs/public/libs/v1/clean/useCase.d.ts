import { type ObjectEntry, type Kind, type SimplifyTopLevel, type UnionToIntersection } from "../common";
import { type RepositoryHandler } from "./repository";
export type UseCaseDependencies = Record<string, RepositoryHandler | UseCaseHandler>;
export type UseCaseDependenciesValue<GenericDependencies extends UseCaseDependencies> = SimplifyTopLevel<{
    [Prop in keyof GenericDependencies]: GenericDependencies[Prop] extends RepositoryHandler ? ReturnType<GenericDependencies[Prop]["createImplementation"]> : GenericDependencies[Prop] extends UseCaseHandler ? ReturnType<GenericDependencies[Prop]["getUseCase"]> : never;
}>;
export type GetAllRepositories<GenericDependenciesValue extends UseCaseDependencies> = GenericDependenciesValue extends any ? ({
    [Prop in keyof GenericDependenciesValue]: (GenericDependenciesValue[Prop] extends RepositoryHandler ? [
        Prop,
        ReturnType<GenericDependenciesValue[Prop]["createImplementation"]>
    ] : GenericDependenciesValue[Prop] extends UseCaseHandler ? GetAllRepositories<GenericDependenciesValue[Prop]["dependencies"]> : never);
})[keyof GenericDependenciesValue] : never;
export declare const useCaseHandlerKind: import("../common").KindHandler<import("../common").KindDefinition<"@DuplojsUtilsClean/use-case-handler", unknown>>;
export interface UseCaseHandler<GenericDependencies extends UseCaseDependencies = any, GenericUseCase extends (input: any) => any = any> extends Kind<typeof useCaseHandlerKind.definition> {
    dependencies: GenericDependencies;
    getUseCase(repositories: (GetAllRepositories<GenericDependencies> extends infer InferredEntriesDependenciesValue extends ObjectEntry ? {
        [Entry in InferredEntriesDependenciesValue as InferredEntriesDependenciesValue[0]]: InferredEntriesDependenciesValue[1];
    } : never)): GenericUseCase;
}
export declare function createUseCase<const GenericDependencies extends UseCaseDependencies, GenericUseCase extends (input: any) => any>(dependencies: GenericDependencies, getUseCase: (dependenciesValue: UseCaseDependenciesValue<GenericDependencies>) => GenericUseCase): UseCaseHandler<GenericDependencies, GenericUseCase>;
export declare function useCaseInstances<GenericUseCases extends Record<string, UseCaseHandler>>(useCases: GenericUseCases, repositories: SimplifyTopLevel<UnionToIntersection<{
    [Prop in keyof GenericUseCases]: Parameters<GenericUseCases[Prop]["getUseCase"]>[0];
}[keyof GenericUseCases]>>): UseCaseDependenciesValue<GenericUseCases>;
