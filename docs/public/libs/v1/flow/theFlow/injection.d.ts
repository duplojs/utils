import { type Kind } from "../../common";
import { type DependenceHandler } from "./dependence";
export interface InjectionProperties<GenericDependenceHandler extends DependenceHandler = DependenceHandler> {
    dependenceHandler: GenericDependenceHandler;
    inject(value: ReturnType<GenericDependenceHandler>): void;
}
export declare const injectionKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsFlow/injection", InjectionProperties<DependenceHandler>>>;
export interface Injection<GenericDependenceHandler extends DependenceHandler = DependenceHandler> extends Kind<typeof injectionKind.definition, InjectionProperties<GenericDependenceHandler>> {
}
export declare function createInjection<GenericDependenceHandler extends DependenceHandler = DependenceHandler>(properties: InjectionProperties<GenericDependenceHandler>): Injection<GenericDependenceHandler>;
