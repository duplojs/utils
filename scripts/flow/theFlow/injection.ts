import { type Kind } from "@scripts/common";
import { createFlowKind } from "../kind";
import { type DependenceHandler } from "./dependence";

export interface InjectionProperties<
	GenericDependenceHandler extends DependenceHandler = DependenceHandler,
> {
	dependenceHandler: GenericDependenceHandler;
	inject(value: ReturnType<GenericDependenceHandler>): void;
}

export const injectionKind = createFlowKind<
	"injection",
	InjectionProperties
>("injection");

export interface Injection<
	GenericDependenceHandler extends DependenceHandler = DependenceHandler,
> extends Kind<
		typeof injectionKind.definition,
		InjectionProperties<GenericDependenceHandler>
	> {

}

export function createInjection<
	GenericDependenceHandler extends DependenceHandler = DependenceHandler,
>(
	properties: InjectionProperties<GenericDependenceHandler>,
): Injection<GenericDependenceHandler> {
	return injectionKind.setTo({}, properties);
}
