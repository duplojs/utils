import { type ObjectKey } from "../common";
/**
 * Creates an entry tuple from a key and value.
 * 
 * Signature: `entry(key, value)` → returns a tuple
 * 
 * ```ts
 * O.entry(
 * 	"name",
 * 	"Ada",
 * ); // ["name", "Ada"]
 * 
 * O.entry(
 * 	"active",
 * 	true,
 * ); // ["active", true]
 * 
 * O.entry(
 * 	"count",
 * 	2,
 * ); // ["count", 2]
 * 
 * ```
 * 
 * @see [`O.fromEntries`](https://utils.duplojs.dev/en/v1/api/object/fromEntries) For building objects
 * @see https://utils.duplojs.dev/en/v1/api/object/entry
 * 
 * @namespace O
 * 
 */
export declare function entry<GenericKey extends ObjectKey, GenericValue extends unknown>(key: GenericKey, value: GenericValue): readonly [GenericKey, GenericValue];
