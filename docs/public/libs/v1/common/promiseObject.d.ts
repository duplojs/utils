import { type AnyValue } from "./types/anyValue";
import { type MaybePromise } from "./types/maybePromise";
import { type SimplifyTopLevel } from "./types/simplifyTopLevel";
export type AwaitedPromiseObject<GenericObject extends Record<string, MaybePromise<unknown>>> = {
    [Prop in keyof GenericObject]: Awaited<GenericObject[Prop]>;
};
export declare function promiseObject<GenericValue extends AnyValue, GenericObject extends Record<string, MaybePromise<GenericValue>>>(object: GenericObject): Promise<SimplifyTopLevel<AwaitedPromiseObject<GenericObject>>>;
