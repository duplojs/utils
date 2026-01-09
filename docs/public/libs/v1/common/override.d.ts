import { type GetPropsWithValueExtends } from "../object";
import { type AnyConstructor, type Adaptor, type AnyFunction, type AnyValue, type ObjectKey } from "./types";
declare const SymbolOverrideStore: unique symbol;
type OverrideClass = AnyConstructor<[], Record<ObjectKey, unknown>>;
declare module "./globalStore" {
    interface GlobalStore {
        [SymbolOverrideStore]: Record<string, OverrideClass>;
    }
}
export interface OverrideHandler<GenericInterface extends object> {
    setMethod<GenericProperty extends GetPropsWithValueExtends<GenericInterface, AnyFunction>>(prop: GenericProperty, theFunction: (self: GenericInterface, ...args: Parameters<GenericInterface[GenericProperty]>) => ReturnType<GenericInterface[GenericProperty]>): void;
    setPropertyDefaultValue<GenericProperty extends Exclude<keyof GenericInterface, GetPropsWithValueExtends<GenericInterface, AnyFunction>>>(prop: GenericProperty, value: Adaptor<GenericInterface[GenericProperty], AnyValue>): void;
    apply(overrideInterface: GenericInterface): GenericInterface;
}
export declare function createOverride<GenericInterface extends object>(overrideName: string): OverrideHandler<GenericInterface>;
export {};
