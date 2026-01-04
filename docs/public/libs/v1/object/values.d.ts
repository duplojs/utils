import { type AnyValue } from "../common/types/anyValue";
/**
 * Returns object values.
 * 
 * Signature: `values(object)` → returns values
 * 
 * The input object is not mutated.
 * 
 * @example
 * ```ts
 * O.values(
 * 	{
 * 		name: "Ada",
 * 		age: 36,
 * 	},
 * ); // ["Ada", 36]
 * 
 * pipe(
 * 	{
 * 		name: "William",
 * 		role: "client",
 * 	},
 * 	O.values,
 * ); // ["William", "client"]
 * ```
 * 
 * @remarks
 * - Filters runtime keys used by the library
 * - Uses the same semantics as [`Object.values`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/object/values
 * 
 * @namespace O
 * 
 */
export declare function values<GenericValue extends AnyValue>(object: Record<string, GenericValue>): GenericValue[];
