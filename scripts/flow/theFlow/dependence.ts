import { type AnyFunction, type Kind, createOverride, pipe } from "@scripts/common";
import { createFlowKind } from "../kind";

export const dependenceHandlerKind = createFlowKind<
	"dependence-handler",
	string
>("dependence-handler");

interface DependenceHandlerKind<
	GenericName extends string = string,
> extends Kind<
		typeof dependenceHandlerKind.definition,
		GenericName
	> {

}

export type DependenceHandler<
	GenericName extends string = string,
	GenericType extends any = any,
> = (
	& DependenceHandlerKind<GenericName>
	& (
		(
			implementation: GenericType
		) => GenericType
	)
);

type _DependenceHandler<
	GenericName extends string = string,
> = (
	& DependenceHandlerKind<GenericName>
	& (
		<GenericType extends unknown>(
			implementation: GenericType
		) => GenericType
	)
);

/**
 * {@include clean/createDependence/index.md}
 */
export function createDependence<
	GenericName extends string,
>(
	name: GenericName,
): _DependenceHandler<GenericName> {
	const dependenceHandler = function(implementation: any) {
		return implementation;
	};
	return pipe(
		dependenceHandler,
		(value) => dependenceHandlerKind.setTo(value, name),
		createDependence.overrideHandler.apply as AnyFunction,
	);
}

createDependence.overrideHandler = createOverride<DependenceHandler>("@duplojs/utils/flow/dependence");
