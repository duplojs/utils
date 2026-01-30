import { type SimplifyTopLevel } from "./types";
import { type Unwrap } from "./unwrap";
type ComputeResult<GenericGroup extends Record<string, unknown>> = SimplifyTopLevel<{
    [Prop in keyof GenericGroup]: Unwrap<GenericGroup[Prop]>;
}>;
/**
 * The unwrapGroup() function unwraps every value of an object using unwrap(), returning a new object with the same keys.
 * 
 * Signature: `unwrapGroup(group)` → returns an object
 * 
 * The input object is not mutated.
 * 
 * ```ts
 * const first = unwrapGroup({
 * 	value: wrapValue(1),
 * });
 * // { value: 1 }
 * 
 * const mixed = unwrapGroup({
 * 	count: wrapValue(2),
 * 	label: "ok",
 * });
 * // { count: 2, label: "ok" }
 * 
 * const user = unwrapGroup({
 * 	firstName: wrapValue("Ada"),
 * 	lastName: "Lovelace",
 * });
 * // { firstName: "Ada", lastName: "Lovelace" }
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/unwrapGroup
 * 
 */
export declare function unwrapGroup<const GenericGroup extends Record<string, unknown>>(group: GenericGroup): ComputeResult<GenericGroup>;
export {};
