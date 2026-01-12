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
/**
 * The createOverride() function lets you register changes (default values and/or methods) that will be applied when creating an object.
 * 
 * Signature: `createOverride(overrideName)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * interface Service {
 * 	readonly prefix: string;
 * 	greet(name: string): string;
 * }
 * 
 * function createService(prefix: string): Service {
 * 	const self: Service = {
 * 		prefix,
 * 		greet: (name) => `${prefix} ${name}`,
 * 	};
 * 
 * 	return createService.overrideHandler.apply(self);
 * }
 * 
 * createService.overrideHandler = createOverride<Service>(
 * 	"@duplojs/utils/docs/service",
 * );
 * 
 * const base = createService("Hello");
 * base.greet("Ada");
 * // "Hello Ada"
 * 
 * // "Plugin": modifie ce qui sera appliqué à la création
 * createService.overrideHandler.setPropertyDefaultValue("prefix", "Hi");
 * createService.overrideHandler.setMethod("greet", (self, name) => `${self.prefix} ${name.toUpperCase()}`);
 * 
 * const overridden = createService("Hello");
 * // prefix override + greet override
 * overridden.greet("Ada");
 * // "Hi ADA"
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/override
 * 
 * @namespace C
 * 
 */
export declare function createOverride<GenericInterface extends object>(overrideName: string): OverrideHandler<GenericInterface>;
export {};
