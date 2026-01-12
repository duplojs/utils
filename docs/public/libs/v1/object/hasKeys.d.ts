import { type RequiredKeys } from "./types/requiredKeys";
/**
 * Checks if an object has specific keys defined.
 * 
 * **Supported call styles:**
 * - Classic: `hasKeys(partialObject, keys)` → returns a boolean
 * - Curried: `hasKeys(keys)` → returns a function waiting for the object
 * - Classic predicate: `hasKeys(partialObject, keys)` → narrows the object type
 * - Curried predicate: `hasKeys(keys)` → narrows the object type
 * 
 * The input object is not mutated.
 * 
 * ```ts
 * const partialObj: {
 * 	name?: string;
 * 	age?: number;
 * } = {
 * 	name: "Ada",
 * };
 * 
 * if (O.hasKeys(partialObj, "name")) {
 * 	// partialObj has key "name"
 * }
 * 
 * pipe(
 * 	partialObj,
 * 	when(
 * 		O.hasKeys(
 * 			[
 * 				"name",
 * 				"age",
 * 			], // and
 * 		),
 * 		(value) => {
 * 			// value has both keys
 * 		},
 * 	),
 * );
 * ```
 * 
 * @remarks
 * - Predicate overloads (type guards) narrow the object type
 * - Passing an array of keys acts as an "and" (all keys must be present)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/object/hasKeys
 * 
 * @namespace O
 * 
 */
export declare function hasKeys<GenericObject extends object, GenericKeys extends keyof GenericObject>(keys: GenericKeys | readonly GenericKeys[]): (partialObject: GenericObject) => partialObject is RequiredKeys<GenericObject, NoInfer<GenericKeys>>;
export declare function hasKeys<GenericObject extends object, GenericKeys extends keyof GenericObject>(partialObject: GenericObject, keys: GenericKeys | readonly GenericKeys[]): partialObject is RequiredKeys<GenericObject, NoInfer<GenericKeys>>;
