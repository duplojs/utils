import { type ObjectEntry, type Kind, type SimplifyTopLevel, type UnionToIntersection, pipe, createOverride, type RemoveKind, type AnyFunction, type Adaptor } from "@scripts/common";
import { createCleanKind } from "./kind";
import * as DObject from "../object";
import * as DArray from "../array";
import * as DString from "../string";
import { type PortHandler } from "./port";

export type UseCaseDependencies = Record<
	string,
	UseCaseHandler | PortHandler
>;

export type UseCaseDependenciesValue<
	GenericDependencies extends UseCaseDependencies,
> = SimplifyTopLevel<{
	[
	Prop in keyof GenericDependencies as Uncapitalize<Adaptor<Prop, string>>
	]: GenericDependencies[Prop] extends PortHandler
		? ReturnType<GenericDependencies[Prop]["createImplementation"]>
		: GenericDependencies[Prop] extends UseCaseHandler
			? ReturnType<GenericDependencies[Prop]["getUseCase"]>
			: never
}>;

export type GetAllPorts<
	GenericDependenciesValue extends UseCaseDependencies,
> = GenericDependenciesValue extends any
	? ({
		[Prop in keyof GenericDependenciesValue]: (
			GenericDependenciesValue[Prop] extends PortHandler
				? [
					Uncapitalize<Adaptor<Prop, string>>,
					ReturnType<
						GenericDependenciesValue[Prop]["createImplementation"]
					>,
				]
				: GenericDependenciesValue[Prop] extends UseCaseHandler
					? GetAllPorts<GenericDependenciesValue[Prop]["dependencies"]>
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
		ports: (
			& (
				GetAllPorts<
					GenericDependencies
				> extends infer InferredEntriesDependenciesValue extends ObjectEntry
					? {
						[
						Entry in InferredEntriesDependenciesValue as Entry[0]
						]: Entry[1]
					}
					: never
			)
			& (
				{
					[
					Prop in keyof GenericDependencies as
					GenericDependencies[Prop] extends UseCaseHandler
						? Uncapitalize<Adaptor<Prop, string>>
						: never
					]?: GenericDependencies[Prop] extends UseCaseHandler
						? ReturnType<GenericDependencies[Prop]["getUseCase"]>
						: never
				}
			)
		)
	): GenericUseCase;
}

/**
 * {@include clean/createUseCase/index.md}
 */
export function createUseCase<
	const GenericDependencies extends UseCaseDependencies,
	GenericUseCase extends(...args: any[]) => any,
>(
	dependencies: GenericDependencies,
	getUseCase: (
		dependenciesValue: UseCaseDependenciesValue<GenericDependencies>
	) => GenericUseCase,
): UseCaseHandler<
		GenericDependencies,
		GenericUseCase
	> {
	return pipe(
		{
			dependencies,
			getUseCase: (injectedDependencies: Record<string, object>) => getUseCase(
				pipe(
					dependencies,
					DObject.entries,
					DArray.map(
						([key, value]) => {
							const formattedKey = DString.uncapitalize(key);

							return DObject.entry(
								formattedKey,
								useCaseHandlerKind.has(value) && !injectedDependencies[formattedKey]
									? value.getUseCase(injectedDependencies as never)
									: injectedDependencies[formattedKey]!,
							);
						},
					),
					DObject.fromEntries,
				) as never,
			),
		} satisfies Record<keyof RemoveKind<UseCaseHandler>, unknown>,
		useCaseHandlerKind.setTo,
		createUseCase.overrideHandler.apply as AnyFunction,
	);
}

createUseCase.overrideHandler = createOverride<UseCaseHandler>("@duplojs/utils/clean/use-case");

/**
 * {@include clean/useCaseInstances/index.md}
 */
export function useCaseInstances<
	GenericUseCases extends Record<string, UseCaseHandler>,
>(
	useCases: GenericUseCases,
	ports: SimplifyTopLevel<
		UnionToIntersection<
			{
				[Prop in keyof GenericUseCases]: GetAllPorts<
					GenericUseCases[Prop]["dependencies"]
				> extends infer InferredEntriesDependenciesValue extends ObjectEntry
					? {
						[
						Entry in InferredEntriesDependenciesValue as Entry[0]
						]: Entry[1]
					}
					: never
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
				useCase.getUseCase(ports as never),
			),
		),
		DObject.fromEntries,
	) as never;
}
