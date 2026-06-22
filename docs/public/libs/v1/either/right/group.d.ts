import { type AnyFunction, type SimplifyTopLevel, type MayBeGetter, type Unwrap } from "../../common";
import { type Left } from "../left";
import { type Right } from "./create";
import * as DEither from "..";
type Either = Right | Left;
type ComputeResult<GenericGroup extends (Record<string, MayBeGetter<Either>> | readonly MayBeGetter<Either>[])> = (DEither.Success<SimplifyTopLevel<{
    -readonly [Prop in keyof GenericGroup]: GenericGroup[Prop] extends infer InferredValue ? InferredValue extends AnyFunction ? Unwrap<Extract<ReturnType<InferredValue>, Right>> : Unwrap<Extract<InferredValue, Right>> : never;
}>> | (GenericGroup extends readonly (infer InferredElement)[] ? InferredElement extends AnyFunction ? Extract<ReturnType<InferredElement>, Left> : Extract<InferredElement, Left> : {
    [Prop in Exclude<keyof GenericGroup, keyof any[]>]: GenericGroup[Prop] extends AnyFunction ? Extract<ReturnType<GenericGroup[Prop]>, Left> : Extract<GenericGroup[Prop], Left>;
}[Exclude<keyof GenericGroup, keyof any[]>]));
/**
 * The group() function evaluates several Either values, or functions returning an Either, and aggregates their Right values into a Success.
 * 
 * **Supported call styles:**
 * - Object: `group({ key: either })` → returns a Success containing a typed object
 * - Array or tuple: `group([either, getter])` → returns a Success containing an array or typed tuple
 * 
 * Values are evaluated in order. The first Left is returned as-is and subsequent getters are not called. The input object or array is not mutated.
 * 
 * ```ts
 * // Aggregate an object.
 * const objectResult = E.group({
 * 	user: E.right("user.loaded", { id: 1 }),
 * 	rights: E.right("rights.loaded", ["read", "write"]),
 * });
 * 
 * // E.Success<{
 * //   user: { readonly id: 1 };
 * //   rights: readonly ["read", "write"];
 * // }>
 * 
 * // Preserve the positions and types of a tuple.
 * const tupleResult = E.group([
 * 	E.right("user.loaded", { id: 1 }),
 * 	E.right("rights.loaded", ["read"]),
 * ]);
 * 
 * // E.Success<[
 * //   { readonly id: 1 },
 * //   readonly ["read"]
 * // ]>
 * 
 * // Return the first Left.
 * const errorResult = E.group([
 * 	E.right("user.loaded", { id: 1 }),
 * 	E.left("rights.missing", null),
 * 	E.left("profile.missing", null),
 * ]);
 * 
 * // E.Left<"rights.missing", null> | E.Left<"profile.missing", null>
 * ```
 * 
 * @remarks
 * - The `const` generic parameter automatically infers an array literal as a tuple without requiring an assertion.
 * - Getters can be used to defer work until the preceding values have succeeded.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/group
 * 
 * @namespace E
 * 
 */
export declare function group<const GenericGroup extends (Record<string, MayBeGetter<Either>> | readonly MayBeGetter<Either>[])>(group: GenericGroup): Extract<ComputeResult<GenericGroup>, any>;
export {};
