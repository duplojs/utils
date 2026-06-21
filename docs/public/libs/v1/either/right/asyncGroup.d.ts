import { type AnyFunction, type SimplifyTopLevel, type MayBeGetter, type Unwrap, type MaybePromise } from "../../common";
import { type Left } from "../left";
import { type Right } from "./create";
import * as DEither from "..";
type Either = MaybePromise<Right | Left>;
type ComputeResult<GenericGroup extends (Record<string, MayBeGetter<Either>> | readonly MayBeGetter<Either>[])> = Extract<Promise<DEither.Success<SimplifyTopLevel<{
    -readonly [Prop in keyof GenericGroup]: GenericGroup[Prop] extends infer InferredValue ? InferredValue extends AnyFunction ? Unwrap<Extract<Awaited<ReturnType<InferredValue>>, Right>> : Unwrap<Extract<Awaited<InferredValue>, Right>> : never;
}>> | (GenericGroup extends readonly (infer InferredElement)[] ? InferredElement extends AnyFunction ? Extract<Awaited<ReturnType<InferredElement>>, Left> : Extract<Awaited<InferredElement>, Left> : {
    [Prop in Exclude<keyof GenericGroup, keyof any[]>]: GenericGroup[Prop] extends AnyFunction ? Extract<Awaited<ReturnType<GenericGroup[Prop]>>, Left> : Extract<Awaited<GenericGroup[Prop]>, Left>;
}[Exclude<keyof GenericGroup, keyof any[]>])>, any>;
/**
 * The asyncGroup() function evaluates several synchronous or asynchronous Either values, promises, Futures, or getters and aggregates their Right values into a Success.
 * 
 * **Supported call styles:**
 * - Object: `asyncGroup({ key: either })` → returns a Promise of a Success containing a typed object
 * - Array or tuple: `asyncGroup([either, getter])` → returns a Promise of a Success containing an array or typed tuple
 * 
 * Values are awaited in order. The first Left is returned as-is and subsequent getters are not called. The input object or array is not mutated.
 * 
 * ```ts
 * // Aggregate an object containing synchronous and asynchronous values.
 * const asyncLoad = E.future(Promise.resolve(E.right("user.loaded", { id: 1 })));
 * const loadedRights = E.right("rights.loaded", ["read"]);
 * const promiseProfile = Promise.resolve(E.right("profile.loaded", { name: "Ada" }));
 * 
 * const objectResult = await E.asyncGroup({
 * 	user: asyncLoad,
 * 	rights: loadedRights,
 * 	profile: promiseProfile,
 * });
 * 
 * // E.FutureError | E.Success<{
 * //   user: { readonly id: 1 };
 * //   rights: readonly ["read"];
 * //   profile: { readonly name: "Ada" };
 * // }>
 * 
 * // Preserve the positions and types of a tuple.
 * const tupleResult = await E.asyncGroup([
 * 	Promise.resolve(E.right("user.loaded", { id: 1 })),
 * 	Promise.resolve(E.right("rights.loaded", ["read"])),
 * ]);
 * 
 * // E.Success<[{ readonly id: 1 }, readonly ["read"]]>
 * 
 * // Return the first Left.
 * const errorResult = await E.asyncGroup([
 * 	Promise.resolve(E.right("user.loaded", { id: 1 })),
 * 	Promise.resolve(E.left("rights.missing", null)),
 * 	Promise.resolve(E.left("profile.missing", null)),
 * ]);
 * 
 * // E.Left<"rights.missing", null> | E.Left<"profile.missing", null>
 * ```
 * 
 * @remarks
 * - A tuple declared with `as const` preserves the type and position of each aggregated value.
 * - Use getters to defer asynchronous work until the preceding values have succeeded.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/asyncGroup
 * 
 * @namespace E
 * 
 */
export declare function asyncGroup<const GenericGroup extends (Record<string, MayBeGetter<Either>> | readonly MayBeGetter<Either>[])>(group: GenericGroup): Extract<ComputeResult<GenericGroup>, any>;
export {};
