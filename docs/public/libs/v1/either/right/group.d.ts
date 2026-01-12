import { type AnyFunction, type SimplifyTopLevel, type MayBeGetter, type Unwrap } from "../../common";
import { type EitherLeft } from "../left";
import { type EitherRight } from "./create";
import * as DEither from "..";
type Either = EitherRight | EitherLeft;
type ComputeResult<GenericGroup extends Record<string, MayBeGetter<Either>>> = (DEither.EitherSuccess<SimplifyTopLevel<{
    [Prop in keyof GenericGroup]: GenericGroup[Prop] extends AnyFunction ? Unwrap<Extract<ReturnType<GenericGroup[Prop]>, EitherRight>> : Unwrap<Extract<GenericGroup[Prop], EitherRight>>;
}>> | {
    [Prop in keyof GenericGroup]: GenericGroup[Prop] extends AnyFunction ? Extract<ReturnType<GenericGroup[Prop]>, EitherLeft> : Extract<GenericGroup[Prop], EitherLeft>;
}[keyof GenericGroup]);
/**
 * The group() function runs several Either values (or functions returning an Either) and returns the first Left encountered. If all are Right, it aggregates their values into a typed object.
 * 
 * Signature: `group(group)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const result = E.group({
 * 	user: E.right("user.loaded", { id: 1 }),
 * 	rights: E.right("rights.loaded", ["read", "write"]),
 * 	profile: E.left("profile.missing", null),
 * });
 * 
 * // type: E.EitherLeft<"profile.missing", null>
 * // | E.EitherSuccess<{ user: { readonly id: 1; }; rights: readonly ["read", "write"]; profile: never; }>
 * ```
 * 
 * @remarks
 * - Stops at the first Left and forwards it as-is.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/group
 * 
 * @namespace E
 * 
 */
export declare function group<GenericGroup extends Record<string, MayBeGetter<Either>>>(group: GenericGroup): Extract<ComputeResult<GenericGroup>, any>;
export {};
