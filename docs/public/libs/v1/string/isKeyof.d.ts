import { type ObjectKey } from "../common/types/objectKey";
/**
 * Checks whether a key exists on an object.
 * 
 * **Supported call styles:**
 * - Classic: `isKeyof(key, obj)` → returns a boolean
 * - Curried: `isKeyof(obj)` → returns a function waiting for the key
 * - Classic predicate: `isKeyof(key, obj)` → narrows the key type
 * - Curried predicate: `isKeyof(obj)` → narrows the key type
 * 
 * The input object is not mutated.
 * 
 * ```ts
 * const userObject = {
 * 	name: "John",
 * 	age: 30,
 * };
 * 
 * const keyValue = "name" as string;
 * 
 * if (S.isKeyof(keyValue, userObject)) {
 * 	// keyValue is a key of userObject
 * }
 * 
 * pipe(
 * 	"age",
 * 	when(
 * 		S.isKeyof(userObject),
 * 		(value) => {
 * 			// value is a key of userObject
 * 		},
 * 	),
 * );
 * 
 * S.isKeyof("title", userObject); // false
 * 
 * ```
 * 
 * @remarks
 * - Predicate overloads (type guards) narrow the key type
 * 
 * @see https://utils.duplojs.dev/en/v1/api/string/isKeyof
 * 
 * @namespace S
 * 
 */
export declare function isKeyof<GenericObject extends object, GenericKey extends ObjectKey>(obj: GenericObject): (key: GenericKey) => key is keyof GenericObject & GenericKey;
export declare function isKeyof<GenericObject extends object, GenericKey extends ObjectKey>(key: GenericKey, obj: GenericObject): key is keyof GenericObject & GenericKey;
