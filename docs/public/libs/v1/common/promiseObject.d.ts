import { type AnyValue } from "../common/types/anyValue";
import { type MaybePromise } from "../common/types/maybePromise";
import { type SimplifyTopLevel } from "../common/types/simplifyTopLevel";
export type AwaitedPromiseObject<GenericObject extends Record<string, MaybePromise<unknown>>> = {
    [Prop in keyof GenericObject]: Awaited<GenericObject[Prop]>;
};
/**
 * The promiseObject() function transforms an object of promises (or values) into a promise of a resolved object, keeping keys and precise typing.
 * 
 * Signature: `promiseObject(promises)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const input = {
 * 	user: Promise.resolve({
 * 		id: 1,
 * 		name: "Alice",
 * 	}),
 * 	count: 3,
 * };
 * 
 * const result = await promiseObject(input);
 * 
 * // type: { user: { id: number; name: string; }; count: number; }
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/promiseObject
 * 
 * @namespace C
 * 
 */
export declare function promiseObject<GenericValue extends AnyValue, GenericObject extends Record<string, MaybePromise<GenericValue>>>(object: GenericObject): Promise<SimplifyTopLevel<AwaitedPromiseObject<GenericObject>>>;
