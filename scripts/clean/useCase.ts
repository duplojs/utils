import { type ObjectEntry, type Kind, type SimplifyTopLevel, type UnionToIntersection, pipe } from "@scripts/common";
import { type RepositoryHandler } from "./repository";
import { createCleanKind } from "./kind";
import * as DObject from "../object";
import * as DArray from "../array";
import * as DString from "../string";

export type UseCaseDependencies = Record<
	string,
	RepositoryHandler | UseCaseHandler
>;

export type UseCaseDependenciesValue<
	GenericDependencies extends UseCaseDependencies,
> = SimplifyTopLevel<{
	[
	Prop in keyof GenericDependencies as (
		Prop extends string
			? Uncapitalize<Prop>
			: Prop
	)
	]: GenericDependencies[Prop] extends RepositoryHandler
		? ReturnType<GenericDependencies[Prop]["createImplementation"]>
		: GenericDependencies[Prop] extends UseCaseHandler
			? ReturnType<GenericDependencies[Prop]["getUseCase"]>
			: never
}>;

export type GetAllRepositories<
	GenericDependenciesValue extends UseCaseDependencies,
> = GenericDependenciesValue extends any
	? ({
		[Prop in keyof GenericDependenciesValue]: (
			GenericDependenciesValue[Prop] extends RepositoryHandler
				? [
					(
						Prop extends string
							? Uncapitalize<Prop>
							: Prop
					),
					ReturnType<
						GenericDependenciesValue[Prop]["createImplementation"]
					>,
				]
				: GenericDependenciesValue[Prop] extends UseCaseHandler
					? GetAllRepositories<GenericDependenciesValue[Prop]["dependencies"]>
					: never
		)
	})[keyof GenericDependenciesValue]
	: never;

export const useCaseHandlerKind = createCleanKind("use-case-handler");

export interface UseCaseHandler<
	GenericDependencies extends UseCaseDependencies = any,
	GenericUseCase extends(input: any) => any = any,
> extends Kind<typeof useCaseHandlerKind.definition> {

	/**
	 * {@include clean/createUseCase/dependencies.md}
	 */
	dependencies: GenericDependencies;

	/**
	 * {@include clean/createUseCase/getUseCase.md}
	 */
	getUseCase(
		repositories: (
			GetAllRepositories<
				GenericDependencies
			> extends infer InferredEntriesDependenciesValue extends ObjectEntry
				? {
					[
					Entry in InferredEntriesDependenciesValue as InferredEntriesDependenciesValue[0]
					]: InferredEntriesDependenciesValue[1]
				}
				: never
		)
	): GenericUseCase;
}

/**
 * {@include clean/createUseCase/index.md}
 */
export function createUseCase<
	const GenericDependencies extends UseCaseDependencies,
	GenericUseCase extends(input: any) => any,
>(
	dependencies: GenericDependencies,
	getUseCase: (
		dependenciesValue: UseCaseDependenciesValue<GenericDependencies>
	) => GenericUseCase,
): UseCaseHandler<
		GenericDependencies,
		GenericUseCase
	> {
	return useCaseHandlerKind.setTo({
		dependencies,
		getUseCase: (repositories: Record<string, object>) => getUseCase(
			pipe(
				dependencies,
				DObject.entries,
				DArray.map(
					([key, value]) => DObject.entry(
						DString.uncapitalize(key),
						useCaseHandlerKind.has(value)
							? value.getUseCase(repositories as never)
							: repositories[DString.uncapitalize(key)]!,
					),
				),
				DObject.fromEntries,
			) as never,
		),
	}) as never;
}

/**
 * {@include clean/useCaseInstances/index.md}
 */
export function useCaseInstances<
	GenericUseCases extends Record<string, UseCaseHandler>,
>(
	useCases: GenericUseCases,
	repositories: SimplifyTopLevel<
		UnionToIntersection<
			{
				[Prop in keyof GenericUseCases]: Parameters<
					GenericUseCases[Prop]["getUseCase"]
				>[0]
			}[keyof GenericUseCases]
		>
	>,
): UseCaseDependenciesValue<GenericUseCases> {
	return pipe(
		useCases,
		DObject.entries,
		DArray.map(
			([key, useCase]) => DObject.entry(
				DString.uncapitalize(key),
				useCase.getUseCase(repositories as never),
			),
		),
		DObject.fromEntries,
	) as never;
}
