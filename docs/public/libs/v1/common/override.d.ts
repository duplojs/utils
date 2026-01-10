import { type Adaptor, type AnyFunction, type AnyValue } from "./types";
import type * as DObject from "../object";
declare const SymbolOverrideStore: unique symbol;
declare module "./globalStore" {
    interface GlobalStore {
        [SymbolOverrideStore]: Record<string, Record<string, unknown>>;
    }
}
export interface OverrideHandler<GenericInterface extends object> {
    setMethod<GenericProperty extends DObject.GetPropsWithValueExtends<GenericInterface, AnyFunction>>(prop: GenericProperty, theFunction: (self: GenericInterface, ...args: Parameters<GenericInterface[GenericProperty]>) => ReturnType<GenericInterface[GenericProperty]>): void;
    setPropertyDefaultValue<GenericProperty extends Exclude<keyof GenericInterface, DObject.GetPropsWithValueExtends<GenericInterface, AnyFunction>>>(prop: GenericProperty, value: Adaptor<GenericInterface[GenericProperty], AnyValue>): void;
    apply(overrideInterface: GenericInterface): GenericInterface;
}
export declare function createOverride<GenericInterface extends object>(overrideName: string): OverrideHandler<GenericInterface>;
export {};
