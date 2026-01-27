import { type AnyFunction, type SimplifyTopLevel, type MayBeGetter, type Unwrap, type MaybePromise } from "../../common";
import { type Left } from "../left";
import { type Right } from "./create";
import * as DEither from "..";
type Either = MaybePromise<Right | Left>;
type ComputeResult<GenericGroup extends Record<string, MayBeGetter<Either>>> = Promise<DEither.Success<SimplifyTopLevel<{
    [Prop in keyof GenericGroup]: GenericGroup[Prop] extends AnyFunction ? Unwrap<Extract<Awaited<ReturnType<GenericGroup[Prop]>>, Right>> : Unwrap<Extract<Awaited<GenericGroup[Prop]>, Right>>;
}>> | {
    [Prop in keyof GenericGroup]: GenericGroup[Prop] extends AnyFunction ? Extract<Awaited<ReturnType<GenericGroup[Prop]>>, Left> : Extract<Awaited<GenericGroup[Prop]>, Left>;
}[keyof GenericGroup]>;
/**
 * The asyncGroup() function runs synchronous or asynchronous Either values in parallel (promises, Future) and returns the first Left encountered. If all are Right, it aggregates their values into a typed object.
 * 
 * Signature: `asyncGroup(group)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const asyncLoad = E.future(Promise.resolve(E.right("user.loaded", { id: 1 })));
 * const callbackRights = () => E.right("rights.loaded", ["read"]);
 * const promiseProfile = Promise.resolve(E.right("profile.loaded", { name: "Ada" }));
 * 
 * const result = await E.asyncGroup({
 * 	user: asyncLoad,
 * 	rights: callbackRights,
 * 	profile: promiseProfile,
 * });
 * 
 * // type: E.FutureError
 * ```
 * 
 * @remarks
 * - Stops at the first Left and forwards it as-is.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/asyncGroup
 * 
 * @namespace E
 * 
 */
export declare function asyncGroup<GenericGroup extends Record<string, MayBeGetter<Either>>>(group: GenericGroup): Extract<ComputeResult<GenericGroup>, any>;
export {};
