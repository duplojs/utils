import { type Kind } from "@scripts/common";
import { createFlowKind } from "../kind";

export const dependenceHandlerKind = createFlowKind<
	"dependence-handler",
	string
>("dependence-handler");

export interface DependenceHandlerKind<
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

export type DependenceHandlerDefinition<
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
 * {@include flow/createDependence/index.md}
 */
export function createDependence<
	GenericName extends string,
>(
	name: GenericName,
): DependenceHandlerDefinition<GenericName> {
	const dependenceHandler = function(implementation: any) {
		return implementation;
	};

	return dependenceHandlerKind.setTo(dependenceHandler, name);
}
