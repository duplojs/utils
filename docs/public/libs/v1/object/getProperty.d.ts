import { type PartialKeys } from "./types";
import { type UnionObjectToIntersection } from "./types/UnionObjectToIntersection";
type MergeTopLevelUnionObject<GenericObject extends object, GenericFullObjectKeys extends keyof UnionObjectToIntersection<GenericObject> = keyof UnionObjectToIntersection<GenericObject>> = PartialKeys<{
    [Prop in GenericFullObjectKeys]: (GenericObject extends object ? Prop extends keyof GenericObject ? GenericObject[Prop] : never : never);
}, Exclude<GenericFullObjectKeys, keyof GenericObject>>;
/**
 * Gets a property value by key.
 * 
 * **Supported call styles:**
 * - Classic: `getProperty(obj, key)` → returns the value
 * - Curried: `getProperty(key)` → returns a function waiting for the object
 * 
 * The input object is not mutated.
 * 
 * @example
 * ```ts
 * O.getProperty(
 * 	{
 * 		name: "Ada",
 * 	},
 * 	"name",
 * ); // "Ada"
 * 
 * pipe(
 * 	{
 * 		count: 2,
 * 	},
 * 	O.getProperty("count"),
 * ); // 2
 * 
 * O.getProperty(
 * 	{
 * 		active: true,
 * 	},
 * 	"active",
 * ); // true
 * 
 * ```
 * 
 * @see [`O.getDeepProperty`](https://utils.duplojs.dev/en/v1/api/object/getDeepProperty) For nested paths
 * @see https://utils.duplojs.dev/en/v1/api/object/getProperty
 * 
 * @namespace O
 * 
 */
export declare function getProperty<GenericObject extends object, GenericFullObject extends MergeTopLevelUnionObject<GenericObject>, GenericKey extends keyof GenericFullObject>(key: GenericKey): (obj: GenericObject) => GenericFullObject[GenericKey];
export declare function getProperty<GenericObject extends object, GenericFullObject extends MergeTopLevelUnionObject<GenericObject>, GenericKey extends keyof GenericFullObject>(obj: GenericObject, key: GenericKey): GenericFullObject[GenericKey];
export {};
