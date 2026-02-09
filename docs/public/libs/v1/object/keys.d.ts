/**
 * Returns object keys.
 * 
 * Signature: `keys(object)` → returns keys
 * 
 * The input object is not mutated.
 * 
 * ```ts
 * O.keys(
 * 	{
 * 		name: "Ada",
 * 		age: 36,
 * 	},
 * ); // ["name", "age"]
 * 
 * pipe(
 * 	{
 * 		name: "William",
 * 		role: "client",
 * 	},
 * 	O.keys,
 * ); // ["name", "role"]
 * ```
 * 
 * @remarks
 * - Filters runtime keys used by the library
 * - Uses the same semantics as [`Object.keys`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/object/keys
 * 
 * @namespace O
 * 
 */
export declare function keys<GenericObject extends object>(object: GenericObject): (`${Exclude<keyof GenericObject, symbol>}`)[];
