import { type SimplifyTopLevel } from "../common";
/**
 * Transforms a single object property.
 * 
 * **Supported call styles:**
 * - Classic: `transformProperty(obj, key, transform)` → returns a new object
 * - Curried: `transformProperty(key, transform)` → returns a function waiting for the object
 * 
 * The input object is not mutated.
 * 
 * @example
 * ```ts
 * O.transformProperty(
 * 	{
 * 		count: 2,
 * 	},
 * 	"count",
 * 	(value) => value + 1,
 * ); // { count: 3 }
 * 
 * pipe(
 * 	{
 * 		name: "Ada",
 * 	},
 * 	O.transformProperty("name", (value) => value.toUpperCase()),
 * ); // { name: "ADA" }
 * 
 * O.transformProperty(
 * 	{
 * 		active: true,
 * 	},
 * 	"active",
 * 	(value) => !value,
 * ); // { active: false }
 * 
 * ```
 * 
 * @see [`O.transformProperties`](https://utils.duplojs.dev/en/v1/api/object/transformProperties) For multiple keys
 * @see https://utils.duplojs.dev/en/v1/api/object/transformProperty
 * 
 * @namespace O
 * 
 */
export declare function transformProperty<GenericObject extends object, GenericKey extends keyof GenericObject, GenericNewValue extends unknown>(key: GenericKey, transform: (value: GenericObject[GenericKey]) => GenericNewValue): (obj: GenericObject) => SimplifyTopLevel<{
    [Prop in GenericKey]: GenericNewValue;
} & Omit<GenericObject, GenericKey>>;
export declare function transformProperty<GenericObject extends object, GenericKey extends keyof GenericObject, GenericNewValue extends unknown>(obj: GenericObject, key: GenericKey, transform: (value: GenericObject[GenericKey]) => GenericNewValue): SimplifyTopLevel<{
    [Prop in GenericKey]: GenericNewValue;
} & Omit<GenericObject, GenericKey>>;
